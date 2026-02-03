const CONTENT_STORAGE_KEY = 'hidayahPortalContent';
const ADMIN_PASSWORD = 'hidayah-admin';

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
        }
    ]
};

function loadContent() {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!stored) {
        return structuredClone(DEFAULT_CONTENT);
    }

    try {
        const parsed = JSON.parse(stored);
        return {
            hero: { ...DEFAULT_CONTENT.hero, ...(parsed.hero || {}) },
            about: { ...DEFAULT_CONTENT.about, ...(parsed.about || {}) },
            services: Array.isArray(parsed.services) && parsed.services.length
                ? parsed.services.map((item, index) => ({
                    ...DEFAULT_CONTENT.services[index],
                    ...(item || {})
                }))
                : DEFAULT_CONTENT.services,
            portfolio: Array.isArray(parsed.portfolio) && parsed.portfolio.length
                ? parsed.portfolio.map(item => ({ ...item }))
                : DEFAULT_CONTENT.portfolio,
            team: Array.isArray(parsed.team) && parsed.team.length
                ? parsed.team.map(item => ({ ...item }))
                : DEFAULT_CONTENT.team
        };
    } catch (error) {
        console.warn('Failed to parse stored content, using defaults.', error);
        return structuredClone(DEFAULT_CONTENT);
    }
}

let contentDraft = loadContent();
let isBound = false;

function setPreview(previewEl, url) {
    if (!previewEl) return;
    previewEl.innerHTML = '';
    if (url) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Preview';
        previewEl.appendChild(img);
    } else {
        previewEl.textContent = 'No image selected';
    }
}

function bindTextInput(id, path) {
    const input = document.getElementById(id);
    if (!input) return;

    const [section, key] = path;
    input.value = contentDraft[section][key] || '';
    if (!isBound) {
        input.addEventListener('input', () => {
            contentDraft[section][key] = input.value;
        });
    }
}

function bindImageUpload(inputId, previewId, section, key) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    if (!input) return;

    setPreview(preview, contentDraft[section][key]);

    if (!isBound) {
        input.addEventListener('change', () => {
            const file = input.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                contentDraft[section][key] = event.target.result;
                setPreview(preview, contentDraft[section][key]);
            };
            reader.readAsDataURL(file);
        });
    }
}

function bindResetButtons() {
    if (isBound) return;
    document.querySelectorAll('[data-reset]').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-reset');
            if (target === 'heroImage') {
                contentDraft.hero.imageUrl = DEFAULT_CONTENT.hero.imageUrl;
                setPreview(document.getElementById('heroImagePreview'), contentDraft.hero.imageUrl);
            }
            if (target === 'heroBackground') {
                contentDraft.hero.backgroundUrl = DEFAULT_CONTENT.hero.backgroundUrl;
                setPreview(document.getElementById('heroBgPreview'), contentDraft.hero.backgroundUrl);
            }
            if (target === 'aboutImage') {
                contentDraft.about.imageUrl = DEFAULT_CONTENT.about.imageUrl;
                setPreview(document.getElementById('aboutImagePreview'), contentDraft.about.imageUrl);
            }
        });
    });
}

function renderServicesEditor() {
    const container = document.getElementById('servicesEditor');
    if (!container) return;

    container.innerHTML = '';

    contentDraft.services.forEach((service, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'service-editor';
        wrapper.innerHTML = `
            <h3>Service ${index + 1}</h3>
            <label>
                Icon (emoji)
                <input type="text" value="${service.icon}">
            </label>
            <label>
                Title
                <input type="text" value="${service.title}">
            </label>
            <label>
                Description
                <textarea rows="3">${service.description}</textarea>
            </label>
        `;

        const inputs = wrapper.querySelectorAll('input, textarea');
        inputs[0].addEventListener('input', (event) => {
            contentDraft.services[index].icon = event.target.value;
        });
        inputs[1].addEventListener('input', (event) => {
            contentDraft.services[index].title = event.target.value;
        });
        inputs[2].addEventListener('input', (event) => {
            contentDraft.services[index].description = event.target.value;
        });

        container.appendChild(wrapper);
    });
}

function renderPortfolioEditor() {
    const container = document.getElementById('portfolioEditor');
    if (!container) return;

    container.innerHTML = '';

    contentDraft.portfolio.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'admin-card';
        card.innerHTML = `
            <header>
                <h3>Portfolio ${index + 1}</h3>
                <button class="btn btn-outline btn-small" type="button" data-remove-portfolio="${index}">Delete</button>
            </header>
            <label>
                Title
                <input type="text" value="${item.title}">
            </label>
            <label>
                Category
                <select>
                    <option value="events" ${item.category === 'events' ? 'selected' : ''}>Events</option>
                    <option value="campaigns" ${item.category === 'campaigns' ? 'selected' : ''}>Campaigns</option>
                    <option value="videos" ${item.category === 'videos' ? 'selected' : ''}>Videos</option>
                    <option value="designs" ${item.category === 'designs' ? 'selected' : ''}>Designs</option>
                </select>
            </label>
            <label>
                Description
                <textarea rows="3">${item.description}</textarea>
            </label>
            <label>
                Image
                <input type="file" accept="image/*" data-portfolio-image="${index}">
                <div class="image-preview" data-portfolio-preview="${index}"></div>
                <button class="btn btn-outline btn-small" type="button" data-clear-portfolio-image="${index}">Remove Image</button>
            </label>
        `;

        const inputs = card.querySelectorAll('input[type="text"], textarea, select');
        inputs[0].addEventListener('input', (event) => {
            contentDraft.portfolio[index].title = event.target.value;
        });
        inputs[1].addEventListener('change', (event) => {
            contentDraft.portfolio[index].category = event.target.value;
        });
        inputs[2].addEventListener('input', (event) => {
            contentDraft.portfolio[index].description = event.target.value;
        });

        const preview = card.querySelector(`[data-portfolio-preview="${index}"]`);
        setPreview(preview, item.image);

        const fileInput = card.querySelector(`[data-portfolio-image="${index}"]`);
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                contentDraft.portfolio[index].image = event.target.result;
                setPreview(preview, contentDraft.portfolio[index].image);
            };
            reader.readAsDataURL(file);
        });

        const clearImageBtn = card.querySelector(`[data-clear-portfolio-image="${index}"]`);
        clearImageBtn.addEventListener('click', () => {
            contentDraft.portfolio[index].image = '';
            setPreview(preview, '');
            fileInput.value = '';
        });

        container.appendChild(card);
    });

    container.querySelectorAll('[data-remove-portfolio]').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-remove-portfolio'), 10);
            contentDraft.portfolio.splice(index, 1);
            renderPortfolioEditor();
        });
    });

    enableDragReorder(container, contentDraft.portfolio, renderPortfolioEditor);
}

function renderTeamEditor() {
    const container = document.getElementById('teamEditor');
    if (!container) return;

    container.innerHTML = '';

    contentDraft.team.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'admin-card';
        card.innerHTML = `
            <header>
                <div class="admin-card-title">
                    <span class="drag-handle" data-drag-handle="team" aria-label="Drag to reorder">Move</span>
                    <h3>Team Member ${index + 1}</h3>
                </div>
                <button class="btn btn-outline btn-small" type="button" data-remove-team="${index}">Delete</button>
            </header>
            <label>
                Name
                <input type="text" value="${member.name}">
            </label>
            <label>
                Role
                <input type="text" value="${member.role}">
            </label>
            <label>
                Photo
                <input type="file" accept="image/*" data-team-image="${index}">
                <div class="image-preview" data-team-preview="${index}"></div>
                <button class="btn btn-outline btn-small" type="button" data-clear-team-image="${index}">Remove Image</button>
            </label>
        `;

        const inputs = card.querySelectorAll('input[type="text"]');
        inputs[0].addEventListener('input', (event) => {
            contentDraft.team[index].name = event.target.value;
        });
        inputs[1].addEventListener('input', (event) => {
            contentDraft.team[index].role = event.target.value;
        });

        const preview = card.querySelector(`[data-team-preview="${index}"]`);
        setPreview(preview, member.photo);

        const fileInput = card.querySelector(`[data-team-image="${index}"]`);
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                contentDraft.team[index].photo = event.target.result;
                setPreview(preview, contentDraft.team[index].photo);
            };
            reader.readAsDataURL(file);
        });

        const clearImageBtn = card.querySelector(`[data-clear-team-image="${index}"]`);
        clearImageBtn.addEventListener('click', () => {
            contentDraft.team[index].photo = '';
            setPreview(preview, '');
            fileInput.value = '';
        });

        container.appendChild(card);
    });

    container.querySelectorAll('[data-remove-team]').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-remove-team'), 10);
            contentDraft.team.splice(index, 1);
            renderTeamEditor();
        });
    });

    enableDragReorder(container, contentDraft.team, renderTeamEditor);
}

function bindActions() {
    const saveButton = document.getElementById('saveContent');
    const resetButton = document.getElementById('resetDefaults');
    const exportButton = document.getElementById('exportContent');
    const reminder = document.getElementById('adminReminder');
    const importInput = document.getElementById('importContent');
    const publishButton = document.getElementById('publishContent');

    if (saveButton && !isBound) {
        saveButton.addEventListener('click', () => {
            localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(contentDraft));
            saveButton.textContent = 'Draft Saved';
            setTimeout(() => {
                saveButton.textContent = 'Save Draft';
            }, 1500);
        });
    }

    if (resetButton && !isBound) {
        resetButton.addEventListener('click', () => {
            localStorage.removeItem(CONTENT_STORAGE_KEY);
            contentDraft = loadContent();
            populateForm();
        });
    }

    if (exportButton && !isBound) {
        exportButton.addEventListener('click', () => {
            const payload = JSON.stringify(contentDraft, null, 2);
            const blob = new Blob([payload], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'content.json';
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            URL.revokeObjectURL(url);
            if (reminder) {
                reminder.classList.add('visible');
                reminder.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    if (publishButton && !isBound) {
        publishButton.addEventListener('click', async () => {
            publishButton.disabled = true;
            publishButton.textContent = 'Publishing...';
            try {
                const response = await fetch('/api/publish', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(contentDraft)
                });

                if (!response.ok) {
                    throw new Error('Publish failed');
                }

                localStorage.removeItem(CONTENT_STORAGE_KEY);
                publishButton.textContent = 'Published';
                setTimeout(() => {
                    publishButton.textContent = 'Publish Live';
                    publishButton.disabled = false;
                }, 1500);
            } catch (error) {
                publishButton.textContent = 'Publish Live';
                publishButton.disabled = false;
                alert('Publish failed. Please make sure Firebase Functions are deployed.');
            }
        });
    }

    if (importInput && !isBound) {
        importInput.addEventListener('change', () => {
            const file = importInput.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const parsed = JSON.parse(event.target.result);
                    contentDraft = {
                        hero: { ...DEFAULT_CONTENT.hero, ...(parsed.hero || {}) },
                        about: { ...DEFAULT_CONTENT.about, ...(parsed.about || {}) },
                        services: Array.isArray(parsed.services) && parsed.services.length
                            ? parsed.services.map((item, index) => ({
                                ...DEFAULT_CONTENT.services[index],
                                ...(item || {})
                            }))
                            : DEFAULT_CONTENT.services,
                        portfolio: Array.isArray(parsed.portfolio) && parsed.portfolio.length
                            ? parsed.portfolio.map(item => ({ ...item }))
                            : DEFAULT_CONTENT.portfolio,
                        team: Array.isArray(parsed.team) && parsed.team.length
                            ? parsed.team.map(item => ({ ...item }))
                            : DEFAULT_CONTENT.team
                    };
                    populateForm();
                    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(contentDraft));
                } catch (error) {
                    alert('Import failed. Please select a valid JSON export file.');
                }
            };
            reader.readAsText(file);
            importInput.value = '';
        });
    }
}

function populateForm() {
    bindTextInput('heroBadgeInput', ['hero', 'badge']);
    bindTextInput('heroTitleInput', ['hero', 'title']);
    bindTextInput('heroSubtitleInput', ['hero', 'subtitle']);
    bindTextInput('heroPrimaryCtaText', ['hero', 'primaryCtaText']);
    bindTextInput('heroPrimaryCtaHref', ['hero', 'primaryCtaHref']);
    bindTextInput('heroSecondaryCtaText', ['hero', 'secondaryCtaText']);
    bindTextInput('heroSecondaryCtaHref', ['hero', 'secondaryCtaHref']);
    bindTextInput('heroCardTopTitleInput', ['hero', 'cardTopTitle']);
    bindTextInput('heroCardTopSubtitleInput', ['hero', 'cardTopSubtitle']);
    bindTextInput('heroCardBottomTitleInput', ['hero', 'cardBottomTitle']);
    bindTextInput('heroCardBottomSubtitleInput', ['hero', 'cardBottomSubtitle']);

    bindTextInput('aboutLeadInput', ['about', 'lead']);
    bindTextInput('aboutBody1Input', ['about', 'body1']);
    bindTextInput('aboutBody2Input', ['about', 'body2']);

    bindImageUpload('heroImageUpload', 'heroImagePreview', 'hero', 'imageUrl');
    bindImageUpload('heroBgUpload', 'heroBgPreview', 'hero', 'backgroundUrl');
    bindImageUpload('aboutImageUpload', 'aboutImagePreview', 'about', 'imageUrl');

    renderServicesEditor();
    renderPortfolioEditor();
    renderTeamEditor();
    bindResetButtons();
}

function initializeForm() {
    populateForm();
    bindActions();
    bindCollectionButtons();
    isBound = true;
}

function enableDragReorder(container, items, renderFn) {
    if (!container) return;
    let draggedIndex = null;

    container.querySelectorAll('.admin-card').forEach((card, index) => {
        const handle = card.querySelector('[data-drag-handle]');
        const dragTarget = handle || card;
        dragTarget.setAttribute('draggable', 'true');

        dragTarget.addEventListener('dragstart', (event) => {
            draggedIndex = index;
            card.classList.add('dragging');
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', '');
        });

        dragTarget.addEventListener('dragend', () => {
            draggedIndex = null;
            card.classList.remove('dragging');
            container.querySelectorAll('.admin-card').forEach(item => item.classList.remove('drag-over'));
        });

        card.addEventListener('dragover', (event) => {
            event.preventDefault();
            card.classList.add('drag-over');
        });

        card.addEventListener('dragleave', () => {
            card.classList.remove('drag-over');
        });

        card.addEventListener('drop', (event) => {
            event.preventDefault();
            card.classList.remove('drag-over');
            const targetIndex = index;
            if (draggedIndex === null || draggedIndex === targetIndex) return;
            const [movedItem] = items.splice(draggedIndex, 1);
            items.splice(targetIndex, 0, movedItem);
            renderFn();
        });
    });
}

function bindCollectionButtons() {
    const addPortfolio = document.getElementById('addPortfolioItem');
    const addTeam = document.getElementById('addTeamMember');

    if (addPortfolio) {
        addPortfolio.addEventListener('click', () => {
            contentDraft.portfolio.push({
                title: 'New Portfolio Item',
                category: 'events',
                image: '',
                description: 'Short description for this piece.'
            });
            renderPortfolioEditor();
        });
    }

    if (addTeam) {
        addTeam.addEventListener('click', () => {
            contentDraft.team.push({
                name: 'New Member',
                role: 'Role title',
                photo: ''
            });
            renderTeamEditor();
        });
    }
}

function handleAdminGate() {
    const gate = document.getElementById('adminGate');
    const unlockButton = document.getElementById('adminUnlock');
    const passwordInput = document.getElementById('adminPassword');
    const errorLabel = document.getElementById('adminError');

    const attemptUnlock = () => {
        if (passwordInput.value === ADMIN_PASSWORD) {
            gate.classList.add('hidden');
            initializeForm();
        } else {
            errorLabel.textContent = 'Incorrect password. Please try again.';
        }
    };

    unlockButton.addEventListener('click', attemptUnlock);
    passwordInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            attemptUnlock();
        }
    });
}

handleAdminGate();
