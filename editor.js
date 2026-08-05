/* ==========================================================================
   PORTFOLIO STUDIO EDITOR LOGIC
   External editor tool for Derek Sagers Portfolio
   ========================================================================== */

// ── Default State matching website initial contents ──
const DEFAULT_STATE = {
    artData: [
        {
            title: "Achebe",
            featured: true,
            category: "Digital",
            tags: ["portrait", "character"],
            date: "2026",
            desc: "Portrait study inspired by classic literature.",
            img: "./Achebe.webp"
        },
        {
            title: "Addie Fox",
            featured: true,
            category: "Watercolor",
            tags: ["animal", "nature", "fox"],
            date: "2026",
            desc: "A vibrant wildlife piece featuring Addie the Fox.",
            img: "./AddieFox.webp"
        },
        {
            title: "Batman",
            featured: false,
            category: "Digital",
            tags: ["fanart", "comic", "hero"],
            date: "2025",
            desc: "Dark Knight illustration study.",
            img: "./Batman.webp"
        },
        {
            title: "Bird Bath",
            featured: false,
            category: "Media",
            tags: ["nature", "birds", "garden"],
            date: "2026",
            desc: "A peaceful outdoor scene near a garden fountain.",
            img: "./BirdBath.webp"
        },
        {
            title: "Cherry Tree",
            featured: true,
            category: "Watercolor",
            tags: ["landscape", "nature", "blossom"],
            date: "2026",
            desc: "Springtime study of blooming cherry blossoms.",
            img: "./CherryTree.webp"
        },
        {
            title: "Farmhouse",
            featured: false,
            category: "Media",
            tags: ["rustic", "architecture", "landscape"],
            date: "2025",
            desc: "Country farmhouse surrounded by open fields.",
            img: "./Farmhouse.webp"
        },
        {
            title: "Gethsemane",
            featured: false,
            category: "Digital",
            tags: ["dramatic", "landscape", "night"],
            date: "2026",
            desc: "Atmospheric study of night shadows and foliage.",
            img: "./Gethsemane.webp"
        },
        {
            title: "Ghost on Swing",
            featured: true,
            category: "Digital",
            tags: ["whimsical", "spooky", "character"],
            date: "2026",
            desc: "Playful illustration of a ghost swinging under moonlight.",
            img: "./GhostOnSwing.webp"
        },
        {
            title: "Girl Sketch",
            featured: false,
            category: "Media",
            tags: ["sketch", "portrait", "pencil"],
            date: "2025",
            desc: "Quick structural portrait study.",
            img: "./GirlSketch.webp"
        },
        {
            title: "Horse",
            featured: false,
            category: "Watercolor",
            tags: ["animal", "study", "motion"],
            date: "2026",
            desc: "Dynamic study of a horse in motion.",
            img: "./Horse.webp"
        },
        {
            title: "Joker",
            featured: false,
            category: "Digital",
            tags: ["fanart", "comic", "villain"],
            date: "2025",
            desc: "High-contrast villain portrait.",
            img: "./Joker.webp"
        },
        {
            title: "Riddler",
            featured: false,
            category: "Digital",
            tags: ["fanart", "comic", "mystery"],
            date: "2025",
            desc: "Green and emerald color palette study.",
            img: "./Riddler.webp"
        },
        {
            title: "Seashell",
            featured: false,
            category: "Watercolor",
            tags: ["minimal", "ocean", "still life"],
            date: "2026",
            desc: "Detailed wash of coastal findings.",
            img: "./Seashell.webp"
        },
        {
            title: "Starry Night 1",
            featured: true,
            category: "Media",
            tags: ["night", "sky", "abstract"],
            date: "2026",
            desc: "Heavy acrylic texture capturing night energy.",
            img: "./StarryNight1.webp"
        },
        {
            title: "Starry Night 2",
            featured: false,
            category: "Media",
            tags: ["night", "sky", "expressionism"],
            date: "2026",
            desc: "Alternative color pass on cosmic landscapes.",
            img: "./StarryNight2.webp"
        },
        {
            title: "Toothbrush Girl",
            featured: false,
            category: "Digital",
            tags: ["character", "pop art", "daily"],
            date: "2025",
            desc: "Candid slice-of-life digital illustration.",
            img: "./ToothbrushGirl.webp"
        },
        {
            title: "Turtle",
            featured: false,
            category: "Watercolor",
            tags: ["ocean", "animal", "sea"],
            date: "2026",
            desc: "Subtle blue and green washes depicting sea life.",
            img: "./Turtle.webp"
        },
        {
            title: "Two Face",
            featured: false,
            category: "Digital",
            tags: ["fanart", "comic", "duality"],
            date: "2025",
            desc: "Split portrait exploring light and shadow.",
            img: "./TwoFace.webp"
        },
        {
            title: "Venom",
            featured: false,
            category: "Digital",
            tags: ["fanart", "comic", "creature"],
            date: "2025",
            desc: "Dark, expressive character artwork.",
            img: "./Venom.webp"
        },
        {
            title: "Welder",
            featured: false,
            category: "Craft",
            tags: ["metal", "sparks", "industrial"],
            date: "2026",
            desc: "High-contrast capture of industrial work in action.",
            img: "./Welder.webp"
        },
        {
            title: "Christ Is My Roots",
            featured: true,
            category: "Craft",
            tags: ["community", "exhibition", "mixed media"],
            date: "2026",
            desc: "Featured piece from the annual youth art submission.",
            img: "./YouthArtSubmission.webp"
        },
        {
            title: "Starry Night 3",
            featured: true,
            category: "Media",
            tags: ["night", "sky", "abstract"],
            date: "2026",
            desc: "Experimental night sky composition with heavy texture.",
            img: "./StarryNight3.webp"
        },
        {
            title: "Waterfall",
            featured: false,
            category: "Watercolor",
            tags: ["nature", "water", "landscape"],
            date: "2026",
            desc: "Cascading water study using fluid washes.",
            img: "./Waterfall.webp"
        },
        {
            title: "City Alley",
            featured: false,
            category: "Digital",
            tags: ["urban", "city", "architecture"],
            date: "2025",
            desc: "Moody urban alleyway lit by atmospheric neon.",
            img: "./CityAlley.webp"
        },
        {
            title: "Boat",
            featured: false,
            category: "Watercolor",
            tags: ["ocean", "nautical", "tranquil"],
            date: "2026",
            desc: "Solitary boat drifting on calm waters.",
            img: "./Boat.webp"
        },
        {
            title: "Mountain",
            featured: true,
            category: "Media",
            tags: ["landscape", "mountains", "nature"],
            date: "2025",
            desc: "Rugged mountain peak rendered in textured layers.",
            img: "./Moutain.webp"
        },
        {
            title: "Moon Over Lake",
            featured: true,
            category: "Digital",
            tags: ["night", "landscape", "water"],
            date: "2026",
            desc: "Serene scene showing full moon reflections over water.",
            img: "./MoonOverLake.webp"
        },
        {
            title: "Bearded Man",
            featured: false,
            category: "Media",
            tags: ["portrait", "charcoal", "study"],
            date: "2025",
            desc: "Expressive portrait study focusing on facial hair textures.",
            img: "./BeardedMan.webp"
        },
        {
            title: "Sunset",
            featured: false,
            category: "Watercolor",
            tags: ["sunset", "sky", "color-theory"],
            date: "2026",
            desc: "Warm gradient study of a dramatic evening sky.",
            img: "./Sunset.webp"
        },
        {
            title: "Witch",
            featured: false,
            category: "Digital",
            tags: ["fantasy", "character", "spooky"],
            date: "2025",
            desc: "Fantasy character illustration with glowing elements.",
            img: "./Witch.webp"
        },
        {
            title: "Halloween Cat",
            featured: true,
            category: "Digital",
            tags: ["spooky", "cat", "seasonal"],
            date: "2025",
            desc: "Playful holiday illustration featuring a black cat.",
            img: "./HalloweenCat.webp"
        },
        {
            title: "Yin Yang",
            featured: false,
            category: "Craft",
            tags: ["abstract", "symbolism", "balance"],
            date: "2026",
            desc: "Modern textural take on classic balance iconography.",
            img: "./YinYang.webp"
        },
        {
            title: "Fox",
            featured: false,
            category: "Watercolor",
            tags: ["animal", "wildlife", "nature"],
            date: "2026",
            desc: "Soft wash wildlife study of a forest fox.",
            img: "./Fox.webp"
        },
        {
            title: "Ewok",
            featured: false,
            category: "Digital",
            tags: ["fanart", "sci-fi", "creature"],
            date: "2025",
            desc: "Textured illustration of an Endor inhabitant.",
            img: "./Ewok.webp"
        },
        {
            title: "Parrot",
            featured: false,
            category: "Watercolor",
            tags: ["birds", "tropical", "vibrant"],
            date: "2026",
            desc: "High-contrast tropical bird study featuring vivid plumage.",
            img: "./Parrot.webp"
        },
        {
            title: "Tree Horizon",
            featured: false,
            category: "Watercolor",
            tags: ["landscape", "nature", "silhouette"],
            date: "2026",
            desc: "Minimalist tree silhouette against a dramatic horizon.",
            img: "./TreeHorizon.webp"
        },
        {
            title: "Cherry Tree 2",
            featured: true,
            category: "Watercolor",
            tags: ["landscape", "nature", "blossom"],
            date: "2026",
            desc: "A second exploration of blooming cherry branches.",
            img: "./CherryTree2.webp"
        },
        {
            title: "Milky Way",
            featured: true,
            category: "Digital",
            tags: ["space", "night", "stars"],
            date: "2026",
            desc: "Cosmic study of the galactic core and starry skies.",
            img: "./MilkyWay.webp"
        },
        {
            title: "Niffler",
            featured: false,
            category: "Digital",
            tags: ["fanart", "creature", "fantasy"],
            date: "2025",
            desc: "Playful character design inspired by magical creatures.",
            img: "./Niffler.webp"
        },
        {
            title: "Toujour Belle - Aimer Maman",
            featured: false,
            category: "Media",
            tags: ["typography", "textile", "heart"],
            date: "2026",
            desc: "French typography and decorative art piece.",
            img: "./ToujourBelle-AimerMaman.webp"
        },
        {
            title: "Wolf Howl",
            featured: false,
            category: "Watercolor",
            tags: ["animal", "wildlife", "night"],
            date: "2026",
            desc: "Dramatic wash study of a wolf howling under moonlight.",
            img: "./WolfHowl.webp"
        },
        {
            title: "Eiffel Tower",
            featured: false,
            category: "Digital",
            tags: ["city", "architecture", "travel"],
            date: "2025",
            desc: "Stylized landmark vector and digital wash artwork.",
            img: "./EifellTower.webp"
        },
        {
            title: "SISU Spidey",
            featured: true,
            category: "Digital",
            tags: ["fanart", "comic", "mashup"],
            date: "2026",
            desc: "Creative character crossover illustration.",
            img: "./SISUSpidey.webp"
        },
        {
            title: "Taylor Swift",
            featured: false,
            category: "Digital",
            tags: ["portrait", "pop-culture", "music"],
            date: "2025",
            desc: "High-contrast digital portrait illustration.",
            img: "./TaylorSwift.webp"
        },
        {
            title: "Eyeball Nativity",
            featured: false,
            category: "Media",
            tags: ["surreal", "abstract", "concepts"],
            date: "2025",
            desc: "Surrealist concept piece using mixed media.",
            img: "./EyeballNativity.webp"
        },
        {
            title: "Hand Eyeball",
            featured: false,
            category: "Media",
            tags: ["surreal", "sketch", "ink"],
            date: "2026",
            desc: "Surreal ink and charcoal hand study.",
            img: "./HandEyeball.webp"
        },
        {
            title: "Four Seasons",
            featured: true,
            category: "Watercolor",
            tags: ["seasons", "landscape", "quadptych"],
            date: "2026",
            desc: "Color palette transition showing the cycle of seasons.",
            img: "./FourSeasons.webp"
        },
        {
            title: "Apple Mouth Man",
            featured: false,
            category: "Media",
            tags: ["surreal", "abstract", "character"],
            date: "2025",
            desc: "Experimental abstract portrait with surreal motifs.",
            img: "./AppleMouthMan.webp"
        },
        {
            title: "Drums",
            featured: false,
            category: "Craft",
            tags: ["music", "instrument", "still-life"],
            date: "2026",
            desc: "Textured mixed-media drum kit artwork.",
            img: "./Drums.webp"
        },
        {
            title: "Dinosaur 3",
            featured: false,
            category: "Digital",
            tags: ["prehistoric", "creature", "illustration"],
            date: "2025",
            desc: "Dynamic prehistoric creature portrait.",
            img: "./Dinosaur3.webp"
        },
        {
            title: "Brick House",
            featured: false,
            category: "Watercolor",
            tags: ["architecture", "building", "landscape"],
            date: "2026",
            desc: "Charming study of vintage brick masonry.",
            img: "./BrickHouse.webp"
        },
        {
            title: "Dinosaur 2",
            featured: false,
            category: "Digital",
            tags: ["prehistoric", "creature", "study"],
            date: "2025",
            desc: "Detailed scale texture and color study.",
            img: "./Dinosaur2.webp"
        },
        {
            title: "Dinosaur 1",
            featured: false,
            category: "Digital",
            tags: ["prehistoric", "creature", "concept"],
            date: "2025",
            desc: "Initial concept sketch and render for dino series.",
            img: "./Dinosaur1.webp"
        },
        {
            title: "Dinosaur 4",
            featured: false,
            category: "Digital",
            tags: ["prehistoric", "creature", "action"],
            date: "2025",
            desc: "Action pose illustration completing the dino series.",
            img: "./Dinosaur4.webp"
        },
        {
            title: "Spiderman",
            featured: true,
            category: "Digital",
            tags: ["fanart", "comic", "hero"],
            date: "2026",
            desc: "Vibrant web-slinger dynamic action shot.",
            img: "./Spiderman.webp"
        },
        {
            title: "Doc Ock",
            featured: false,
            category: "Digital",
            tags: ["fanart", "comic", "villain"],
            date: "2025",
            desc: "Mechanical arm and lighting focus character design.",
            img: "./DocOck.webp"
        },
        {
            title: "Green Goblin",
            featured: false,
            category: "Digital",
            tags: ["fanart", "comic", "villain"],
            date: "2025",
            desc: "High-contrast green and purple villain study.",
            img: "./GreenGoblin.webp"
        },
        {
            title: "Baseball Shoe - Angle 1",
            featured: true,
            category: "Craft",
            tags: ["custom", "cleats", "baseball"],
            date: "2026",
            desc: "Custom hand-painted baseball cleat perspective study.",
            img: "./BaseballShoeAngle1.webp"
        },
        {
            title: "Baseball Shoe - Angle 2",
            featured: false,
            category: "Craft",
            tags: ["custom", "cleats", "detail"],
            date: "2026",
            desc: "Alternate angle highlighting side detail work.",
            img: "./BaseballShoeAngle2.webp"
        },
        {
            title: "Seashells",
            featured: false,
            category: "Watercolor",
            tags: ["ocean", "coastal", "still-life"],
            date: "2026",
            desc: "Detailed watercolor study of collected beach shells.",
            img: "./Seashells.webp"
        },
        {
            title: "Landscape Cloud",
            featured: false,
            category: "Watercolor",
            tags: ["landscape", "sky", "clouds"],
            date: "2026",
            desc: "Atmospheric cloud study over open field scenery.",
            img: "./LandscapeCloud.webp"
        },
        {
            title: "Flower Shoe",
            featured: false,
            category: "Craft",
            tags: ["custom", "floral", "wearable-art"],
            date: "2026",
            desc: "Hand-painted custom footwear with vibrant floral patterns.",
            img: "./FlowerShoe.webp"
        },
        {
            title: "Dragon Shoe",
            featured: false,
            category: "Craft",
            tags: ["custom", "dragon", "fantasy"],
            date: "2026",
            desc: "Custom shoe artwork featuring intricate dragon scales.",
            img: "./DragonShoe.webp"
        },
        {
            title: "34 Baseball Shoe",
            featured: false,
            category: "Craft",
            tags: ["custom", "sports", "number"],
            date: "2026",
            desc: "Personalized player-edition custom footwear design.",
            img: "./34BaseballShoe.webp"
        },
        {
            title: "Canyon",
            featured: false,
            category: "Watercolor",
            tags: ["landscape", "canyon", "desert"],
            date: "2026",
            desc: "Layered wash study of desert canyon rock formations.",
            img: "./Canyon.webp"
        },
        {
            title: "Farmhouse Cloudy",
            featured: false,
            category: "Media",
            tags: ["rustic", "architecture", "clouds"],
            date: "2025",
            desc: "Atmospheric rural farmhouse scene under overcast skies.",
            img: "./FarmhouseCloudy.webp"
        },
        {
            title: "Farmhouse Plains",
            featured: false,
            category: "Watercolor",
            tags: ["landscape", "plains", "countryside"],
            date: "2026",
            desc: "Wide-open plains surrounding a distant farmhouse.",
            img: "./FarmhousePlains.webp"
        },
        {
            title: "Flower Stalk",
            featured: false,
            category: "Watercolor",
            tags: ["botanical", "floral", "nature"],
            date: "2026",
            desc: "Delicate botanical study of a flowering stalk.",
            img: "./FlowerStalk.webp"
        },
        {
            title: "Misty Mountain",
            featured: true,
            category: "Watercolor",
            tags: ["mountains", "fog", "landscape"],
            date: "2026",
            desc: "Moody mountain peaks emerging through morning mist.",
            img: "./MistyMountain.webp"
        },
        {
            title: "Origami Boat",
            featured: false,
            category: "Digital",
            tags: ["minimal", "origami", "concept"],
            date: "2025",
            desc: "Minimalist illustration of a folded paper boat floating.",
            img: "./OrigamiBoat.webp"
        },
        {
            title: "Rough Ocean",
            featured: true,
            category: "Media",
            tags: ["ocean", "waves", "dramatic"],
            date: "2026",
            desc: "Textured acrylic study of stormy sea swells.",
            img: "./RoughOcean.webp"
        }
    ],

    categories: ["Digital", "Watercolor", "Media", "Craft", "Handmade"],

    coverData: {
        title: "Derek Sagers",
        btnText: "VIEW COLLECTION",
        imgSrc: "https://picsum.photos/1000/1000?random=100"
    },

    aboutData: {
        heading: "About Derek",
        photoSrc: "https://picsum.photos/600/400?random=about",
        paragraphs: [
            "Derek Sagers is an artist working across digital illustration, watercolor, and mixed media. His work explores tension between the organic and the synthetic — soft washes of colour pressed against hard-edged geometry, handmade textures layered beneath glitch and noise.",
            "Based in the US, he draws influence from science fiction concept art, traditional printmaking, and the quiet strangeness of everyday objects. Each piece begins as an intuition and ends somewhere unexpected."
        ],
        tags: [
            "Digital Illustration",
            "Watercolor",
            "Mixed Media",
            "Textile & Craft",
            "Concept Art"
        ]
    },

    commissions: [
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
    ]
};

// ── Application State Instance ──
let state = JSON.parse(JSON.stringify(DEFAULT_STATE));
const STORAGE_KEY = 'derek_portfolio_editor_state_v2';

// ── App Initialization ──
document.addEventListener('DOMContentLoaded', () => {
    loadSavedState();
    setupTabNavigation();
    setupArtTabControls();
    setupCategoriesTabControls();
    setupCoverTabControls();
    setupAboutTabControls();
    setupCommissionsTabControls();
    setupGlobalActions();
    setupCodeCopyButtons();

    // Initial renders across tabs
    renderAll();
});

function refreshLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

// ── Custom Modal Dialog Helpers ──
function showConfirmModal(title, message, onConfirm, actionBtnLabel = 'Delete') {
    const backdrop = document.getElementById('confirmModalBackdrop');
    const titleEl = document.getElementById('confirmModalTitle');
    const bodyEl = document.getElementById('confirmModalBody');
    const actionBtn = document.getElementById('confirmModalActionButton');
    const cancelBtn = document.getElementById('confirmModalCancelBtn');
    const closeBtn = document.getElementById('confirmModalCloseBtn');

    if (!backdrop) {
        if (confirm(message)) onConfirm();
        return;
    }

    titleEl.innerHTML = `<i data-lucide="alert-triangle"></i> ${escapeHtml(title)}`;
    bodyEl.textContent = message;
    actionBtn.innerHTML = `<i data-lucide="trash-2"></i> ${escapeHtml(actionBtnLabel)}`;

    const hide = () => {
        backdrop.classList.remove('show');
        cleanup();
    };

    const handleConfirm = () => {
        hide();
        onConfirm();
    };

    const cleanup = () => {
        actionBtn.removeEventListener('click', handleConfirm);
        cancelBtn.removeEventListener('click', hide);
        closeBtn.removeEventListener('click', hide);
    };

    actionBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', hide);
    closeBtn.addEventListener('click', hide);

    backdrop.classList.add('show');
    refreshLucideIcons();
}

function showPromptModal(title, labelText, defaultValue, onSave) {
    const backdrop = document.getElementById('promptModalBackdrop');
    const titleEl = document.getElementById('promptModalTitle');
    const labelEl = document.getElementById('promptModalLabel');
    const inputEl = document.getElementById('promptModalInput');
    const saveBtn = document.getElementById('promptModalSaveButton');
    const cancelBtn = document.getElementById('promptModalCancelBtn');
    const closeBtn = document.getElementById('promptModalCloseBtn');

    if (!backdrop) {
        const val = prompt(labelText, defaultValue);
        if (val) onSave(val);
        return;
    }

    titleEl.innerHTML = `<i data-lucide="edit-3"></i> ${escapeHtml(title)}`;
    labelEl.textContent = labelText;
    inputEl.value = defaultValue || '';

    const hide = () => {
        backdrop.classList.remove('show');
        cleanup();
    };

    const handleSave = () => {
        const val = inputEl.value.trim();
        hide();
        if (val) onSave(val);
    };

    const cleanup = () => {
        saveBtn.removeEventListener('click', handleSave);
        cancelBtn.removeEventListener('click', hide);
        closeBtn.removeEventListener('click', hide);
    };

    saveBtn.addEventListener('click', handleSave);
    cancelBtn.addEventListener('click', hide);
    closeBtn.addEventListener('click', hide);

    backdrop.classList.add('show');
    inputEl.focus();
    refreshLucideIcons();
}

// ── State Storage ──
function loadSavedState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            state = Object.assign({}, DEFAULT_STATE, parsed);
            showToast('Restored previous edits from browser storage', 'info');
        }
    } catch (e) {
        console.warn('Could not load saved state from localStorage:', e);
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        const statusEl = document.getElementById('saveStatus');
        if (statusEl) {
            statusEl.innerHTML = '<i data-lucide="check-circle-2"></i> Auto-saved ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            refreshLucideIcons();
        }
        renderCodeChunks(); // Keep code chunks updated in background
    } catch (e) {
        console.error('Failed to save state:', e);
    }
}

// ── Tab Navigation ──
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetId = 'tab-' + tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            if (tab.getAttribute('data-tab') === 'code') {
                renderCodeChunks();
            }
        });
    });
}

// ── Master Render Trigger ──
function renderAll() {
    renderCategoryFilterDropdowns();
    renderArtGrid();
    renderCategoriesList();
    renderCoverPreview();
    renderAboutPreview();
    renderCommissionsList();
    renderCodeChunks();
    refreshLucideIcons();
}


// ==========================================================================
// 1. ART GALLERY TAB LOGIC
// ==========================================================================

let artSearchQuery = '';
let artCategoryFilter = 'ALL';
let artFeaturedFilter = false;

function setupArtTabControls() {
    const searchInput = document.getElementById('artSearchInput');
    const categorySelect = document.getElementById('artCategoryFilter');
    const featuredCheckbox = document.getElementById('artFeaturedFilter');
    const addBtn = document.getElementById('btnAddArtwork');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            artSearchQuery = e.target.value.toLowerCase().trim();
            renderArtGrid();
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            artCategoryFilter = e.target.value;
            renderArtGrid();
        });
    }

    if (featuredCheckbox) {
        featuredCheckbox.addEventListener('change', (e) => {
            artFeaturedFilter = e.target.checked;
            renderArtGrid();
        });
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const newItem = {
                title: 'New Artwork',
                featured: true,
                category: state.categories[0] || 'Digital',
                tags: ['new', 'art'],
                date: new Date().getFullYear().toString(),
                desc: 'Description of the artwork.',
                img: 'https://picsum.photos/800/800?random=' + Math.floor(Math.random() * 1000)
            };
            state.artData.unshift(newItem); // Add to top for easy editing
            saveState();
            renderAll();
            showToast('Added new artwork item to the top!', 'success');
        });
    }
}

function renderCategoryFilterDropdowns() {
    const filterSelect = document.getElementById('artCategoryFilter');
    if (!filterSelect) return;

    const currentVal = filterSelect.value;
    filterSelect.innerHTML = '<option value="ALL">All Categories</option>';

    // Ensure state.categories has all unique categories used in artData
    const categoriesSet = new Set(state.categories);
    state.artData.forEach(item => {
        if (item.category) categoriesSet.add(item.category);
    });
    state.categories = Array.from(categoriesSet);

    state.categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        filterSelect.appendChild(opt);
    });

    filterSelect.value = currentVal || 'ALL';
}

function renderArtGrid() {
    const container = document.getElementById('artGridContainer');
    if (!container) return;

    // Filter items
    const filtered = state.artData.filter((item) => {
        if (artCategoryFilter !== 'ALL' && item.category !== artCategoryFilter) return false;
        if (artFeaturedFilter && !item.featured) return false;
        if (artSearchQuery) {
            const titleMatch = (item.title || '').toLowerCase().includes(artSearchQuery);
            const descMatch = (item.desc || '').toLowerCase().includes(artSearchQuery);
            const tagMatch = (item.tags || []).some(t => t.toLowerCase().includes(artSearchQuery));
            const dateMatch = (item.date || '').toLowerCase().includes(artSearchQuery);
            if (!titleMatch && !descMatch && !tagMatch && !dateMatch) return false;
        }
        return true;
    });

    // Update stats banner
    document.getElementById('artCountBadge').textContent = state.artData.length;
    document.getElementById('statTotal').textContent = state.artData.length;
    document.getElementById('statFeatured').textContent = state.artData.filter(i => i.featured).length;
    document.getElementById('statCategories').textContent = state.categories.length;
    document.getElementById('statShowing').textContent = filtered.length;

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
                No artwork matching filter criteria.
            </div>
        `;
        return;
    }

    filtered.forEach((item) => {
        const realIndex = state.artData.indexOf(item);
        const card = document.createElement('div');
        card.className = 'art-card';

        // Options for category dropdown
        const categoryOptionsHtml = state.categories.map(cat => 
            `<option value="${cat}" ${item.category === cat ? 'selected' : ''}>${cat}</option>`
        ).join('');

        const tagsString = (item.tags || []).join(', ');

        card.innerHTML = `
            <div class="art-card-header">
                <div class="art-thumb-wrap">
                    <img class="art-thumb-img" src="${item.img}" alt="${item.title}" onerror="this.onerror=null;this.src='https://picsum.photos/100/100?grayscale';">
                </div>
                <div class="art-title-block">
                    <input type="text" class="art-title-input" value="${escapeHtml(item.title)}" data-index="${realIndex}" data-field="title" placeholder="Artwork Title">
                    <div class="art-header-badges">
                        ${item.featured ? '<span class="badge badge-featured"><i data-lucide="star"></i> Featured</span>' : ''}
                        <span class="badge badge-category">${escapeHtml(item.category || 'General')}</span>
                    </div>
                </div>
                <button class="btn btn-danger btn-sm btn-delete-art" data-index="${realIndex}" title="Remove artwork"><i data-lucide="trash-2"></i></button>
            </div>

            <div class="art-card-body">
                <div class="row-2col">
                    <div class="form-group">
                        <label>Category</label>
                        <select class="art-input" data-index="${realIndex}" data-field="category">
                            ${categoryOptionsHtml}
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Date / Year</label>
                        <input type="text" class="art-input" value="${escapeHtml(item.date || '')}" data-index="${realIndex}" data-field="date" placeholder="e.g. 2026">
                    </div>
                </div>

                <div class="form-group">
                    <label>Image Path / URL</label>
                    <input type="text" class="art-input" value="${escapeHtml(item.img || '')}" data-index="${realIndex}" data-field="img" placeholder="./MyImage.webp or https://...">
                </div>

                <div class="form-group">
                    <label>Tags (comma separated)</label>
                    <input type="text" class="art-input" value="${escapeHtml(tagsString)}" data-index="${realIndex}" data-field="tags" placeholder="portrait, character, nature">
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <textarea class="art-input" data-index="${realIndex}" data-field="desc" placeholder="Brief description...">${escapeHtml(item.desc || '')}</textarea>
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" class="art-checkbox" data-index="${realIndex}" data-field="featured" ${item.featured ? 'checked' : ''}>
                        Show in Featured Spotlight
                    </label>
                </div>
            </div>

            <div class="art-card-actions">
                <div style="display:flex; gap:6px;">
                    <button class="btn btn-secondary btn-sm btn-move-art" data-index="${realIndex}" data-dir="-1" ${realIndex === 0 ? 'disabled' : ''}><i data-lucide="arrow-up"></i> Up</button>
                    <button class="btn btn-secondary btn-sm btn-move-art" data-index="${realIndex}" data-dir="1" ${realIndex === state.artData.length - 1 ? 'disabled' : ''}><i data-lucide="arrow-down"></i> Down</button>
                </div>
                <span style="font-size:11px; color:var(--text-muted);">#${realIndex + 1}</span>
            </div>
        `;

        container.appendChild(card);
    });

    attachArtCardEvents();
}

function attachArtCardEvents() {
    // Input changes
    document.querySelectorAll('.art-input, .art-title-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'), 10);
            const field = e.target.getAttribute('data-field');
            let val = e.target.value;

            if (field === 'tags') {
                val = val.split(',').map(t => t.trim()).filter(Boolean);
            }

            state.artData[idx][field] = val;
            saveState();

            if (field === 'img' || field === 'category' || field === 'featured') {
                renderArtGrid();
            }
        });
    });

    // Checkboxes
    document.querySelectorAll('.art-checkbox').forEach(chk => {
        chk.addEventListener('change', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'), 10);
            const field = e.target.getAttribute('data-field');
            state.artData[idx][field] = e.target.checked;
            saveState();
            renderArtGrid();
        });
    });

    // Delete
    document.querySelectorAll('.btn-delete-art').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
            const item = state.artData[idx];
            if (!item) return;
            const title = item.title || 'Untitled Artwork';
            showConfirmModal('Delete Artwork', `Are you sure you want to remove "${title}"?`, () => {
                state.artData.splice(idx, 1);
                saveState();
                renderAll();
                showToast(`Removed "${title}"`, 'info');
            });
        });
    });

    // Reorder
    document.querySelectorAll('.btn-move-art').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
            const dir = parseInt(e.currentTarget.getAttribute('data-dir'), 10);
            const targetIdx = idx + dir;

            if (targetIdx >= 0 && targetIdx < state.artData.length) {
                const temp = state.artData[idx];
                state.artData[idx] = state.artData[targetIdx];
                state.artData[targetIdx] = temp;
                saveState();
                renderArtGrid();
            }
        });
    });
}


// ==========================================================================
// 2. CATEGORIES TAB LOGIC
// ==========================================================================

function setupCategoriesTabControls() {
    const addBtn = document.getElementById('btnAddCategory');
    const input = document.getElementById('newCatName');

    if (addBtn && input) {
        addBtn.addEventListener('click', () => {
            const catName = input.value.trim();
            if (!catName) return;

            if (state.categories.includes(catName)) {
                showToast(`Category "${catName}" already exists!`, 'info');
                return;
            }

            state.categories.push(catName);
            input.value = '';
            saveState();
            renderAll();
            showToast(`Added category "${catName}"`, 'success');
        });
    }
}

function renderCategoriesList() {
    const container = document.getElementById('categoriesListContainer');
    const catCountEl = document.getElementById('catCount');
    if (!container) return;

    if (catCountEl) catCountEl.textContent = state.categories.length;
    container.innerHTML = '';

    state.categories.forEach((cat) => {
        const artCount = state.artData.filter(i => i.category === cat).length;
        const card = document.createElement('div');
        card.className = 'category-item-card';

        card.innerHTML = `
            <div class="category-name-group">
                <span class="category-badge-chip"><i data-lucide="tag"></i> ${escapeHtml(cat)}</span>
                <span class="category-art-count">(${artCount} artwork ${artCount === 1 ? 'piece' : 'pieces'})</span>
            </div>
            <div style="display:flex; gap:8px;">
                <button class="btn btn-secondary btn-sm btn-rename-cat" data-cat="${escapeHtml(cat)}"><i data-lucide="edit-3"></i> Rename</button>
                <button class="btn btn-danger btn-sm btn-delete-cat" data-cat="${escapeHtml(cat)}"><i data-lucide="trash-2"></i> Delete</button>
            </div>
        `;

        container.appendChild(card);
    });

    // Event listeners
    document.querySelectorAll('.btn-rename-cat').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const oldCat = e.currentTarget.getAttribute('data-cat');
            showPromptModal('Rename Category', `Rename category "${oldCat}" to:`, oldCat, (newCat) => {
                if (newCat && newCat.trim() && newCat.trim() !== oldCat) {
                    const trimmed = newCat.trim();
                    // Update categories array
                    const idx = state.categories.indexOf(oldCat);
                    if (idx !== -1) state.categories[idx] = trimmed;

                    // Update artwork assigned to old category
                    state.artData.forEach(item => {
                        if (item.category === oldCat) item.category = trimmed;
                    });

                    saveState();
                    renderAll();
                    showToast(`Renamed category to "${trimmed}"`, 'success');
                }
            });
        });
    });

    document.querySelectorAll('.btn-delete-cat').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cat = e.currentTarget.getAttribute('data-cat');
            if (state.categories.length <= 1) {
                showToast('You must keep at least one category!', 'info');
                return;
            }

            showConfirmModal('Delete Category', `Delete category "${cat}"? Artwork in this category will be reassigned to "${state.categories[0]}".`, () => {
                state.categories = state.categories.filter(c => c !== cat);
                state.artData.forEach(item => {
                    if (item.category === cat) item.category = state.categories[0];
                });

                saveState();
                renderAll();
                showToast(`Deleted category "${cat}"`, 'info');
            });
        });
    });
}


// ==========================================================================
// 3. COVER PAGE TAB LOGIC
// ==========================================================================

function setupCoverTabControls() {
    const titleInput = document.getElementById('coverTitle');
    const btnTextInput = document.getElementById('coverBtnText');
    const imgSrcInput = document.getElementById('coverImgSrc');

    [titleInput, btnTextInput, imgSrcInput].forEach(inp => {
        if (!inp) return;
        inp.addEventListener('input', () => {
            state.coverData.title = titleInput.value;
            state.coverData.btnText = btnTextInput.value;
            state.coverData.imgSrc = imgSrcInput.value;
            saveState();
            renderCoverPreview();
        });
    });
}

function renderCoverPreview() {
    const titleEl = document.getElementById('previewCoverTitle');
    const btnEl = document.getElementById('previewCoverBtn');
    const bgEl = document.getElementById('coverPreviewBg');

    if (titleEl) titleEl.textContent = state.coverData.title || 'Derek Sagers';
    if (btnEl) btnEl.textContent = state.coverData.btnText || 'VIEW COLLECTION';
    if (bgEl) {
        bgEl.style.backgroundImage = `url('${state.coverData.imgSrc || ''}')`;
    }

    // Set input values if not focused
    const titleInput = document.getElementById('coverTitle');
    const btnTextInput = document.getElementById('coverBtnText');
    const imgSrcInput = document.getElementById('coverImgSrc');

    if (titleInput && document.activeElement !== titleInput) titleInput.value = state.coverData.title;
    if (btnTextInput && document.activeElement !== btnTextInput) btnTextInput.value = state.coverData.btnText;
    if (imgSrcInput && document.activeElement !== imgSrcInput) imgSrcInput.value = state.coverData.imgSrc;
}


// ==========================================================================
// 4. ABOUT PAGE TAB LOGIC
// ==========================================================================

function setupAboutTabControls() {
    const headingInput = document.getElementById('aboutHeading');
    const photoInput = document.getElementById('aboutPhotoSrc');
    const addBioBtn = document.getElementById('btnAddBioPara');
    const addTagBtn = document.getElementById('btnAddAboutTag');
    const tagInput = document.getElementById('newAboutTagInput');

    if (headingInput) {
        headingInput.addEventListener('input', () => {
            state.aboutData.heading = headingInput.value;
            saveState();
            renderAboutPreview();
        });
    }

    if (photoInput) {
        photoInput.addEventListener('input', () => {
            state.aboutData.photoSrc = photoInput.value;
            saveState();
            renderAboutPreview();
        });
    }

    if (addBioBtn) {
        addBioBtn.addEventListener('click', () => {
            state.aboutData.paragraphs.push('New bio paragraph...');
            saveState();
            renderAboutPreview();
        });
    }

    if (addTagBtn && tagInput) {
        addTagBtn.addEventListener('click', () => {
            const tag = tagInput.value.trim();
            if (tag) {
                state.aboutData.tags.push(tag);
                tagInput.value = '';
                saveState();
                renderAboutPreview();
            }
        });
    }
}

function renderAboutPreview() {
    const headingInput = document.getElementById('aboutHeading');
    const photoInput = document.getElementById('aboutPhotoSrc');
    const previewHeading = document.getElementById('aboutPreviewHeading');
    const previewPhoto = document.getElementById('aboutPreviewPhoto');
    const previewBio = document.getElementById('aboutPreviewBio');
    const previewTags = document.getElementById('aboutPreviewTags');
    const parasContainer = document.getElementById('bioParasContainer');
    const tagsChipsContainer = document.getElementById('aboutTagsChips');

    if (headingInput && document.activeElement !== headingInput) headingInput.value = state.aboutData.heading;
    if (photoInput && document.activeElement !== photoInput) photoInput.value = state.aboutData.photoSrc;

    if (previewHeading) previewHeading.textContent = state.aboutData.heading || 'About Derek';
    if (previewPhoto) previewPhoto.src = state.aboutData.photoSrc || '';

    // Render preview bio paragraphs
    if (previewBio) {
        previewBio.innerHTML = state.aboutData.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
    }

    // Render preview tags
    if (previewTags) {
        previewTags.innerHTML = state.aboutData.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('');
    }

    // Render editable paragraphs list
    if (parasContainer) {
        parasContainer.innerHTML = '';
        state.aboutData.paragraphs.forEach((para, idx) => {
            const item = document.createElement('div');
            item.className = 'bio-para-item';
            item.innerHTML = `
                <textarea data-index="${idx}">${escapeHtml(para)}</textarea>
                <button class="btn btn-danger btn-sm btn-delete-para" data-index="${idx}" title="Remove paragraph"><i data-lucide="x"></i></button>
            `;
            parasContainer.appendChild(item);
        });

        parasContainer.querySelectorAll('textarea').forEach(ta => {
            ta.addEventListener('change', (e) => {
                const idx = parseInt(e.target.getAttribute('data-index'), 10);
                state.aboutData.paragraphs[idx] = e.target.value;
                saveState();
                renderAboutPreview();
            });
        });

        parasContainer.querySelectorAll('.btn-delete-para').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
                state.aboutData.paragraphs.splice(idx, 1);
                saveState();
                renderAboutPreview();
            });
        });
    }

    // Render editable skill tag chips
    if (tagsChipsContainer) {
        tagsChipsContainer.innerHTML = '';
        state.aboutData.tags.forEach((tag, idx) => {
            const chip = document.createElement('span');
            chip.className = 'tag-chip';
            chip.innerHTML = `
                ${escapeHtml(tag)}
                <span class="tag-chip-remove" data-index="${idx}"><i data-lucide="x"></i></span>
            `;
            tagsChipsContainer.appendChild(chip);
        });

        tagsChipsContainer.querySelectorAll('.tag-chip-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
                state.aboutData.tags.splice(idx, 1);
                saveState();
                renderAboutPreview();
            });
        });
    }
}


// ==========================================================================
// 5. COMMISSIONS TAB LOGIC
// ==========================================================================

function setupCommissionsTabControls() {
    const addBtn = document.getElementById('btnAddCommission');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            state.commissions.push({
                title: 'New Commission Option',
                open: true,
                price: '$50+',
                turnaround: '1–2 weeks',
                desc: 'Details for this commission type.',
                images: ['./Waterfall.webp']
            });
            saveState();
            renderAll();
            showToast('Added new commission option!', 'success');
        });
    }
}

function renderCommissionsList() {
    const container = document.getElementById('commissionsListContainer');
    if (!container) return;

    container.innerHTML = '';

    state.commissions.forEach((c, idx) => {
        const card = document.createElement('div');
        card.className = 'commission-card-item';

        const imagesVal = (Array.isArray(c.images) ? c.images : []).join(', ');

        const thumbStripHtml = (Array.isArray(c.images) && c.images.length > 0) ? `
            <div style="display:flex; gap:8px; margin-top:8px; overflow-x:auto; padding-bottom:4px;">
                ${c.images.map(img => `<img src="${img}" style="width:40px; height:40px; object-fit:cover; border-radius:6px; border:1px solid var(--border-color);" onerror="this.onerror=null;this.src='https://picsum.photos/50/50?grayscale';">`).join('')}
            </div>
        ` : '<div style="font-size:11px; color:var(--text-muted); margin-top:4px;">No sample images assigned (card will display without image stack).</div>';

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <button class="status-badge-toggle ${c.open ? 'open' : 'closed'}" data-index="${idx}">
                    <span class="status-dot-icon"></span>
                    ${c.open ? 'Status: OPEN' : 'Status: CLOSED'}
                </button>
                <button class="btn btn-danger btn-sm btn-delete-comm" data-index="${idx}"><i data-lucide="trash-2"></i> Remove</button>
            </div>

            <div class="form-group">
                <label>Title</label>
                <input type="text" class="comm-input" data-index="${idx}" data-field="title" value="${escapeHtml(c.title)}">
            </div>

            <div class="row-2col">
                <div class="form-group">
                    <label>Price Range</label>
                    <input type="text" class="comm-input" data-index="${idx}" data-field="price" value="${escapeHtml(c.price)}">
                </div>
                <div class="form-group">
                    <label>Turnaround</label>
                    <input type="text" class="comm-input" data-index="${idx}" data-field="turnaround" value="${escapeHtml(c.turnaround)}">
                </div>
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea class="comm-input" data-index="${idx}" data-field="desc">${escapeHtml(c.desc)}</textarea>
            </div>

            <div class="form-group">
                <label>Sample Images (comma-separated image paths)</label>
                <input type="text" class="comm-input" data-index="${idx}" data-field="images" value="${escapeHtml(imagesVal)}" placeholder="e.g. ./Waterfall.webp, ./AddieFox.webp">
                ${thumbStripHtml}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:10px; margin-top:10px;">
                <div style="display:flex; gap:6px;">
                    <button class="btn btn-secondary btn-sm btn-move-comm" data-index="${idx}" data-dir="-1" ${idx === 0 ? 'disabled' : ''}><i data-lucide="arrow-up"></i> Up</button>
                    <button class="btn btn-secondary btn-sm btn-move-comm" data-index="${idx}" data-dir="1" ${idx === state.commissions.length - 1 ? 'disabled' : ''}><i data-lucide="arrow-down"></i> Down</button>
                </div>
                <span style="font-size:11px; color:var(--text-muted);">Item #${idx + 1}</span>
            </div>
        `;

        container.appendChild(card);
    });

    // Inputs
    document.querySelectorAll('.comm-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'), 10);
            const field = e.target.getAttribute('data-field');
            if (field === 'images') {
                state.commissions[idx].images = e.target.value
                    .split(',')
                    .map(s => s.trim())
                    .filter(Boolean);
                saveState();
                renderCommissionsList();
            } else {
                state.commissions[idx][field] = e.target.value;
                saveState();
            }
        });
    });

    // Toggle open status
    document.querySelectorAll('.status-badge-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
            state.commissions[idx].open = !state.commissions[idx].open;
            saveState();
            renderCommissionsList();
        });
    });

    // Delete
    document.querySelectorAll('.btn-delete-comm').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
            const title = state.commissions[idx].title;
            showConfirmModal('Delete Commission', `Delete commission option "${title}"?`, () => {
                state.commissions.splice(idx, 1);
                saveState();
                renderAll();
                showToast(`Deleted "${title}"`, 'info');
            });
        });
    });

    // Move
    document.querySelectorAll('.btn-move-comm').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
            const dir = parseInt(e.currentTarget.getAttribute('data-dir'), 10);
            const target = idx + dir;

            if (target >= 0 && target < state.commissions.length) {
                const temp = state.commissions[idx];
                state.commissions[idx] = state.commissions[target];
                state.commissions[target] = temp;
                saveState();
                renderCommissionsList();
            }
        });
    });
}


// ==========================================================================
// 6. CODE CHUNKS GENERATION & COPY LOGIC
// ==========================================================================

function renderCodeChunks() {
    // 1. artData chunk for portfolio-logic.js
    const artDataCode = `// ── Art data ──\nconst artData = ${JSON.stringify(state.artData, null, 4)};`;
    const codeArtEl = document.getElementById('codeArtData');
    if (codeArtEl) codeArtEl.textContent = artDataCode;

    // 2. commissions chunk for commissions-logic.js
    const commissionsCode = `// ── Commission data ──\nconst commissions = ${JSON.stringify(state.commissions, null, 4)};`;
    const codeCommEl = document.getElementById('codeCommissions');
    if (codeCommEl) codeCommEl.textContent = commissionsCode;

    // 3. Cover page chunk for script.js & index.html
    const coverCode = `// ── Cover Page Configuration (for script.js) ──
img.src = '${state.coverData.imgSrc}';

// ── Title & Button (for index.html) ──
// <title>${state.coverData.title}</title>
// <h1>${state.coverData.title}</h1>
// <button id="exploreBtn">${state.coverData.btnText}</button>`;
    const codeCoverEl = document.getElementById('codeCover');
    if (codeCoverEl) codeCoverEl.textContent = coverCode;

    // 4. About panel chunk for portfolio.html
    const biosHtml = state.aboutData.paragraphs.map(p => `            <p class="about-bio">\n                ${escapeHtml(p)}\n            </p>`).join('\n');
    const tagsHtml = state.aboutData.tags.map(t => `                <span>${escapeHtml(t)}</span>`).join('\n');

    const aboutHtmlCode = `<!-- Replace inside <div class="about-content"> in portfolio.html -->
<div class="about-photo-wrap" id="aboutPhotoWrap">
    <img class="about-photo" id="aboutPhoto" src="${state.aboutData.photoSrc}" alt="${state.aboutData.heading}">
</div>
<h2>${state.aboutData.heading}</h2>
${biosHtml}
<div class="about-tags">
${tagsHtml}
</div>`;
    const codeAboutEl = document.getElementById('codeAbout');
    if (codeAboutEl) codeAboutEl.textContent = aboutHtmlCode;

    // 5. Category tabs HTML chunk for portfolio.html
    const categoryTabsHtml = `<!-- Replace inside <div class="tabs reveal"> in portfolio.html -->
<div class="tab-indicator" id="tabIndicator"></div>
<button class="tab-btn active" data-filter="all">All</button>
${state.categories.map(cat => `<button class="tab-btn" data-filter="${cat}">${cat}</button>`).join('\n')}`;
    const codeCatEl = document.getElementById('codeCategoryTabs');
    if (codeCatEl) codeCatEl.textContent = categoryTabsHtml;
}

function setupCodeCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-copy-target');
            const codeEl = document.getElementById(targetId);
            if (!codeEl) return;

            const codeText = codeEl.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                showToast('📋 Code copied to clipboard!', 'success');
            }).catch(err => {
                console.error('Copy failed:', err);
                showToast('Failed to copy. Please select manually.', 'info');
            });
        });
    });
}


// ==========================================================================
// GLOBAL ACTIONS (Backup, Restore, Reset)
// ==========================================================================

function setupGlobalActions() {
    const exportBtn = document.getElementById('btnExportJson');
    const importBtn = document.getElementById('btnImportJson');
    const resetBtn = document.getElementById('btnResetData');
    const fileInput = document.getElementById('jsonFileInput');

    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
            const dlAnchorElem = document.createElement('a');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", `derek_portfolio_backup_${new Date().toISOString().slice(0,10)}.json`);
            dlAnchorElem.click();
            showToast('Downloaded JSON backup file', 'success');
        });
    }

    if (importBtn && fileInput) {
        importBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    if (imported && imported.artData && Array.isArray(imported.artData)) {
                        state = Object.assign({}, DEFAULT_STATE, imported);
                        saveState();
                        renderAll();
                        showToast('Successfully restored state from JSON file!', 'success');
                    } else {
                        alert('Invalid JSON file structure!');
                    }
                } catch (err) {
                    alert('Error parsing JSON file: ' + err.message);
                }
            };
            reader.readAsText(file);
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            showConfirmModal('Reset All Data', 'Are you sure you want to reset all edits back to the website defaults? Any unsaved edits will be cleared.', () => {
                localStorage.removeItem(STORAGE_KEY);
                state = JSON.parse(JSON.stringify(DEFAULT_STATE));
                renderAll();
                showToast('Reset back to original website defaults', 'info');
            }, 'Reset All');
        });
    }
}


// ==========================================================================
// UTILITIES
// ==========================================================================

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('editorToast');
    if (!toast) return;

    toast.textContent = msg;
    toast.className = 'toast show toast-' + type;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
