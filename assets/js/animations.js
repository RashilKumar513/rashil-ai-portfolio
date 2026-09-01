/* =====================================================
   NEXUS Portfolio - Animations & Micro-Interactions
   Includes: Custom Interactive Cyber Cursor (Lerp Physics & Target FX),
   System Preloader (0%-100% Counter), Scroll Spy & Live Counters.
===================================================== */

function initAnimations() {
    initCustomCursor();
    initPreloader();
    initNavbarScroll();
    initActiveNavHighlight();
    initScrollReveal();
    initBackToTop();
    initSpotlightEffects();
    initCounterAnimations();
    init3DTiltEffects();
    initParticleClickBursts();
    initFluidCursorTrail();
}

/**
 * Custom Interactive Cyber Cursor with LERP Physics & Hardware GPU Compositing
 */
function initCustomCursor() {
    const dot = document.getElementById("cyber-cursor-dot");
    const ring = document.getElementById("cyber-cursor-ring");

    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasMoved = false;

    dot.style.opacity = "0";
    ring.style.opacity = "0";

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!hasMoved) {
            hasMoved = true;
            dot.style.opacity = "1";
            ring.style.opacity = "1";
        }
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        if (hasMoved) {
            dot.style.opacity = "1";
            ring.style.opacity = "1";
        }
    });

    // Smooth Lerp Physics for Ring with GPU Compositing Layer
    function animateRing() {
        ringX += (mouseX - ringX) * 0.25;
        ringY += (mouseY - ringY) * 0.25;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Click Implosion FX
    window.addEventListener("mousedown", () => {
        document.body.classList.add("cursor-active");
    }, { passive: true });

    window.addEventListener("mouseup", () => {
        document.body.classList.remove("cursor-active");
    }, { passive: true });

    // Hover Target Expansion FX
    const interactiveSelectors = "a, button, input, textarea, select, .project-btn, .pec-btn, .pec-domain-card, .education-card, .contact-card-item, .filter-tab-btn, .focus-card-wow";

    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.add("cursor-hover");
        }
    }, { passive: true });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.remove("cursor-hover");
        }
    }, { passive: true });
}

/**
 * Interactive Cyber System Preloader (0% -> 100% Counter & Fade Out)
 */
function initPreloader() {
    const preloader = document.getElementById("system-preloader");
    const counter = document.getElementById("preloader-counter");
    const bar = document.getElementById("preloader-bar");
    const terminal = document.getElementById("preloader-terminal");

    if (!preloader || !counter || !bar) return;

    const messages = [
        "> INITIALIZING RASHIL.AI SYSTEM ARCHITECTURE...",
        "> LOADING CANDIDATE PROFILE: RASHIL KUMAR SURESH KUMAR...",
        "> CONNECTING 14 VERIFIED INTERNSHIPS & CERTIFICATE VAULT...",
        "> LOADING 10 PRODUCTION PROJECTS & AI SYSTEMS...",
        "> SYSTEM READY. ACCESS GRANTED."
    ];

    let progress = 0;
    let messageIdx = 0;
    const duration = 1400; // 1.4 seconds smooth load
    const startTime = performance.now();

    function updatePreloader(now) {
        const elapsedTime = now - startTime;
        progress = Math.min(100, Math.floor((elapsedTime / duration) * 100));

        counter.textContent = progress;
        bar.style.width = `${progress}%`;

        // Update terminal messages as progress advances
        const targetMessageIdx = Math.min(messages.length - 1, Math.floor((progress / 100) * messages.length));
        if (targetMessageIdx !== messageIdx && terminal) {
            messageIdx = targetMessageIdx;
            terminal.innerHTML = `<div class="terminal-line active">${messages[messageIdx]}</div>`;
        }

        if (progress < 100) {
            requestAnimationFrame(updatePreloader);
        } else {
            if (terminal) terminal.innerHTML = `<div class="terminal-line active">${messages[messages.length - 1]}</div>`;
            setTimeout(() => {
                preloader.classList.add("loaded");
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 400);
            }, 250);
        }
    }

    requestAnimationFrame(updatePreloader);
}

/**
 * Handle Header Scrolled State (Glassmorphism)
 */
function initNavbarScroll() {
    const header = document.querySelector(".header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }, { passive: true });
}

/**
 * Highlight active navbar item based on section currently in view (100% Accurate Scroll Spy)
 */
function initActiveNavHighlight() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = Array.from(document.querySelectorAll("section[id]"));

    if (!sections.length || !navLinks.length) return;

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 140; // Offset for header + padding threshold

        let currentSectionId = "hero";

        // Check if near top
        if (window.scrollY < 100) {
            currentSectionId = "hero";
        } 
        // Check if near bottom
        else if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
            currentSectionId = "contact";
        } 
        // Find matching section by position
        else {
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute("id");
                    break;
                }
            }
        }

        if (currentSectionId) {
            navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (href === `#${currentSectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    }

    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", updateActiveNav, { passive: true });
    updateActiveNav();
}

/**
 * Intersection Observer for element scroll reveals
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll, .hover-lift, .project-card, .skill-category-card, .stat-card");

    if (!revealElements.length) return;

    revealElements.forEach(el => el.classList.add("is-visible"));
}

/**
 * Interactive Radial Mouse Spotlight Effect on Cards
 */
function initSpotlightEffects() {
    const cards = document.querySelectorAll("[data-spotlight]");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

/**
 * Live Animated Counter for Statistic Cards
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const rawVal = el.getAttribute("data-counter");
                const numMatch = rawVal.match(/\d+/);
                
                if (numMatch) {
                    const targetNum = parseInt(numMatch[0], 10);
                    const suffix = rawVal.replace(numMatch[0], "");
                    let current = 0;
                    const duration = 1200;
                    const stepTime = 30;
                    const totalSteps = duration / stepTime;
                    const increment = targetNum / totalSteps;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetNum) {
                            el.textContent = `${targetNum}${suffix}`;
                            clearInterval(timer);
                        } else {
                            el.textContent = `${Math.floor(current)}${suffix}`;
                        }
                    }, stepTime);
                }
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/**
 * Back to top floating button visibility toggle
 */
function initBackToTop() {
    const backBtn = document.getElementById("back-to-top");
    if (!backBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backBtn.classList.add("show");
        } else {
            backBtn.classList.remove("show");
        }
    }, { passive: true });
}

/**
 * Mobile Navigation Menu Toggle Handler
 */
function initMobileMenu() {
    const toggleBtn = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener("click", () => {
        const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
        toggleBtn.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open");
    });

    // Close menu when clicking links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            document.body.classList.remove("menu-open");
            toggleBtn.setAttribute("aria-expanded", "false");
        });
    });
}

/**
 * World First 1: Holographic 3D Card Tilt & Dynamic Glass Shimmer Depth
 */
function init3DTiltEffects() {
    const tiltSelectors = ".glass-featured, .pec-project-card, .timeline-card, .service-card, .pec-domain-card, .education-card";
    
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(tiltSelectors);
        cards.forEach(card => {
            if (card.closest("#resume-generator-modal")) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
                card.style.transition = "transform 0.1s ease-out";

                // Glass Shimmer Gradient Position
                const shimmerX = (x / rect.width) * 100;
                const shimmerY = (y / rect.height) * 100;
                card.style.backgroundImage = `radial-gradient(400px circle at ${shimmerX}% ${shimmerY}%, rgba(255, 255, 255, 0.08), transparent 70%)`;
            }
        });
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest(tiltSelectors)) {
            const card = e.target.closest(tiltSelectors);
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
            card.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
            card.style.backgroundImage = "none";
        }
    });
}

/**
 * World First 2: Cybernetic Particle Burst Explosions on Every Click
 */
function initParticleClickBursts() {
    window.addEventListener("click", (e) => {
        // Create container for particles
        const container = document.createElement("div");
        container.style.position = "fixed";
        container.style.left = "0";
        container.style.top = "0";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.pointerEvents = "none";
        container.style.zIndex = "9999999";
        document.body.appendChild(container);

        const colors = ["#38BDF8", "#34D399", "#F59E0B", "#EC4899", "#A855F7", "#60A5FA"];
        const particleCount = 22;

        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement("div");
            const size = Math.random() * 6 + 3;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5);
            const distance = Math.random() * 60 + 30;

            p.style.position = "absolute";
            p.style.left = `${e.clientX}px`;
            p.style.top = `${e.clientY}px`;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.backgroundColor = color;
            p.style.borderRadius = "50%";
            p.style.boxShadow = `0 0 10px ${color}`;
            p.style.transform = "translate(-50%, -50%) scale(1)";
            p.style.transition = "transform 0.6s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.6s ease";
            p.style.opacity = "1";

            container.appendChild(p);

            requestAnimationFrame(() => {
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                p.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
                p.style.opacity = "0";
            });
        }

        setTimeout(() => {
            container.remove();
        }, 650);
    }, { passive: true });
}

/**
 * World First 5: Fluid Neon Energy Trail Cursor
 */
function initFluidCursorTrail() {
    const trailCount = 6;
    const dots = [];

    for (let i = 0; i < trailCount; i++) {
        const dot = document.createElement("div");
        dot.className = "fluid-cursor-trail-dot";
        dot.style.position = "fixed";
        dot.style.pointerEvents = "none";
        dot.style.width = `${14 - i * 2}px`;
        dot.style.height = `${14 - i * 2}px`;
        dot.style.borderRadius = "50%";
        dot.style.background = `rgba(56, 189, 248, ${0.4 - i * 0.06})`;
        dot.style.boxShadow = `0 0 12px rgba(56, 189, 248, ${0.6 - i * 0.08})`;
        dot.style.zIndex = `${999998 - i}`;
        dot.style.transform = "translate(-50%, -50%)";
        dot.style.transition = "opacity 0.3s ease";
        document.body.appendChild(dot);
        dots.push({ el: dot, x: -100, y: -100 });
    }

    let mouseX = -100;
    let mouseY = -100;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });

    function animateTrail() {
        let x = mouseX;
        let y = mouseY;

        dots.forEach((dotObj, index) => {
            dotObj.x += (x - dotObj.x) * (0.35 - index * 0.04);
            dotObj.y += (y - dotObj.y) * (0.35 - index * 0.04);
            dotObj.el.style.left = `${dotObj.x}px`;
            dotObj.el.style.top = `${dotObj.y}px`;
            x = dotObj.x;
            y = dotObj.y;
        });

        requestAnimationFrame(animateTrail);
    }
    animateTrail();
}