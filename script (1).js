// ── Smooth 3D Cursor Bump & Volumetric Light Engine ──
const canvas = document.getElementById('rippleCanvas');
const ctx    = canvas.getContext('2d', { alpha: false });

let width, height;
let sourceCanvas, sourceCtx;
let hasValidImg = false;
let isOff = false;

// 3D Luminance Grid parameters
const step = (typeof window !== 'undefined' && window.innerWidth < 768) ? 5 : 4; 
let cols = 0, rows = 0;
let lumGrid = new Float32Array(0);

// Precomputed Bell Curve Lookup Table (LUT) for zero Math.cos / Math.pow / Math.sqrt overhead in 60fps loop
const LUT_SIZE = 1024;
const BELL_LUT = new Float32Array(LUT_SIZE);
for (let i = 0; i < LUT_SIZE; i++) {
    const normDist = Math.sqrt(i / (LUT_SIZE - 1));
    BELL_LUT[i] = Math.pow(Math.cos(normDist * Math.PI * 0.5), 2.2);
}

// Mouse state with smooth Lerp interpolation
const mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    isHovering: false,
    radius: 360,     // Spotlight lighting radius
    bumpRadius: 260, // 3D height bump radius
};

// Ambient floating dust particles
const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    z: Math.random() * 2 + 0.5,
    size: Math.random() * 2 + 0.8,
    vx: (Math.random() - 0.5) * 0.2,
    vy: -Math.random() * 0.3 - 0.1,
    alpha: Math.random() * 0.4 + 0.1,
}));

// Loading screen reference
const loader = document.getElementById('loader');

const img = new Image();
img.crossOrigin = 'Anonymous';
img.src = 'Seashell.webp';

img.onload = () => {
    hasValidImg = true;
    initEngine();
    dismissLoader();
};

img.onerror = () => {
    hasValidImg = false;
    initEngine();
    dismissLoader();
};

function dismissLoader() {
    setTimeout(() => {
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
        document.body.classList.add('page-loaded');
    }, 600);
}

function initEngine() {
    resizeCanvas();
    buildSourceTexture();
    requestAnimationFrame(renderLoop);
}

function resizeCanvas() {
    width  = window.innerWidth;
    height = window.innerHeight;

    if (width <= 0 || height <= 0) return;

    canvas.width  = width;
    canvas.height = height;

    if (sourceCanvas) {
        buildSourceTexture();
    }
}

function buildSourceTexture() {
    if (width <= 0 || height <= 0) return;

    sourceCanvas = document.createElement('canvas');
    sourceCanvas.width  = width;
    sourceCanvas.height = height;
    sourceCtx = sourceCanvas.getContext('2d');

    const ratio = width / height;

    if (hasValidImg && img.naturalWidth > 0 && img.naturalHeight > 0) {
        const imgRatio = img.naturalWidth / img.naturalHeight;
        let dw, dh, ox, oy;
        if (imgRatio > ratio) {
            dh = height; dw = height * imgRatio; ox = (width - dw) / 2; oy = 0;
        } else {
            dw = width; dh = width / imgRatio; ox = 0; oy = (height - dh) / 2;
        }
        sourceCtx.fillStyle = '#050505';
        sourceCtx.fillRect(0, 0, width, height);
        sourceCtx.drawImage(img, ox, oy, dw, dh);
    } else {
        // High-contrast fallback artwork
        sourceCtx.fillStyle = '#07070a';
        sourceCtx.fillRect(0, 0, width, height);

        const grad = sourceCtx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, Math.max(width, height) * 0.6);
        grad.addColorStop(0, '#2a2d3d');
        grad.addColorStop(0.4, '#13141f');
        grad.addColorStop(1, '#050507');
        sourceCtx.fillStyle = grad;
        sourceCtx.fillRect(0, 0, width, height);

        sourceCtx.save();
        sourceCtx.translate(width / 2, height / 2);

        for (let i = 0; i < 12; i++) {
            sourceCtx.rotate((Math.PI * 2) / 12);
            sourceCtx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.25)' : 'rgba(180, 210, 255, 0.12)';
            sourceCtx.beginPath();
            sourceCtx.ellipse(0, -Math.min(width, height) * 0.25, 6, Math.min(width, height) * 0.22, 0, 0, Math.PI * 2);
            sourceCtx.fill();
        }

        sourceCtx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        sourceCtx.font = `600 ${Math.min(width * 0.045, 48)}px Georgia, serif`;
        sourceCtx.textAlign = 'center';
        sourceCtx.textBaseline = 'middle';
        sourceCtx.fillText('DEREK SAGERS', 0, -10);

        sourceCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        sourceCtx.font = `400 ${Math.min(width * 0.015, 14)}px 'Inter', sans-serif`;
        sourceCtx.letterSpacing = '6px';
        sourceCtx.fillText('STUDIO COLLECTION', 0, 32);

        sourceCtx.restore();
    }

    sampleBumpGrid();
}

function sampleBumpGrid() {
    if (width <= 0 || height <= 0 || !sourceCtx) return;

    cols = Math.ceil(width / step);
    rows = Math.ceil(height / step);
    if (cols <= 0 || rows <= 0) return;

    lumGrid = new Float32Array(cols * rows);

    const imgData = sourceCtx.getImageData(0, 0, width, height).data;

    for (let r = 0; r < rows; r++) {
        const y = r * step;
        for (let c = 0; c < cols; c++) {
            const x = c * step;
            const idx = (y * width + x) * 4;
            const rVal = imgData[idx];
            const gVal = imgData[idx + 1];
            const bVal = imgData[idx + 2];
            lumGrid[r * cols + c] = (rVal * 0.299 + gVal * 0.587 + bVal * 0.114) / 255;
        }
    }
}

// Idle & Autonomous Wandering State
let lastInteractionTime = Date.now();
let wanderAngle = Math.random() * Math.PI * 2;

// Event Listeners for mouse/touch tracking
window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.isHovering = true;
    lastInteractionTime = Date.now();
});

window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isHovering = true;
        lastInteractionTime = Date.now();
    }
}, { passive: true });

window.addEventListener('mouseleave', () => {
    mouse.isHovering = false;
});

let lastRotX = 0, lastRotY = 0;

function renderLoop() {
    if (isOff) return;
    if (width <= 0 || height <= 0 || !sourceCanvas) {
        requestAnimationFrame(renderLoop);
        return;
    }

    const cx = width / 2;
    const cy = height / 2;
    const now = Date.now();

    // Autonomous wandering when mouse is idle (>1.8s of inactivity or left page)
    if (!mouse.isHovering || now - lastInteractionTime > 1800) {
        wanderAngle += 0.018; // Faster dynamic wandering speed
        
        // Dynamic sweep allowing light to occasionally wander slightly off screen edges
        const spanX = width * 0.38;
        const spanY = height * 0.38;
        
        // Multi-frequency Lissajous wave for energetic floating light motion
        mouse.targetX = cx + Math.sin(wanderAngle * 0.8) * spanX + Math.cos(wanderAngle * 1.5) * (spanX * 0.42);
        mouse.targetY = cy + Math.cos(wanderAngle * 0.6) * spanY + Math.sin(wanderAngle * 1.2) * (spanY * 0.42);
    }

    // Smooth Lerp for light target positioning
    mouse.x += (mouse.targetX - mouse.x) * 0.09;
    mouse.y += (mouse.targetY - mouse.y) * 0.09;

    const tiltX = (mouse.x - cx) / cx;
    const tiltY = (mouse.y - cy) / cy;

    // Subtle 3D Canvas tilt (Only write to DOM style when rotation changes by threshold)
    const rotX = -tiltY * 2.5;
    const rotY = tiltX * 2.5;
    if (Math.abs(rotX - lastRotX) > 0.02 || Math.abs(rotY - lastRotY) > 0.02) {
        lastRotX = rotX;
        lastRotY = rotY;
        canvas.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.01)`;
    }

    // 1. Clear Canvas with dark background
    ctx.fillStyle = '#050507';
    ctx.fillRect(0, 0, width, height);

    // 2. Draw dim base image (full resolution crisp image at ~12% opacity)
    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.drawImage(sourceCanvas, 0, 0);
    ctx.restore();

    // 3. Ambient Spotlight Lighting
    ctx.save();
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
    ctx.clip();
    
    ctx.globalAlpha = 0.55;
    ctx.drawImage(sourceCanvas, 0, 0);

    // Smooth lighting falloff gradient towards spotlight edge
    const spotGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, mouse.radius * 0.1,
        mouse.x, mouse.y, mouse.radius
    );
    spotGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    spotGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.4)');
    spotGrad.addColorStop(1, 'rgba(5, 5, 7, 1.0)');

    ctx.fillStyle = spotGrad;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();

    // 4. Smooth, Gapless 3D Continuous Surface Bump (Optimized O(1) LUT & Zero-State Loop)
    // Renders contiguous micro-tiles inside the cursor radius using fast precomputed lookup tables.
    ctx.save();
    
    const mx = mouse.x;
    const my = mouse.y;
    const bumpRadius = mouse.bumpRadius;
    const bumpRadiusSq = bumpRadius * bumpRadius;
    const invBumpRadiusSq = 1 / bumpRadiusSq;
    const halfStep = step * 0.5;
    const destSize = step + 0.6; // Precomputed dest width & height

    const minCol = Math.max(0, Math.floor((mx - bumpRadius) / step));
    const maxCol = Math.min(cols - 1, Math.ceil((mx + bumpRadius) / step));
    const minRow = Math.max(0, Math.floor((my - bumpRadius) / step));
    const maxRow = Math.min(rows - 1, Math.ceil((my + bumpRadius) / step));

    // Set globalAlpha ONCE outside the loop to avoid thousands of expensive canvas state setters per frame
    ctx.globalAlpha = 0.85;

    for (let r = minRow; r <= maxRow; r++) {
        const y = r * step;
        const rowOffset = r * cols;
        for (let c = minCol; c <= maxCol; c++) {
            const x = c * step;

            const dx = (x + halfStep) - mx;
            const dy = (y + halfStep) - my;
            const distSq = dx * dx + dy * dy;

            if (distSq < bumpRadiusSq) {
                // Fast LUT Lookup - zero Math.sqrt, Math.cos, or Math.pow calls
                const lutIdx = (distSq * invBumpRadiusSq * 1023) | 0;
                const bell = BELL_LUT[lutIdx];

                const lum = lumGrid[rowOffset + c] || 0;

                // 3D Lift factor: Mouse center raises highest, lighter pixels extend further outward
                const lift = (0.22 * bell) + (0.12 * bell * lum);
                const factor = 1.0 - lift;

                // Source rectangle mapping
                const srcW = step * factor;
                const srcH = step * factor;
                const srcX = mx + dx * factor - srcW * 0.5;
                const srcY = my + dy * factor - srcH * 0.5;

                // Draw seamlessly with contiguous destination tiling (+0.6px overlap eliminates seams)
                ctx.drawImage(
                    sourceCanvas,
                    srcX, srcY, srcW, srcH,
                    x, y, destSize, destSize
                );
            }
        }
    }
    ctx.restore();

    // 5. Soft Specular Dome Highlight on the 3D Bump
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    
    const domeHighlight = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, mouse.bumpRadius * 0.85
    );
    domeHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.28)');
    domeHighlight.addColorStop(0.4, 'rgba(200, 225, 255, 0.12)');
    domeHighlight.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = domeHighlight;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, mouse.bumpRadius * 0.85, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 6. Floating Dust Particles in Atmosphere
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    particles.forEach((p) => {
        p.x += p.vx + tiltX * 0.2;
        p.y += p.vy + tiltY * 0.2;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pdx = p.x - mouse.x;
        const pdy = p.y - mouse.y;
        const distToMouse = Math.sqrt(pdx * pdx + pdy * pdy);
        const inSpot = Math.max(0, 1 - distToMouse / mouse.radius);
        const pAlpha = (p.alpha + inSpot * 0.5) * (0.4 + 0.6 * Math.sin(Date.now() * 0.002 + p.z));

        ctx.fillStyle = `rgba(220, 235, 255, ${pAlpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + inSpot * 0.5), 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.restore();

    // 7. Vignette Frame
    ctx.save();
    const frameVignette = ctx.createRadialGradient(cx, cy, Math.min(width, height) * 0.45, cx, cy, Math.max(width, height) * 0.75);
    frameVignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    frameVignette.addColorStop(1, 'rgba(3, 3, 5, 0.75)');
    ctx.fillStyle = frameVignette;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();

    requestAnimationFrame(renderLoop);
}

// Explore button page transition
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.body.classList.add('transition-active');
        document.body.classList.add('page-leaving');
        setTimeout(() => { window.location.href = 'portfolio.html'; }, 550);
    });
}

document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
    
    link.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        if (href === currentPath) return;

        e.preventDefault();
        document.body.classList.add('transition-active');
        document.body.classList.add('page-leaving');
        
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

// Resize handler
window.addEventListener('resize', () => {
    resizeCanvas();
});


