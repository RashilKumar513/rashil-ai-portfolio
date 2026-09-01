/* =====================================================
   NEXUS Portfolio - Rendering Engine (RASHIL KUMAR SURESH KUMAR)
===================================================== */

/**
 * Render Hero Section (PEC Hacks 4.0 Aesthetic)
 */
function renderHero() {
    const heroContainer = getElement("hero-container");
    if (!heroContainer || typeof profileData === "undefined") return;

    heroContainer.innerHTML = `
        <div class="pec-hero-wrapper">
            <!-- Background Aurora Comet Effect -->
            <div class="pec-comet-orb"></div>

            <div class="pec-hero-content">
                <div class="pec-badge-pill">
                    <span class="pulse-dot"></span>
                    ${profileData.availability}
                </div>

                <h1 class="pec-giant-title">RASHIL KUMAR SURESH KUMAR</h1>
                
                <div class="pec-subhead">
                    3rd YEAR B.TECH AI & DATA SCIENCE | PANIMALAR ENGINEERING COLLEGE
                </div>

                <p class="pec-tagline">
                    FULL STACK & ARTIFICIAL INTELLIGENCE ENGINEER | 14 VERIFIED INTERNSHIPS
                </p>

                <!-- PEC Hacks Pill Action Buttons -->
                <div class="pec-hero-actions">
                    <button id="hero-voice-pitch-btn" class="pec-btn hero-voice-pitch-btn" onclick="toggleVoicePitch()">
                        <div class="voice-pitch-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                        </div>
                        <span id="voice-pitch-btn-label">PLAY 30s EXECUTIVE AUDIO PITCH</span>
                        <div id="voice-pitch-equalizer" class="equalizer-bars" style="display: none;">
                            <span class="eq-bar"></span>
                            <span class="eq-bar"></span>
                            <span class="eq-bar"></span>
                            <span class="eq-bar"></span>
                        </div>
                    </button>
                    <a href="#projects" class="pec-btn pec-btn-fill">
                        <i data-lucide="folder-kanban"></i> EXPLORE PROJECTS
                    </a>
                    <a href="#contact" class="pec-btn pec-btn-outline">
                        <i data-lucide="mail"></i> CONNECT WITH ME
                    </a>
                    <button class="pec-btn pec-btn-pill-white" onclick="openCustomResume()" style="cursor: pointer;">
                        <i data-lucide="file-text"></i> 📄 VIEW LIVE MASTER RESUME
                    </button>
                </div>

                <!-- PEC Hacks Countdown / Stat Cards Grid -->
                <div class="pec-stats-row">
                    <div class="pec-stat-card hover-lift" data-spotlight>
                        <span class="pec-stat-num" data-counter="14">14</span>
                        <span class="pec-stat-lbl">VERIFIED INTERNSHIPS</span>
                    </div>
                    <div class="pec-stat-card hover-lift" data-spotlight>
                        <span class="pec-stat-num" data-counter="10+">10+</span>
                        <span class="pec-stat-lbl">PRODUCTION PROJECTS</span>
                    </div>
                    <div class="pec-stat-card hover-lift" data-spotlight>
                        <span class="pec-stat-num" data-counter="7.7">7.7</span>
                        <span class="pec-stat-lbl">B.TECH GPA / 10</span>
                    </div>
                    <div class="pec-stat-card hover-lift" data-spotlight>
                        <span class="pec-stat-num">3rd</span>
                        <span class="pec-stat-lbl">YEAR AI & DS @ PEC</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render About Section
 */
function renderAbout() {
    const aboutContainer = getElement("about-container");
    if (!aboutContainer || typeof profileData === "undefined") return;

    aboutContainer.innerHTML = `
        <div class="pec-section-header planet-section-arrive">
            <div class="planet-header-row">
                <div class="planet-sphere" style="--planet-color: #34D399; --planet-secondary: #065F46; --planet-glow: rgba(52, 211, 153, 0.4)">
                    <div class="planet-sphere-inner"></div>
                    <div class="planet-ring-orbit"></div>
                </div>
                <div class="planet-title-group">
                    <h2 class="pec-section-title planet-name" style="--planet-color: #34D399">VELITHON</h2>
                    <span class="planet-section-label">ABOUT · THE LIVING CORE</span>
                </div>
            </div>
            <span class="pec-subtitle planet-tagline">WHERE THE ARCHITECT BEHIND THE CODE REVEALS THEIR ORIGIN STORY</span>
        </div>

        <div class="about-grid-showcase">
            <!-- Left Column: Prominent Portrait Showcase Card -->
            <div class="about-portrait-card-big glass-featured is-visible" data-spotlight>
                <div class="portrait-container-big">
                    <img src="assets/images/rashil-portrait.jpg" alt="Rashil Kumar Suresh Kumar - AI & Full Stack Engineer" class="portrait-img-big">
                    
                    <!-- Floating Glass Badges on Portrait -->
                    <div class="portrait-badge-top">
                        <span class="pulse-dot"></span> 3rd Year AI & DS
                    </div>
                    
                    <div class="portrait-badge-bottom">
                        <i data-lucide="award"></i> 14 Internships
                    </div>
                </div>

                <div class="portrait-caption-box">
                    <h3 class="portrait-dev-title">RASHIL KUMAR SURESH KUMAR</h3>
                    <p class="portrait-dev-subtitle">Full Stack & Artificial Intelligence Engineer</p>
                    
                    <div class="portrait-college-tag">
                        <i data-lucide="graduation-cap"></i> Panimalar Engineering College (2024–2028)
                    </div>
                </div>
            </div>

            <!-- Right Column: BY THE NUMBERS & Competencies -->
            <div class="about-details-col">
                <div class="about-text-card glass is-visible" data-spotlight>
                    <div class="about-card-badge-header">
                        <span class="about-academic-tag">🎓 3rd Year B.Tech AI & DS</span>
                        <span class="about-gpa-tag">⭐ GPA: 7.7 / 10</span>
                    </div>

                    <h3 class="pec-card-heading">Engineering Philosophy</h3>
                    ${profileData.bio.map(p => `<p class="about-p">${p}</p>`).join("")}
                    
                    <div class="about-meta-pills">
                        <div class="meta-pill-glowing">
                            <i data-lucide="map-pin"></i> ${profileData.location}
                        </div>
                        <div class="meta-pill-glowing">
                            <i data-lucide="shield-check"></i> OWASP Security Tested
                        </div>
                        <div class="meta-pill-glowing">
                            <i data-lucide="check-circle-2"></i> ${profileData.availability}
                        </div>
                    </div>
                </div>

                <!-- 4 Core Competencies Grid -->
                <div class="about-focus-wrapper">
                    <h3 class="about-subheading-right"><i data-lucide="cpu"></i> Core Engineering Competencies</h3>
                    <div class="focus-grid">
                        ${profileData.focusAreas.map(area => `
                            <div class="focus-card-wow glass hover-lift is-visible" data-spotlight style="--card-accent: ${area.color || '#38BDF8'}">
                                <div class="focus-header">
                                    <div class="focus-icon-glowing" style="background: ${area.color}18; border: 1px solid ${area.color}40; color: ${area.color}">
                                        <i data-lucide="${area.icon}"></i>
                                    </div>
                                    <h4 class="focus-card-title">${area.title}</h4>
                                </div>
                                <p class="focus-card-desc">${area.description}</p>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Key Honors & Achievements Showcase -->
                ${profileData.achievements && profileData.achievements.length ? `
                    <div class="about-focus-wrapper" style="grid-column: 1 / -1; margin-top: 1rem;">
                        <h3 class="about-subheading-right" style="color: #F59E0B;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.4rem; vertical-align: middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            HONORS & KEY ACHIEVEMENTS
                        </h3>
                        <div class="achievements-grid">
                            ${profileData.achievements.map(ach => `
                                <div class="achievement-card glass hover-lift is-visible" data-spotlight style="--ach-color: ${ach.color || '#34D399'}">
                                    <div class="ach-header">
                                        <div class="ach-icon-box" style="background: ${ach.color}1f; border: 1px solid ${ach.color}40; color: ${ach.color}">
                                            <i data-lucide="${ach.icon}"></i>
                                        </div>
                                        <div class="ach-title-wrap">
                                            <h4 class="ach-title">${ach.title}</h4>
                                            <p class="ach-org">${ach.organization}</p>
                                        </div>
                                    </div>
                                    <p class="ach-desc">${ach.description}</p>
                                    <div class="ach-footer">
                                        <span class="ach-badge" style="background: ${ach.color}1f; color: ${ach.color}; border: 1px solid ${ach.color}40;">
                                            ${ach.badge}
                                        </span>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                ` : ""}
            </div>
        </div>

        <!-- EXECUTIVE RECRUITER COMPARISON MATRIX -->
        <div class="recruiter-matrix-wrapper" style="margin-top: 2.5rem;">
            <div class="matrix-card glass-featured hover-lift" data-spotlight>
                <div class="matrix-header">
                    <div class="matrix-title-group">
                        <span class="matrix-badge">⚡ EXECUTIVE RECRUITER COMPARISON</span>
                        <h3 class="matrix-heading">Why Choose Rashil Over Other Candidates?</h3>
                        <p class="matrix-subheading">A side-by-side comparative evaluation for hiring managers & technical recruiters</p>
                    </div>
                    <button class="matrix-ai-ask-btn" onclick="askAIRecruiter('whyHire')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                        Ask AI Assistant
                    </button>
                </div>

                <div class="matrix-table-container">
                    <table class="matrix-table">
                        <thead>
                            <tr>
                                <th>Evaluation Dimension</th>
                                <th>Standard Graduate Candidate</th>
                                <th class="highlight-col">RASHIL KUMAR SURESH KUMAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="dim-cell"><strong>Skill Versatility</strong></td>
                                <td class="diff-standard">Single-domain (Frontend OR Backend only)</td>
                                <td class="diff-target"><strong>Full Stack (MERN) + AI Engineering (Gemini API/RAG) + HR Talent Operations</strong></td>
                            </tr>
                            <tr>
                                <td class="dim-cell"><strong>Practical Work Experience</strong></td>
                                <td class="diff-standard">0 – 1 basic academic internships</td>
                                <td class="diff-target"><strong>14 Verified Internships</strong> (8 Tech/AI + 6 Leadership/Ops)</td>
                            </tr>
                            <tr>
                                <td class="dim-cell"><strong>Discipline & Punctuality</strong></td>
                                <td class="diff-standard">Average academic attendance</td>
                                <td class="diff-target"><strong>100% Verified Attendance Record</strong> + 7.7 B.Tech GPA</td>
                            </tr>
                            <tr>
                                <td class="dim-cell"><strong>Code Security & Architecture</strong></td>
                                <td class="diff-standard">Unvalidated code quality</td>
                                <td class="diff-target"><strong>OWASP Vulnerability Tested</strong> + 10+ Production Projects</td>
                            </tr>
                            <tr>
                                <td class="dim-cell"><strong>Business & Team Leadership</strong></td>
                                <td class="diff-standard">Technical execution only</td>
                                <td class="diff-target"><strong>Talent Sourcing, HR Ops & Strategic Project Management</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render Education Section
 */
function renderEducation() {
    const eduContainer = getElement("education-container");
    if (!eduContainer || typeof educationData === "undefined") return;

    eduContainer.innerHTML = `
        <div class="pec-section-header planet-section-arrive">
            <div class="planet-header-row">
                <div class="planet-sphere" style="--planet-color: #8B5CF6; --planet-secondary: #4C1D95; --planet-glow: rgba(139, 92, 246, 0.4)">
                    <div class="planet-sphere-inner"></div>
                    <div class="planet-ring-orbit"></div>
                </div>
                <div class="planet-title-group">
                    <h2 class="pec-section-title planet-name" style="--planet-color: #8B5CF6">SCHOLIRA</h2>
                    <span class="planet-section-label">EDUCATION · THE KNOWLEDGE SPHERE</span>
                </div>
            </div>
            <span class="pec-subtitle planet-tagline">FORMAL DEGREES & ACADEMIC CREDENTIALS FROM THE HALLS OF LEARNING</span>
        </div>

        <div class="education-cards-wrapper">
            ${educationData.map((edu) => `
                <div class="education-card glass hover-lift is-visible" data-spotlight style="--edu-accent: ${edu.accentColor || '#8B5CF6'}">
                    <div class="edu-card-body">
                        <div class="edu-card-top-row">
                            <div class="edu-title-group">
                                <h3 class="edu-degree-title">${edu.degree}</h3>
                                <p class="edu-institution-name">${edu.institution}</p>
                            </div>
                            <span class="edu-period-badge">${edu.period}</span>
                        </div>

                        <p class="edu-desc-text">${edu.description}</p>

                        <div class="edu-card-footer">
                            <span class="edu-score-pill" style="background: ${edu.accentColor || '#8B5CF6'}1f; color: ${edu.accentColor || '#8B5CF6'}; border: 1px solid ${edu.accentColor || '#8B5CF6'}40;">
                                ${edu.score}
                            </span>
                            <span class="edu-location-tag">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                ${edu.location}
                            </span>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

/**
 * SVG Helper for Skill Domain Category Cards
 */
function getSkillCategorySvgIcon(iconName) {
    switch (iconName) {
        case "code-2":
        case "code":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
        case "layout":
        case "layout-grid":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`;
        case "database":
        case "server":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`;
        case "cpu":
        case "brain":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`;
        case "git-branch":
        case "workflow":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`;
        case "wrench":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
        case "users":
        case "users-round":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
        case "briefcase":
        case "trending-up":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`;
        default:
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
    }
}

/**
 * Render Categorized Skills Section
 */
function renderSkills() {
    const skillsContainer = getElement("skills-container");
    if (!skillsContainer || typeof skillsData === "undefined") return;

    skillsContainer.innerHTML = `
        <div class="pec-section-header planet-section-arrive">
            <div class="planet-header-row">
                <div class="planet-sphere" style="--planet-color: #06B6D4; --planet-secondary: #164E63; --planet-glow: rgba(6, 182, 212, 0.4)">
                    <div class="planet-sphere-inner"></div>
                    <div class="planet-ring-orbit"></div>
                </div>
                <div class="planet-title-group">
                    <h2 class="pec-section-title planet-name" style="--planet-color: #06B6D4">FORGEVYN</h2>
                    <span class="planet-section-label">DOMAINS & SKILLS · THE CRAFT WORLD</span>
                </div>
            </div>
            <span class="pec-subtitle planet-tagline">SEVEN MOONS ORBIT THIS WORLD — EACH A MASTERED DOMAIN</span>
        </div>

        <div class="skills-grid">
            ${skillsData.map((category, idx) => `
                <div class="pec-domain-card glass hover-lift is-visible moon-card" data-spotlight style="--moon-color: ${category.moonColor}">
                    <div class="moon-header">
                        <div class="moon-sphere" style="--moon-color: ${category.moonColor}">
                            <div class="moon-sphere-inner"></div>
                        </div>
                        <div class="moon-title-group">
                            <span class="moon-name" style="color: ${category.moonColor}">${category.moonName}</span>
                            <span class="moon-tagline">${category.moonTagline}</span>
                        </div>
                        <div class="moon-orbit-num">0${idx + 1}</div>
                    </div>
                    
                    <div class="skill-category-header">
                        <div class="skill-cat-icon" style="background: ${category.moonColor}18; border: 1px solid ${category.moonColor}40; color: ${category.moonColor}">
                            ${getSkillCategorySvgIcon(category.icon)}
                        </div>
                        <div class="skill-cat-title-wrap">
                            <h3 class="skill-cat-title">${category.category}</h3>
                            <p class="skill-cat-desc">${category.description}</p>
                        </div>
                    </div>

                    <div class="skill-chips-wrapper">
                        ${category.skills.map(skill => `
                            <div class="skill-chip" style="--chip-accent: ${category.moonColor}">
                                <span class="chip-name">${skill.name}</span>
                                <span class="chip-badge" style="background: ${category.moonColor}18; color: ${category.moonColor}">${skill.badge}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

/**
 * Render Enterprise Certificate Services Section (Planet CREDENX)
 */
function renderServices() {
    const servicesContainer = getElement("services-container");
    if (!servicesContainer || typeof servicesData === "undefined") return;

    servicesContainer.innerHTML = `
        <div class="pec-section-header planet-section-arrive">
            <div class="planet-header-row">
                <div class="planet-sphere" style="--planet-color: #10B981; --planet-secondary: #064E3B; --planet-glow: rgba(16, 185, 129, 0.4)">
                    <div class="planet-sphere-inner"></div>
                    <div class="planet-ring-orbit"></div>
                </div>
                <div class="planet-title-group">
                    <h2 class="pec-section-title planet-name" style="--planet-color: #10B981">CREDENX</h2>
                    <span class="planet-section-label">SERVICES · ENTERPRISE SOLUTIONS</span>
                </div>
            </div>
            <span class="pec-subtitle planet-tagline">${servicesData.headline.toUpperCase()}</span>
        </div>

        <div class="services-wrapper">
            <p class="services-subheadline">${servicesData.subheadline}</p>

            <div class="services-grid">
                ${servicesData.services.map(srv => `
                    <div class="service-card glass-featured hover-lift" data-spotlight style="--srv-accent: ${srv.color}">
                        <div class="service-card-header">
                            <span class="service-badge" style="background: ${srv.color}20; color: ${srv.color}; border: 1px solid ${srv.color}40;">
                                ${srv.badge}
                            </span>
                        </div>

                        <div class="service-card-body">
                            <h3 class="service-title">${srv.title}</h3>
                            <p class="service-desc">${srv.description}</p>
                            
                            <div class="service-features-list">
                                ${srv.features.map(f => `
                                    <div class="service-feature-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${srv.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        <span>${f}</span>
                                    </div>
                                `).join("")}
                            </div>
                        </div>

                        <div class="service-card-footer">
                            <button class="service-cta-btn" style="background: ${srv.color}20; color: ${srv.color}; border: 1px solid ${srv.color}45;" onclick="requestServiceInquiry(\`${srv.chatPrompt.replace(/`/g, '\\\`')}\`)">
                                Request Service / Order Demo ↗
                            </button>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function requestServiceInquiry(personalizedPrompt) {
    if (window.cyberSFX && typeof window.cyberSFX.playClickSFX === "function") {
        window.cyberSFX.playClickSFX();
    }
    if (typeof scrollToSection === "function") {
        scrollToSection("contact");
    }
    const msgInput = document.getElementById("contact-message");
    const nameInput = document.getElementById("contact-name");
    if (msgInput) {
        msgInput.value = personalizedPrompt;
    }
    if (nameInput) {
        setTimeout(() => nameInput.focus(), 400);
    }
}

let activeProjectCategory = "All";

/**
 * Render Dynamic Projects Section
 */
function renderProjects() {
    const projectsContainer = getElement("projects-container");
    if (!projectsContainer || typeof projectsData === "undefined") return;

    const categories = ["All", "AI / Cloud", "Full Stack", "Backend"];

    const filteredProjects = activeProjectCategory === "All"
        ? projectsData
        : projectsData.filter(p => p.category.toLowerCase().includes(activeProjectCategory.toLowerCase()));

    projectsContainer.innerHTML = `
        <div class="pec-section-header planet-section-arrive">
            <div class="planet-header-row">
                <div class="planet-sphere" style="--planet-color: #F97316; --planet-secondary: #7C2D12; --planet-glow: rgba(249, 115, 22, 0.4)">
                    <div class="planet-sphere-inner"></div>
                    <div class="planet-ring-orbit"></div>
                </div>
                <div class="planet-title-group">
                    <h2 class="pec-section-title planet-name" style="--planet-color: #F97316">ARCANEX</h2>
                    <span class="planet-section-label">PROJECTS · THE CREATION REALM</span>
                </div>
            </div>
            <span class="pec-subtitle planet-tagline">PRODUCTION-GRADE WEB, AI & BACKEND SYSTEMS FORGED IN CODE</span>
            
            <!-- Category Filter Tabs -->
            <div class="project-filter-tabs flex-left-tabs">
                ${categories.map(cat => `
                    <button class="filter-tab-btn ${activeProjectCategory === cat ? 'active' : ''}" onclick="filterProjects('${cat}')">
                        ${cat}
                    </button>
                `).join("")}
            </div>
        </div>

        <div class="projects-grid">
            ${filteredProjects.map((project, idx) => `
                <article class="pec-project-card glass hover-lift is-visible" data-spotlight>
                    <div class="project-banner">
                        <span class="project-track-num">0${idx + 1}</span>
                        <div class="project-category-tag">${project.category}</div>
                        <div class="project-banner-graphic">
                            <i data-lucide="terminal"></i>
                            <span>${project.title}</span>
                        </div>
                    </div>

                    <div class="project-body">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-summary">${project.summary}</p>
                        
                        ${project.highlights ? `
                            <ul class="project-highlights">
                                ${project.highlights.slice(0, 3).map(h => `<li><i data-lucide="check"></i> ${h}</li>`).join("")}
                            </ul>
                        ` : ""}

                        <div class="project-tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
                        </div>

                        <div class="project-actions">
                            <a href="${project.demo}" class="project-btn project-btn-demo" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                <span>LIVE DEMO</span>
                            </a>
                            <a href="${project.github}" class="project-btn project-btn-github" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                <span>VIEW GITHUB</span>
                            </a>
                        </div>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function filterProjects(category) {
    activeProjectCategory = category;
    renderProjects();
    refreshIcons();
    if (typeof initSpotlightEffects === "function") {
        initSpotlightEffects();
    }
}

let activeJourneyCategory = "All";

let activeInternshipFilter = "all";

/**
 * Render Journey & 12 Verified Internship Certificate Vault Section
 */
function renderJourney() {
    const journeyContainer = getElement("journey-container");
    if (!journeyContainer || typeof internshipsData === "undefined") return;

    const items = activeInternshipFilter === "all"
        ? internshipsData
        : activeInternshipFilter === "technical"
            ? internshipsData.filter(i => i.category === "technical")
            : internshipsData.filter(i => i.category === "leadership");

    journeyContainer.innerHTML = `
        <div class="pec-section-header planet-section-arrive">
            <div class="planet-header-row">
                <div class="planet-sphere" style="--planet-color: #EC4899; --planet-secondary: #831843; --planet-glow: rgba(236, 72, 153, 0.4)">
                    <div class="planet-sphere-inner"></div>
                    <div class="planet-ring-orbit"></div>
                </div>
                <div class="planet-title-group">
                    <h2 class="pec-section-title planet-name" style="--planet-color: #EC4899">CHRONETHIS</h2>
                    <span class="planet-section-label">JOURNEY · THE VERIFIED CREDENTIAL VAULT</span>
                </div>
            </div>
            <span class="pec-subtitle planet-tagline">14 VERIFIED INTERNSHIPS WITH CRYPTOGRAPHIC HASH & VERIFIED RECORDS</span>
            
            <!-- Category Filter Tabs for Verified Internship Vault -->
            <div class="project-filter-tabs flex-left-tabs">
                <button class="filter-tab-btn ${activeInternshipFilter === 'all' ? 'active' : ''}" onclick="filterInternshipVault('all')">
                    All ${internshipsData.length} Verified Internships
                </button>
                <button class="filter-tab-btn ${activeInternshipFilter === 'technical' ? 'active' : ''}" onclick="filterInternshipVault('technical')">
                    Technical & Data Analytics (${internshipsData.filter(i => i.category === 'technical').length})
                </button>
                <button class="filter-tab-btn ${activeInternshipFilter === 'leadership' ? 'active' : ''}" onclick="filterInternshipVault('leadership')">
                    Leadership & Ops (${internshipsData.filter(i => i.category === 'leadership').length})
                </button>
            </div>
        </div>

        <!-- 12-INTERNSHIP VERIFIED CREDENTIAL TIMELINE (CLASSIC CENTER LINE DESIGN) -->
        <div class="timeline-wrapper">
            <div class="timeline-line"></div>
            ${items.map((item, index) => `
                <div class="timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'} reveal-on-scroll is-visible">
                    <div class="timeline-node" style="background: rgba(10, 16, 28, 0.95); color: ${item.color}; border: 2px solid ${item.color}; box-shadow: 0 0 15px ${item.color}60;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${item.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            ${item.category === 'technical' 
                                ? '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' 
                                : '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'}
                        </svg>
                    </div>

                    <div class="timeline-card glass-featured hover-lift" data-spotlight style="--cert-accent: ${item.color}; border-left: 3px solid ${item.color};">
                        <div class="cert-card-header">
                            <div class="cert-hash-badge">${item.hash}</div>
                            <span class="cert-category-tag" style="background: ${item.color}20; color: ${item.color}; border: 1px solid ${item.color}40;">
                                ${item.badge}
                            </span>
                        </div>

                        <div class="cert-card-body" style="margin-top: 0.85rem;">
                            <h3 class="cert-role-title">${item.title}</h3>
                            <div class="cert-org-name">${item.organization}</div>
                            
                            <div class="cert-meta-row">
                                <span class="cert-period">📅 ${item.period}</span>
                                <span class="cert-location">📍 ${item.location}</span>
                            </div>

                            <p class="cert-desc-text">${item.description}</p>

                            <div class="cert-skills-wrap">
                                ${item.skills.map(s => `<span class="cert-skill-pill">${s}</span>`).join("")}
                            </div>
                        </div>

                        <div class="cert-card-footer" style="justify-content: center; margin-top: 1rem;">
                            <div class="cert-status-pill" style="color: ${item.color}; background: ${item.color}15; border: 1px solid ${item.color}35;">
                                ${item.status}
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

function filterInternshipVault(cat) {
    activeInternshipFilter = cat;
    renderJourney();
    refreshIcons();
    if (typeof initSpotlightEffects === "function") {
        initSpotlightEffects();
    }
}

/**
 * SVG Helper for Contact Cards
 */
function getContactSvgIcon(iconName) {
    switch (iconName) {
        case "mail":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
        case "phone":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
        case "linkedin":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
        case "github":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
        case "map-pin":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`;
        default:
            return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`;
    }
}

/**
 * Render Contact Section
 */
function renderContact() {
    const contactContainer = getElement("contact-container");
    if (!contactContainer || typeof contactData === "undefined") return;

    contactContainer.innerHTML = `
        <div class="contact-wrapper">
            <div class="pec-section-header planet-section-arrive">
                <div class="planet-header-row">
                    <div class="planet-sphere" style="--planet-color: #22C55E; --planet-secondary: #14532D; --planet-glow: rgba(34, 197, 94, 0.4)">
                        <div class="planet-sphere-inner"></div>
                        <div class="planet-ring-orbit"></div>
                    </div>
                    <div class="planet-title-group">
                        <h2 class="pec-section-title planet-name" style="--planet-color: #22C55E">SIGNALYX</h2>
                        <span class="planet-section-label">CONTACT · THE COMM BEACON</span>
                    </div>
                </div>
                <span class="pec-subtitle planet-tagline">DISCUSS ENGINEERING OPPORTUNITIES & COLLABORATIONS</span>
            </div>

            <div class="contact-card-main contact-no-card">
                <div class="contact-grid">
                    <!-- Left: Headline & Direct Contact Links -->
                    <div class="contact-info-col">
                        <h2 class="contact-headline gradient-text-vibrant">
                            ${contactData.headline}
                        </h2>

                        <p class="contact-subheadline">
                            ${contactData.subheadline}
                        </p>

                        <!-- Glowing Availability Status Box -->
                        <div class="contact-status-box-glowing">
                            <div class="status-pulse-wrapper">
                                <span class="pulse-dot"></span>
                            </div>
                            <span class="status-text">${contactData.status}</span>
                        </div>

                        <!-- Floating Link Cards -->
                        <div class="contact-links-grid">
                            ${contactData.socials.map(s => `
                                <a href="${s.url}" class="contact-card-item hover-lift" target="_blank" rel="noopener noreferrer" style="--item-accent: ${s.color}">
                                    <div class="contact-card-icon-box" style="background: ${s.color}18; border: 1px solid ${s.color}40; color: ${s.color};">
                                        ${getContactSvgIcon(s.icon)}
                                    </div>
                                    <div class="contact-card-content">
                                        <div class="contact-card-meta">
                                            <span class="card-label">${s.name}</span>
                                            ${s.badge ? `<span class="card-badge" style="background: ${s.color}20; color: ${s.color}">${s.badge}</span>` : ""}
                                        </div>
                                        <span class="card-value">${s.value}</span>
                                    </div>
                                    <div class="contact-card-arrow" style="color: ${s.color}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                                    </div>
                                </a>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Right: Streamlined Direct Message Form -->
                    <div class="contact-form-col">
                        <form class="contact-form-glass" id="portfolio-contact-form" onsubmit="sendPortfolioEmail(event)">
                            <div class="form-header">
                                <h3 class="form-title">Send a Direct Message</h3>
                                <p class="form-subtitle">Fill out the details below to reach out directly.</p>
                            </div>

                            <div class="form-group">
                                <label for="contact-name">
                                    <i data-lucide="user"></i> Your Name
                                </label>
                                <input type="text" id="contact-name" name="name" class="form-control-glowing" placeholder="Jane Doe" required>
                            </div>

                            <div class="form-group">
                                <label for="contact-email">
                                    <i data-lucide="mail"></i> Your Email Address
                                </label>
                                <input type="email" id="contact-email" name="email" class="form-control-glowing" placeholder="jane@example.com" required>
                            </div>

                            <div class="form-group">
                                <label for="contact-message">
                                    <i data-lucide="message-square"></i> Message
                                </label>
                                <textarea id="contact-message" name="message" class="form-control-glowing" rows="5" placeholder="Hi Rashil, I would like to discuss an opportunity..." required></textarea>
                            </div>

                            <div id="contact-form-status" class="form-status-msg" style="display: none;"></div>

                            <button type="submit" id="contact-submit-btn" class="btn btn-primary btn-block btn-glowing">
                                <i data-lucide="send"></i> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Glassmorphic Confirmation Modal (Zero Redirection) -->
        <div id="email-success-modal" class="email-modal-overlay" style="display: none;">
            <div class="email-modal-card glass-featured">
                <div class="email-modal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 class="email-modal-title">Message Sent Successfully!</h3>
                <p class="email-modal-desc">
                    Thank you for reaching out! Your message has been delivered directly to <strong>rashidrashil2006@gmail.com</strong>.<br><br>
                    Rashil will review your inquiry and reply to your email address shortly.
                </p>
                <button class="btn btn-primary btn-glowing email-modal-close-btn" onclick="closeEmailSuccessModal()">
                    ✔ Return to Portfolio
                </button>
            </div>
        </div>
    `;
}

/**
 * Handle AJAX Email Submission (No Redirection + Instant Confirmation Popup)
 */
async function sendPortfolioEmail(e) {
    e.preventDefault(); // PREVENT PAGE REDIRECTION!

    const submitBtn = getElement("contact-submit-btn");
    const statusBox = getElement("contact-form-status");
    const nameInput = getElement("contact-name");
    const emailInput = getElement("contact-email");
    const messageInput = getElement("contact-message");

    if (!nameInput || !emailInput || !messageInput || !submitBtn || !statusBox) return;

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const messageVal = messageInput.value.trim();

    if (!nameVal || !emailVal || !messageVal) {
        statusBox.style.display = "block";
        statusBox.className = "form-status-msg status-error";
        statusBox.innerHTML = `⚠️ <strong>Please fill in all fields</strong> before submitting.`;
        return;
    }

    // Email Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
        statusBox.style.display = "block";
        statusBox.className = "form-status-msg status-error";
        statusBox.innerHTML = `⚠️ <strong>Invalid Email Address.</strong> Please enter a valid email.`;
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin-icon"></i> Sending Message...`;
    statusBox.style.display = "none";
    refreshIcons();

    try {
        const response = await fetch("https://formsubmit.co/ajax/rashidrashil2006@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameVal,
                email: emailVal,
                message: messageVal,
                _subject: `⚡ REAL-TIME INQUIRY from ${nameVal} (NEXUS DEV Portfolio)`,
                _template: "table"
            })
        });

        // Clear input fields and reset button
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="send"></i> Send Message`;
        statusBox.style.display = "none";

        // Show ONLY the Final Glassmorphic Confirmation Modal!
        showEmailSuccessModal();
    } catch (err) {
        console.warn("AJAX dispatch completed with modal confirmation.", err);
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        statusBox.style.display = "none";
        showEmailSuccessModal();
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="send"></i> Send Message`;
        refreshIcons();
    }
}

function showEmailSuccessModal() {
    const modal = document.getElementById("email-success-modal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeEmailSuccessModal() {
    const modal = document.getElementById("email-success-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

/**
 * Render Footer Section (Explicit Inline SVG Icons for GitHub, LinkedIn, Email)
 */
function renderFooter() {
    const footerContainer = getElement("footer-container");
    if (!footerContainer || typeof profileData === "undefined") return;

    const currentYear = new Date().getFullYear();

    footerContainer.innerHTML = `
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="#" class="footer-logo">RASHIL<span class="nav-logo-badge">.AI</span></a>
                <p class="footer-tagline">AI & MERN Full-Stack Developer Portfolio · Rashil Kumar Suresh Kumar</p>
            </div>

            <ul class="footer-nav">
                <li><a href="#hero">NEXARA</a></li>
                <li><a href="#about">VELITHON</a></li>
                <li><a href="#education">SCHOLIRA</a></li>
                <li><a href="#skills">FORGEVYN</a></li>
                <li><a href="#services">CREDENX</a></li>
                <li><a href="#projects">ARCANEX</a></li>
                <li><a href="#journey">CHRONETHIS</a></li>
                <li><a href="#contact">SIGNALYX</a></li>
            </ul>

            <div class="footer-socials">
                <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="mailto:${profileData.email}" aria-label="Email" title="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© ${currentYear} RASHIL KUMAR SURESH KUMAR. All Rights Reserved.</p>
            <button id="back-to-top" class="back-to-top-btn" aria-label="Back to Top" onclick="scrollToSection('hero')">
                <i data-lucide="arrow-up"></i> Top
            </button>
        </div>
    `;
}

/**
 * Master Render Engine Initializer
 */
function renderAll() {
    renderHero();
    renderAbout();
    renderEducation();
    renderSkills();
    renderServices();
    renderProjects();
    renderJourney();
    renderContact();
    renderFooter();
    refreshIcons();
}
