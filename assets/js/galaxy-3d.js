/* =====================================================
   NEXUS Portfolio - 3D Solar System & Hyperdrive Warp Engine
   Target Candidate: RASHIL KUMAR SURESH KUMAR
===================================================== */

class Galaxy3DEngine {
    constructor() {
        this.active = false;
        this.canvas = null;
        this.ctx = null;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.animFrameId = null;
        this.time = 0;

        // Warp effect state
        this.isWarping = false;
        this.warpProgress = 0;
        this.targetSection = null;

        // 7 Planet Bodies + Central Core Star
        this.sun = { x: 0, y: 0, z: 0, radius: 45, color: "#FFFFFF", glow: "#F59E0B", name: "NEXUS ORIGIN" };

        this.planets = [
            { id: "hero", name: "NEXARA", label: "HOME · ORIGIN STAR", color: "#F59E0B", secondary: "#D97706", orbitR: 130, orbitSpeed: 0.008, angle: 0, size: 18 },
            { id: "about", name: "VELITHON", label: "ABOUT · LIVING CORE", color: "#34D399", secondary: "#059669", orbitR: 200, orbitSpeed: 0.006, angle: 1.0, size: 22 },
            { id: "education", name: "SCHOLIRA", label: "EDUCATION · KNOWLEDGE SPHERE", color: "#8B5CF6", secondary: "#6D28D9", orbitR: 270, orbitSpeed: 0.0045, angle: 2.2, size: 20 },
            { id: "skills", name: "FORGEVYN", label: "SKILLS · CRAFT WORLD", color: "#06B6D4", secondary: "#0891B2", orbitR: 340, orbitSpeed: 0.0035, angle: 3.5, size: 26 },
            { id: "services", name: "CREDENX", label: "SERVICES · CERTIFICATE INFRASTRUCTURE", color: "#10B981", secondary: "#064E3B", orbitR: 415, orbitSpeed: 0.003, angle: 4.2, size: 23 },
            { id: "projects", name: "ARCANEX", label: "PROJECTS · CREATION REALM", color: "#F97316", secondary: "#C2410C", orbitR: 490, orbitSpeed: 0.0025, angle: 5.0, size: 24 },
            { id: "journey", name: "CHRONETHIS", label: "JOURNEY · TIMELINE WORLD", color: "#EC4899", secondary: "#BE185D", orbitR: 565, orbitSpeed: 0.002, angle: 5.8, size: 21 },
            { id: "contact", name: "SIGNALYX", label: "CONTACT · COMM BEACON", color: "#22C55E", secondary: "#15803D", orbitR: 640, orbitSpeed: 0.0016, angle: 0.5, size: 19 }
        ];

        // Background Starfield (3D space particles)
        this.stars = [];
        this.initStars(400);

        // Hovered planet
        this.hoveredPlanet = null;

        this.init();
    }

    init() {
        this.canvas = document.getElementById("galaxy-3d-canvas");
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext("2d");

        this.resize();
        window.addEventListener("resize", () => this.resize());

        // Mouse Listeners for Raycasting & Planet Hovering
        this.canvas.addEventListener("mousemove", (e) => this.handleMouseMove(e));
        this.canvas.addEventListener("click", (e) => this.handleClick(e));
    }

    initStars(count) {
        this.stars = [];
        for (let i = 0; i < count; i++) {
            this.stars.push({
                x: (Math.random() - 0.5) * 3000,
                y: (Math.random() - 0.5) * 3000,
                z: Math.random() * 2000,
                size: Math.random() * 1.8 + 0.5,
                color: Math.random() > 0.3 ? "#FFFFFF" : Math.random() > 0.5 ? "#38BDF8" : "#A78BFA"
            });
        }
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.canvas) {
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        }
    }

    toggleMode() {
        this.active = !this.active;
        const container = document.getElementById("galaxy-3d-overlay");
        const toggleBtn = document.getElementById("nav-3d-toggle");

        if (container && toggleBtn) {
            if (this.active) {
                container.style.display = "block";
                toggleBtn.classList.add("is-3d-active");
                toggleBtn.innerHTML = `🪐 2D PLANETS MODE`;
                document.body.style.overflow = "hidden";
                this.loop();
            } else {
                container.style.display = "none";
                toggleBtn.classList.remove("is-3d-active");
                toggleBtn.innerHTML = `🌌 3D GALAXY MODE`;
                document.body.style.overflow = "";
                if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
            }
        }
    }

    handleMouseMove(e) {
        if (!this.active || this.isWarping) return;
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        this.hoveredPlanet = null;

        for (let p of this.planets) {
            if (p.screenX !== undefined && p.screenY !== undefined) {
                const dist = Math.hypot(mx - p.screenX, my - p.screenY);
                if (dist < p.scaledSize + 12) {
                    this.hoveredPlanet = p;
                    this.canvas.style.cursor = "pointer";
                    return;
                }
            }
        }

        this.canvas.style.cursor = "default";
    }

    handleClick(e) {
        if (!this.active || this.isWarping) return;
        if (this.hoveredPlanet) {
            this.triggerHyperdriveWarp(this.hoveredPlanet.id);
        }
    }

    triggerHyperdriveWarp(sectionId) {
        this.isWarping = true;
        this.warpProgress = 0;
        this.targetSection = sectionId;
    }

    loop() {
        if (!this.active) return;
        this.time += 0.015;
        this.render();
        this.animFrameId = requestAnimationFrame(() => this.loop());
    }

    render() {
        const ctx = this.ctx;
        const cx = this.width / 2;
        const cy = this.height / 2;

        // Clear Canvas
        ctx.fillStyle = "rgba(4, 7, 15, 0.95)";
        ctx.fillRect(0, 0, this.width, this.height);

        // 1. Draw Starfield (Space Particles with 3D Perspective)
        const speed = this.isWarping ? 45 : 0.8;
        for (let s of this.stars) {
            s.z -= speed;
            if (s.z <= 0) s.z += 2000;

            const k = 400 / s.z;
            const px = s.x * k + cx;
            const py = s.y * k + cy;

            if (px >= 0 && px < this.width && py >= 0 && py < this.height) {
                const alpha = Math.min(1, (2000 - s.z) / 1000);
                ctx.fillStyle = s.color;
                ctx.globalAlpha = alpha;

                if (this.isWarping) {
                    // Hyperdrive Star Streaks
                    const length = (2000 - s.z) * 0.05 * (this.warpProgress + 1);
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(px + (px - cx) * 0.08 * length, py + (py - cy) * 0.08 * length);
                    ctx.strokeStyle = s.color;
                    ctx.lineWidth = s.size * 1.5;
                    ctx.stroke();
                } else {
                    ctx.beginPath();
                    ctx.arc(px, py, s.size * k * 0.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
        ctx.globalAlpha = 1.0;

        // Handle Warp Progression
        if (this.isWarping) {
            this.warpProgress += 0.025;
            if (this.warpProgress >= 1.0) {
                // Complete Warp -> Switch back to 2D & scroll to section
                this.isWarping = false;
                const section = this.targetSection;
                this.toggleMode();
                if (typeof scrollToSection === "function") {
                    scrollToSection(section);
                }
                return;
            }
        }

        // 2. Draw Orbit Rings (Elliptical 3D tilt)
        const tiltY = 0.35; // 3D orbit tilt factor
        for (let p of this.planets) {
            ctx.beginPath();
            ctx.ellipse(cx, cy, p.orbitR, p.orbitR * tiltY, 0, 0, Math.PI * 2);
            ctx.strokeStyle = p.id === (this.hoveredPlanet && this.hoveredPlanet.id) ? p.color : "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = p.id === (this.hoveredPlanet && this.hoveredPlanet.id) ? 2 : 1;
            ctx.stroke();
        }

        // 3. Draw Central Core Star (NEXUS ORIGIN)
        const sunGlow = ctx.createRadialGradient(cx, cy, 5, cx, cy, 60);
        sunGlow.addColorStop(0, "#FFFFFF");
        sunGlow.addColorStop(0.3, "#F59E0B");
        sunGlow.addColorStop(0.7, "rgba(245, 158, 11, 0.3)");
        sunGlow.addColorStop(1, "transparent");

        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, 65, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "800 11px Orbitron, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("NEXUS CORE", cx, cy + 85);

        // 4. Update & Draw 7 Planets
        for (let p of this.planets) {
            p.angle += p.orbitSpeed;
            const x = Math.cos(p.angle) * p.orbitR;
            const y = Math.sin(p.angle) * p.orbitR * tiltY;

            // Depth calculation for 3D scale and layering
            const zDepth = Math.sin(p.angle);
            const scale = 0.75 + (zDepth + 1) * 0.25;

            p.screenX = cx + x;
            p.screenY = cy + y;
            p.scaledSize = p.size * scale;

            const isHovered = this.hoveredPlanet && this.hoveredPlanet.id === p.id;
            const currentSize = isHovered ? p.scaledSize * 1.3 : p.scaledSize;

            // Planet Glow
            const glow = ctx.createRadialGradient(p.screenX, p.screenY, currentSize * 0.2, p.screenX, p.screenY, currentSize * 2);
            glow.addColorStop(0, p.color);
            glow.addColorStop(0.5, p.secondary);
            glow.addColorStop(1, "transparent");

            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(p.screenX, p.screenY, currentSize * 2, 0, Math.PI * 2);
            ctx.fill();

            // Planet 3D Sphere Body
            const sphereGrad = ctx.createRadialGradient(
                p.screenX - currentSize * 0.3,
                p.screenY - currentSize * 0.3,
                currentSize * 0.1,
                p.screenX,
                p.screenY,
                currentSize
            );
            sphereGrad.addColorStop(0, "#FFFFFF");
            sphereGrad.addColorStop(0.3, p.color);
            sphereGrad.addColorStop(0.8, p.secondary);
            sphereGrad.addColorStop(1, "#0A0A1A");

            ctx.fillStyle = sphereGrad;
            ctx.beginPath();
            ctx.arc(p.screenX, p.screenY, currentSize, 0, Math.PI * 2);
            ctx.fill();

            // Planet Name Label
            ctx.fillStyle = isHovered ? "#FFFFFF" : p.color;
            ctx.font = isHovered ? "900 13px Orbitron, sans-serif" : "700 11px Orbitron, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(p.name, p.screenX, p.screenY + currentSize + 16);

            if (isHovered) {
                ctx.fillStyle = "#94A3B8";
                ctx.font = "600 9px Space Grotesk, sans-serif";
                ctx.fillText(p.label, p.screenX, p.screenY + currentSize + 28);

                ctx.fillStyle = "#38BDF8";
                ctx.font = "800 9px Orbitron, sans-serif";
                ctx.fillText("▶ CLICK TO HYPERDRIVE WARP", p.screenX, p.screenY + currentSize + 40);
            }
        }
    }
}

// Global 3D Galaxy Engine Instance & Helper
window.galaxy3D = null;

function initGalaxy3DEngine() {
    if (!window.galaxy3D) {
        window.galaxy3D = new Galaxy3DEngine();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGalaxy3DEngine);
} else {
    initGalaxy3DEngine();
}

function toggleGalaxy3DMode() {
    if (!window.galaxy3D) {
        initGalaxy3DEngine();
    }
    if (window.galaxy3D) {
        window.galaxy3D.toggleMode();
    }
}
