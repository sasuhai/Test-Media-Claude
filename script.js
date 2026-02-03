// ===================================
// NAVIGATION
// ===================================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// ===================================
// CONTENT MANAGEMENT (LOCAL STORAGE)
// ===================================
const CONTENT_STORAGE_KEY = 'hidayahPortalContent';

const DEFAULT_CONTENT = {
    hero: {
        badge: 'Hidayah Centre Foundation • Media Team',
        title: 'Telling Stories That Inspire Hidayah',
        subtitle: "We craft photography, film, design, and digital experiences that amplify da'wah and community impact across Kuala Lumpur.",
        primaryCtaText: 'Explore Our Work',
        primaryCtaHref: '#portfolio',
        secondaryCtaText: 'Join Our Media Team',
        secondaryCtaHref: '#contact',
        imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        backgroundUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
        cardTopTitle: 'Live Coverage',
        cardTopSubtitle: 'Events • Community • Dawah',
        cardBottomTitle: 'Creative Studio',
        cardBottomSubtitle: 'Film • Design • Digital'
    },
    about: {
        lead: 'We are the creative heart of Hidayah Centre Foundation, dedicated to sharing the transformative message of Islam through compelling visual storytelling and digital media.',
        body1: "Our mission is to support da'wah and community outreach by creating authentic, impactful content that resonates with hearts and minds. From capturing meaningful moments at community events to producing educational videos and managing our digital presence, we strive to tell stories that inspire guidance, knowledge, and positive change.",
        body2: 'Based in Kuala Lumpur, our team combines professional media expertise with a deep commitment to Islamic values, ensuring every piece of content we create reflects the dignity, compassion, and purpose of our faith.',
        imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80'
    },
    services: [
        {
            icon: '📸',
            title: 'Photography & Event Coverage',
            description: 'Capturing the essence of our programs, events, and community moments with professional photography that tells authentic stories.'
        },
        {
            icon: '🎥',
            title: 'Video Production & Editing',
            description: 'Creating engaging video content from educational series to documentary-style coverage that inspires and educates.'
        },
        {
            icon: '🎨',
            title: 'Graphic Design & Visual Identity',
            description: 'Designing beautiful, purposeful graphics that maintain brand consistency and communicate our message effectively.'
        },
        {
            icon: '📱',
            title: 'Social Media Management',
            description: 'Building meaningful connections through strategic social media presence and community engagement.'
        },
        {
            icon: '🌐',
            title: 'Website & Digital Content',
            description: 'Developing and maintaining digital platforms that serve as gateways to knowledge and community resources.'
        },
        {
            icon: '🎞️',
            title: 'Campaign & Storytelling Content',
            description: 'Crafting compelling narratives for campaigns that drive awareness, engagement, and positive action.'
        }
    ],
    portfolio: [
        {
            title: 'Ramadan Community Iftar',
            category: 'events',
            image: 'https://picsum.photos/seed/hidayah-event-1/1200/900',
            description: 'Annual community gathering bringing together families for breaking fast'
        },
        {
            title: 'Islamic Education Campaign',
            category: 'campaigns',
            image: 'https://picsum.photos/seed/hidayah-campaign-1/1200/900',
            description: 'Digital campaign promoting Quranic studies and Islamic knowledge'
        },
        {
            title: 'Youth Workshop Series',
            category: 'videos',
            image: 'https://picsum.photos/seed/hidayah-video-1/1200/900',
            description: 'Video documentation of youth empowerment workshops'
        },
        {
            title: 'Charity Drive Poster',
            category: 'designs',
            image: 'https://picsum.photos/seed/hidayah-design-1/1200/900',
            description: 'Visual campaign for community charity initiative'
        },
        {
            title: 'Friday Khutbah Coverage',
            category: 'events',
            image: 'https://picsum.photos/seed/hidayah-event-2/1200/900',
            description: 'Weekly documentation of Friday sermons and prayers'
        },
        {
            title: 'Zakat Awareness Campaign',
            category: 'campaigns',
            image: 'https://picsum.photos/seed/hidayah-campaign-2/1200/900',
            description: 'Educational campaign about the importance of Zakat'
        },
        {
            title: 'Convert Stories Documentary',
            category: 'videos',
            image: 'https://picsum.photos/seed/hidayah-video-2/1200/900',
            description: 'Heartwarming stories of new Muslims finding guidance'
        },
        {
            title: 'Annual Report Design',
            category: 'designs',
            image: 'https://picsum.photos/seed/hidayah-design-2/1200/900',
            description: 'Professional layout for foundation annual report'
        },
        {
            title: 'Eid Celebration 2025',
            category: 'events',
            image: 'https://picsum.photos/seed/hidayah-event-3/1200/900',
            description: 'Community Eid celebration with families and children'
        },
        {
            title: 'Quran Memorization Program',
            category: 'campaigns',
            image: 'https://picsum.photos/seed/hidayah-campaign-3/1200/900',
            description: 'Promoting Quran memorization classes for all ages'
        },
        {
            title: 'Volunteer Testimonials',
            category: 'videos',
            image: 'https://picsum.photos/seed/hidayah-video-3/1200/900',
            description: 'Inspiring stories from our dedicated volunteers'
        },
        {
            title: 'Social Media Graphics Pack',
            category: 'designs',
            image: 'https://picsum.photos/seed/hidayah-design-3/1200/900',
            description: 'Cohesive visual identity for social media presence'
        }
    ],
    team: [
        {
            name: 'Ahmad Ibrahim',
            role: 'Creative Director',
            photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80'
        },
        {
            name: 'Fatimah Hassan',
            role: 'Lead Videographer',
            photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
        },
        {
            name: 'Yusuf Rahman',
            role: 'Graphic Designer',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
        },
        {
            name: 'Aisha Zahra',
            role: 'Content Strategist',
            photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80'
        },
        {
            name: 'Omar Abdullah',
            role: 'Photographer',
            photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80'
        },
        {
            name: 'Maryam Ali',
            role: 'Social Media Manager',
            photo: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=900&q=80'
        },
        {
            name: 'Bilal Ismail',
            role: 'Video Editor',
            photo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
        },
        {
            name: 'Khadijah Noor',
            role: 'Digital Outreach Lead',
            photo: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=900&q=80'
        }
    ]
};

let activeContent = DEFAULT_CONTENT;
let portfolioData = [];
let teamData = [];
let localOverridesActive = false;

function normalizeContent(source = {}) {
    return {
        hero: { ...DEFAULT_CONTENT.hero, ...(source.hero || {}) },
        about: { ...DEFAULT_CONTENT.about, ...(source.about || {}) },
        services: Array.isArray(source.services) && source.services.length
            ? source.services.map((item, index) => ({
                ...DEFAULT_CONTENT.services[index],
                ...(item || {})
            }))
            : DEFAULT_CONTENT.services,
        portfolio: Array.isArray(source.portfolio) && source.portfolio.length
            ? source.portfolio.map(item => ({ ...item }))
            : DEFAULT_CONTENT.portfolio,
        team: Array.isArray(source.team) && source.team.length
            ? source.team.map(item => ({ ...item }))
            : DEFAULT_CONTENT.team
    };
}

function getStoredContent() {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!stored) return null;
    try {
        return JSON.parse(stored);
    } catch (error) {
        console.warn('Failed to parse stored content, using defaults.', error);
        return null;
    }
}

function ensureOverrideBanner() {
    let banner = document.getElementById('overrideBanner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'overrideBanner';
        banner.className = 'override-banner';
        banner.innerHTML = `
            <span><strong>Local edits active:</strong> This device is overriding live content.json.</span>
            <div class="override-actions">
                <button class="btn btn-outline btn-small" id="overrideDismiss">Dismiss</button>
                <button class="btn btn-primary btn-small" id="overrideReset">Use Live Content</button>
            </div>
        `;
        document.body.appendChild(banner);
    }

    const dismissBtn = document.getElementById('overrideDismiss');
    const resetBtn = document.getElementById('overrideReset');

    if (dismissBtn) {
        dismissBtn.onclick = () => {
            banner.classList.add('hidden');
        };
    }

    if (resetBtn) {
        resetBtn.onclick = () => {
            localStorage.removeItem(CONTENT_STORAGE_KEY);
            window.location.reload();
        };
    }

    banner.classList.toggle('visible', localOverridesActive);
}

async function loadRemoteContent() {
    try {
        const response = await fetch('content.json', { cache: 'no-store' });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch (error) {
        console.warn('Failed to load remote content.json', error);
        return null;
    }
}

function applyOverrides(base, overrides) {
    if (!overrides) return base;
    return {
        hero: { ...base.hero, ...(overrides.hero || {}) },
        about: { ...base.about, ...(overrides.about || {}) },
        services: Array.isArray(overrides.services) && overrides.services.length
            ? overrides.services
            : base.services,
        portfolio: Array.isArray(overrides.portfolio) && overrides.portfolio.length
            ? overrides.portfolio
            : base.portfolio,
        team: Array.isArray(overrides.team) && overrides.team.length
            ? overrides.team
            : base.team
    };
}

function applyContent(content) {
    const heroSection = document.querySelector('.hero');
    if (heroSection && content.hero.backgroundUrl) {
        heroSection.style.setProperty('--hero-bg-image', `url('${content.hero.backgroundUrl}')`);
    }

    const heroBadge = document.getElementById('heroBadge');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroPrimaryCta = document.getElementById('heroPrimaryCta');
    const heroSecondaryCta = document.getElementById('heroSecondaryCta');
    const heroImage = document.getElementById('heroImage');
    const heroCardTopTitle = document.getElementById('heroCardTopTitle');
    const heroCardTopSubtitle = document.getElementById('heroCardTopSubtitle');
    const heroCardBottomTitle = document.getElementById('heroCardBottomTitle');
    const heroCardBottomSubtitle = document.getElementById('heroCardBottomSubtitle');

    if (heroBadge) heroBadge.textContent = content.hero.badge;
    if (heroTitle) heroTitle.textContent = content.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
    if (heroPrimaryCta) {
        heroPrimaryCta.textContent = content.hero.primaryCtaText;
        heroPrimaryCta.setAttribute('href', content.hero.primaryCtaHref || '#portfolio');
    }
    if (heroSecondaryCta) {
        heroSecondaryCta.textContent = content.hero.secondaryCtaText;
        heroSecondaryCta.setAttribute('href', content.hero.secondaryCtaHref || '#contact');
    }
    if (heroImage && content.hero.imageUrl) {
        heroImage.src = content.hero.imageUrl;
    }
    if (heroCardTopTitle) heroCardTopTitle.textContent = content.hero.cardTopTitle;
    if (heroCardTopSubtitle) heroCardTopSubtitle.textContent = content.hero.cardTopSubtitle;
    if (heroCardBottomTitle) heroCardBottomTitle.textContent = content.hero.cardBottomTitle;
    if (heroCardBottomSubtitle) heroCardBottomSubtitle.textContent = content.hero.cardBottomSubtitle;

    const aboutLead = document.getElementById('aboutLead');
    const aboutBody1 = document.getElementById('aboutBody1');
    const aboutBody2 = document.getElementById('aboutBody2');
    const aboutPhoto = document.getElementById('aboutPhoto');

    if (aboutLead) aboutLead.textContent = content.about.lead;
    if (aboutBody1) aboutBody1.textContent = content.about.body1;
    if (aboutBody2) aboutBody2.textContent = content.about.body2;
    if (aboutPhoto && content.about.imageUrl) {
        aboutPhoto.src = content.about.imageUrl;
    }

    content.services.forEach((service, index) => {
        const icon = document.querySelector(`[data-service-icon="${index}"]`);
        const title = document.querySelector(`[data-service-title="${index}"]`);
        const desc = document.querySelector(`[data-service-desc="${index}"]`);

        if (icon) icon.textContent = service.icon;
        if (title) title.textContent = service.title;
        if (desc) desc.textContent = service.description;
    });
}

async function initializeContent() {
    const remoteRaw = await loadRemoteContent();
    const remoteContent = normalizeContent(remoteRaw || {});
    const storedOverrides = getStoredContent();
    localOverridesActive = Boolean(storedOverrides);
    activeContent = applyOverrides(remoteContent, storedOverrides);
    applyContent(activeContent);

    portfolioData = Array.isArray(activeContent.portfolio) ? activeContent.portfolio : [];
    teamData = Array.isArray(activeContent.team) ? activeContent.team : [];
    renderPortfolio();
    renderTeam();
    ensureOverrideBanner();
}

initializeContent();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// PORTFOLIO DATA & RENDERING
// ===================================
// Data hydrated in initializeContent()

// Generate portfolio items
const portfolioGrid = document.getElementById('portfolioGrid');

function renderPortfolio(filter = 'all') {
    portfolioGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
    
    filteredData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in-up';
        portfolioItem.style.animationDelay = `${index * 0.1}s`;
        portfolioItem.dataset.category = item.category;
        portfolioItem.setAttribute('tabindex', '0');
        portfolioItem.setAttribute('role', 'button');
        portfolioItem.setAttribute('aria-label', `${item.title} - ${item.category}`);
        
        const imageMarkup = item.image
            ? `<img src="${item.image}" alt="${item.title}" loading="lazy">`
            : `
                <div class="portfolio-placeholder">
                    ${getCategoryIcon(item.category)}
                </div>
            `;

        portfolioItem.innerHTML = `
            ${imageMarkup}
            <div class="portfolio-overlay">
                <div class="portfolio-category">${item.category}</div>
                <div class="portfolio-title">${item.title}</div>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => {
            openLightbox(item);
        });
        
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Trigger animation
    setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.classList.add('visible');
        });
    }, 100);
}

function getCategoryIcon(category) {
    const icons = {
        events: '📸',
        campaigns: '🎞️',
        videos: '🎥',
        designs: '🎨'
    };
    return icons[category] || '📷';
}

// Portfolio filters
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter portfolio
        const filter = button.dataset.filter;
        renderPortfolio(filter);
    });
});

// Initial render triggered after content initialization

// ===================================
// LIGHTBOX
// ===================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(item) {
    const fallback = 'https://picsum.photos/seed/hidayah-placeholder/1200/900';
    lightboxImage.src = item.image || fallback;
    lightboxImage.alt = item.title;
    lightboxCaption.textContent = `${item.title} - ${item.description}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ===================================
// TEAM DATA & RENDERING
// ===================================
// Data hydrated in initializeContent()

const teamGrid = document.getElementById('teamGrid');

function renderTeam() {
    if (!teamGrid) return;
    teamGrid.innerHTML = '';

    teamData.forEach((member, index) => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member fade-in-up';
        teamMember.style.animationDelay = `${index * 0.1}s`;
        const initials = member.name
            ? member.name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase()
            : 'TM';
        const photoMarkup = member.photo
            ? `<img src="${member.photo}" alt="${member.name}">`
            : `<span class="team-initials">${initials}</span>`;

        teamMember.innerHTML = `
            <div class="team-photo">
                ${photoMarkup}
            </div>
            <div class="team-info">
                <div class="team-name">${member.name}</div>
                <div class="team-role">${member.role}</div>
            </div>
        `;
        
        teamGrid.appendChild(teamMember);
    });

    setTimeout(() => {
        teamGrid.querySelectorAll('.team-member').forEach(member => {
            member.classList.add('visible');
        });
    }, 100);
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.classList.add('fade-in-up');
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// COUNTER ANIMATION
// ===================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString() + '+';
}

// Observe impact stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ===================================
// PARALLAX EFFECT (SUBTLE)
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = 0.12;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// SMOOTH REVEAL ON SCROLL
// ===================================
const revealElements = document.querySelectorAll('.about-text, .about-image, .section-header');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up', 'visible');
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    element.classList.add('fade-in-up');
    revealObserver.observe(element);
});

// ===================================
// ACTIVE NAVIGATION HIGHLIGHT
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// INITIALIZE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hidayah Centre Foundation Media Team Website Loaded');
    
    // Add initial animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in-up').forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }, 100);
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Debounce scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
    highlightNavigation();
}, 10));

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
// Keyboard navigation for portfolio items
document.addEventListener('keydown', (e) => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const focusedElement = document.activeElement;
    const currentIndex = Array.from(portfolioItems).indexOf(focusedElement);
    
    if (currentIndex !== -1) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Portfolio items are keyboard accessible via renderPortfolio
