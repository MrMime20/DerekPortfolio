// ── Commission data ──
const defaultCommissions = [
    {
        title: "Custom AF1 Painting",
        open: true,
        price: "$120–$180",
        turnaround: "2–3 weeks",
        desc: "Hand-painted Air Force 1s using high-quality acrylic leather paint. Sealed for durability and wearability. You supply the shoes (or I source them for an additional fee). Any design — bring a reference or let me run with it.",
        images: ["./FlowerShoe.webp", "./DragonShoe.webp", "./BaseballShoeAngle1.webp"]
    },
    {
        title: "8×10 Watercolor Portrait",
        open: true,
        price: "$85",
        turnaround: "1–2 weeks",
        desc: "A traditional watercolor portrait on 300gsm cold-press paper. People, pets, characters — all welcome. Comes with a digital scan at full resolution and the original shipped to you.",
        images: ["./AddieFox.webp", "./Achebe.webp"]
    },
    {
        title: "Digital Illustration",
        open: false,
        price: "$60–$200",
        turnaround: "1–3 weeks",
        desc: "Fully rendered digital artwork delivered at print resolution (300dpi). Pricing scales with complexity — bust, half-body, or full scene. Multiple revisions included.",
        images: ["./Spiderman.webp", "./GhostOnSwing.webp"]
    },
    {
        title: "Textile / Embroidery Piece",
        open: true,
        price: "$50–$150",
        turnaround: "3–5 weeks",
        desc: "Hand-stitched embroidery on fabric of your choice. Great for patches, framed art, or wearables. Design complexity and size determine pricing. Each piece is one of a kind.",
        images: ["./ToujourBelle-AimerMaman.webp"]
    },
    {
        title: "Mixed Media Canvas",
        open: false,
        price: "$200+",
        turnaround: "4–6 weeks",
        desc: "Large-format mixed media work combining acrylic, ink, collage, and found materials. Prices vary heavily by size and complexity. Contact me with your vision and I'll give a quote.",
        images: []
    },
    {
        title: "Mini Watercolor (4×6)",
        open: true,
        price: "$35",
        turnaround: "3–5 days",
        desc: "A small, loose watercolor study — perfect for gifts or something affordable to hang. Quick turnaround. Subject can be almost anything: object, landscape, character, pet.",
        images: ["./Waterfall.webp", "./Seashell.webp"]
    }
];

// Load saved state from editor if available
const STORAGE_KEY = 'derek_portfolio_state_v1';
let commissions = defaultCommissions;
try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.commissions) && parsed.commissions.length > 0) {
            commissions = parsed.commissions;
        }
    }
} catch (e) {
    console.warn('Could not read saved commissions state:', e);
}

// ── Scroll reveal observer ──
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

function initScrollReveal() {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── Render cards ──
const grid = document.getElementById('commissionsGrid');

if (grid) {
    grid.innerHTML = '';
    commissions.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = `commission-card reveal${c.open ? '' : ' closed-card'}`;

        const hasImages = Array.isArray(c.images) && c.images.length > 0;

        let stackHtml = '';
        if (hasImages) {
            const layersHtml = c.images.slice(0, 3).map((imgUrl, imgIdx) => `
                <div class="stack-layer layer-${imgIdx}">
                    <img src="${imgUrl}" alt="Sample artwork ${imgIdx + 1}" draggable="false" onerror="this.onerror=null;this.src='https://picsum.photos/100/100?grayscale';">
                </div>
            `).join('');

            stackHtml = `
                <div class="commission-image-stack" data-comm-index="${i}" title="Click to view ${c.images.length} sample artwork${c.images.length > 1 ? 's' : ''}">
                    <div class="stack-layers">
                        ${layersHtml}
                    </div>
                    <div class="stack-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3 12.5"/><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3 17.5"/></svg>
                        <span>${c.images.length} ${c.images.length === 1 ? 'Sample' : 'Samples'}</span>
                    </div>
                </div>
            `;
        }

        card.innerHTML = `
            <span class="status-badge ${c.open ? 'open' : 'closed'}">
                <span class="status-dot"></span>
                ${c.open ? 'Open' : 'Closed'}
            </span>
            <h2 class="card-title">${c.title}</h2>
            <p class="card-desc">${c.desc}</p>
            <div class="card-footer-row">
                <div class="card-meta">
                    <div class="meta-item">
                        <span class="meta-label">Starting at</span>
                        <span class="meta-value">${c.price}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Turnaround</span>
                        <span class="meta-value">${c.turnaround}</span>
                    </div>
                </div>
                ${stackHtml}
            </div>
        `;

        grid.appendChild(card);
        revealObserver.observe(card);
    });
}

// ── Commission Modal Functionality ──
let activeCommissionIndex = -1;
let activeImageIndex = 0;

const commModal = document.getElementById('commModal');
const commModalBackdrop = document.getElementById('commModalBackdrop');
const commModalClose = document.getElementById('commModalClose');
const commModalTitle = document.getElementById('commModalTitle');
const commModalCounter = document.getElementById('commModalCounter');
const commModalImg = document.getElementById('commModalImg');
const commModalPrev = document.getElementById('commModalPrev');
const commModalNext = document.getElementById('commModalNext');
const commModalThumbs = document.getElementById('commModalThumbs');

function openCommissionModal(commIdx, imgIdx = 0) {
    const c = commissions[commIdx];
    if (!c || !Array.isArray(c.images) || c.images.length === 0) return;

    activeCommissionIndex = commIdx;
    activeImageIndex = imgIdx;

    updateModalView();

    if (commModal) {
        commModal.classList.add('open');
        commModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeCommissionModal() {
    if (commModal) {
        commModal.classList.remove('open');
        commModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function updateModalView() {
    const c = commissions[activeCommissionIndex];
    if (!c || !c.images || c.images.length === 0) return;

    if (activeImageIndex < 0) activeImageIndex = c.images.length - 1;
    if (activeImageIndex >= c.images.length) activeImageIndex = 0;

    if (commModalTitle) commModalTitle.textContent = c.title;
    if (commModalCounter) commModalCounter.textContent = `${activeImageIndex + 1} of ${c.images.length}`;

    if (commModalImg) {
        commModalImg.style.opacity = '0.3';
        commModalImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
            commModalImg.src = c.images[activeImageIndex];
            commModalImg.alt = `${c.title} - Sample ${activeImageIndex + 1}`;
            commModalImg.style.opacity = '1';
            commModalImg.style.transform = 'scale(1)';
        }, 120);
    }

    // Hide/Show prev & next buttons if only 1 image
    if (commModalPrev) commModalPrev.style.display = c.images.length > 1 ? 'flex' : 'none';
    if (commModalNext) commModalNext.style.display = c.images.length > 1 ? 'flex' : 'none';

    // Render thumbnail strip
    if (commModalThumbs) {
        if (c.images.length <= 1) {
            commModalThumbs.style.display = 'none';
        } else {
            commModalThumbs.style.display = 'flex';
            commModalThumbs.innerHTML = c.images.map((imgUrl, i) => `
                <button class="comm-thumb-btn ${i === activeImageIndex ? 'active' : ''}" data-thumb-idx="${i}">
                    <img src="${imgUrl}" alt="Thumbnail ${i + 1}">
                </button>
            `).join('');

            commModalThumbs.querySelectorAll('.comm-thumb-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(e.currentTarget.getAttribute('data-thumb-idx'), 10);
                    activeImageIndex = idx;
                    updateModalView();
                });
            });
        }
    }
}

// Click events for image stacks on commission cards
document.addEventListener('click', e => {
    const stack = e.target.closest('.commission-image-stack');
    if (stack) {
        const commIdx = parseInt(stack.getAttribute('data-comm-index'), 10);
        openCommissionModal(commIdx, 0);
    }
});

// Modal Close & Backdrop triggers
if (commModalClose) commModalClose.addEventListener('click', closeCommissionModal);
if (commModalBackdrop) commModalBackdrop.addEventListener('click', closeCommissionModal);

// Modal Nav triggers
if (commModalPrev) {
    commModalPrev.addEventListener('click', () => {
        activeImageIndex--;
        updateModalView();
    });
}
if (commModalNext) {
    commModalNext.addEventListener('click', () => {
        activeImageIndex++;
        updateModalView();
    });
}

// Keyboard controls
document.addEventListener('keydown', e => {
    if (!commModal || !commModal.classList.contains('open')) return;
    if (e.key === 'Escape') closeCommissionModal();
    if (e.key === 'ArrowLeft') {
        activeImageIndex--;
        updateModalView();
    }
    if (e.key === 'ArrowRight') {
        activeImageIndex++;
        updateModalView();
    }
});

// Touch swipe support for modal stage
let touchStartX = 0;
const commStage = document.querySelector('.comm-modal-stage');
if (commStage) {
    commStage.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    commStage.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
            if (diff < 0) {
                // Swipe left -> next
                activeImageIndex++;
                updateModalView();
            } else {
                // Swipe right -> prev
                activeImageIndex--;
                updateModalView();
            }
        }
    }, { passive: true });
}

// ── Contact button ──
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        if (this.classList.contains('copied')) return;
        navigator.clipboard.writeText('sample@email.com').then(() => {
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 2800);
        });
    });
}

// ── Page transitions ──
function setupPageExitTransitions() {
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;

        link.addEventListener('click', e => {
            if (e.metaKey || e.ctrlKey || e.shiftKey) return;
            const currentPath = window.location.pathname.split('/').pop() || 'commissions.html';
            if (href === currentPath) return;

            e.preventDefault();
            document.body.classList.add('page-leaving');
            document.body.classList.add('transition-active');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
    initScrollReveal();
    setupPageExitTransitions();
});
document.body.classList.add('page-loaded');
initScrollReveal();
setupPageExitTransitions();
