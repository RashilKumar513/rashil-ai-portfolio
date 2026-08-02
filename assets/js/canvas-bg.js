/* =====================================================
   NEXUS Portfolio - Organic Quantum Aurora Liquid Background
   Features: Pure Silky Liquid Smoke, Aurora Plasma Currents &
   Zero Geometric Rings for a World-Class Unique Aesthetic.
===================================================== */

class CyberAuroraBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext("2d", { alpha: false });
        this.fluids = [];
        this.mouse = { x: -1000, y: -1000 };
        this.mouseVelocity = 0;
        this.hue = 200; // Base Fluid Electric Cyan / Emerald
        this.targetHue = 200;
        this.time = 0;
        this.maxFluids = 70;

        this.init();
    }

    init() {
        this.resize();
        this.bindEvents();
        this.animate();
    }

    resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        this.width = this.canvas.width = Math.floor(window.innerWidth * dpr);
        this.height = this.canvas.height = Math.floor(window.innerHeight * dpr);
        this.dpr = dpr;

        if (window.innerWidth < 768) {
            this.maxFluids = 40;
        } else {
            this.maxFluids = 70;
        }
    }

    injectOrganicDye(x, y, vx, vy, amount = 3) {
        const sx = x * this.dpr;
        const sy = y * this.dpr;
        const svx = vx * this.dpr;
        const svy = vy * this.dpr;

        for (let i = 0; i < amount; i++) {
            const spreadAngle = Math.random() * Math.PI * 2;
            const spreadSpeed = (Math.random() * 2 + 0.4) * this.dpr;
            const fluidHue = (this.hue + Math.random() * 60 - 30 + 360) % 360;

            this.fluids.push({
                x: sx + (Math.random() - 0.5) * 20 * this.dpr,
                y: sy + (Math.random() - 0.5) * 20 * this.dpr,
                vx: svx * 0.35 + Math.cos(spreadAngle) * spreadSpeed,
                vy: svy * 0.35 + Math.sin(spreadAngle) * spreadSpeed,
                radius: (Math.random() * 30 + 15) * this.dpr,
                maxRadius: (Math.random() * 110 + 60) * this.dpr,
                growRate: (Math.random() * 1.8 + 0.9) * this.dpr,
                hue: fluidHue,
                saturation: 85,
                lightness: 58,
                alpha: 0.35,
                decay: Math.random() * 0.009 + 0.006
            });
        }

        if (this.fluids.length > this.maxFluids) {
            this.fluids.splice(0, this.fluids.length - this.maxFluids);
        }
    }

    bindEvents() {
        window.addEventListener("resize", () => {
            this.resize();
        }, { passive: true });

        window.addEventListener("mousemove", (e) => {
            const dx = e.clientX - (this.mouse.x > 0 ? this.mouse.x : e.clientX);
            const dy = e.clientY - (this.mouse.y > 0 ? this.mouse.y : e.clientY);
            this.mouseVelocity = Math.hypot(dx, dy);

            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            if (this.mouseVelocity > 2) {
                // Dynamically shift color spectrum on mouse move / shake
                this.targetHue = (this.targetHue + this.mouseVelocity * 0.45) % 360;
                this.injectOrganicDye(e.clientX, e.clientY, dx, dy, Math.min(4, Math.floor(this.mouseVelocity / 5) + 1));
            }
        }, { passive: true });

        window.addEventListener("click", (e) => {
            this.targetHue = (this.targetHue + 80) % 360;
            this.injectOrganicDye(e.clientX, e.clientY, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14, 10);
        });

        window.addEventListener("mouseleave", () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        }, { passive: true });
    }

    drawOrganicAuroraPlasma() {
        const t = this.time * 0.001;
        this.hue += (this.targetHue - this.hue) * 0.05;

        const h1 = this.hue;
        const h2 = (this.hue + 120) % 360;

        // Flowing Aurora Plasma Stream 1
        const orb1X = this.width * 0.35 + Math.sin(t * 0.5) * 180 * this.dpr;
        const orb1Y = this.height * 0.35 + Math.cos(t * 0.4) * 140 * this.dpr;
        const g1 = this.ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, this.width * 0.55);
        g1.addColorStop(0, `hsla(${h1}, 80%, 55%, 0.15)`);
        g1.addColorStop(0.65, `hsla(${h2}, 75%, 45%, 0.03)`);
        g1.addColorStop(1, "rgba(4, 7, 17, 0)");

        this.ctx.fillStyle = g1;
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Flowing Aurora Plasma Stream 2
        const orb2X = this.width * 0.7 + Math.cos(t * 0.45) * 200 * this.dpr;
        const orb2Y = this.height * 0.65 + Math.sin(t * 0.6) * 160 * this.dpr;
        const g2 = this.ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, this.width * 0.58);
        g2.addColorStop(0, `hsla(${h2}, 85%, 55%, 0.13)`);
        g2.addColorStop(0.65, `hsla(${h1}, 75%, 45%, 0.03)`);
        g2.addColorStop(1, "rgba(4, 7, 17, 0)");

        this.ctx.fillStyle = g2;
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Soft Cursor Light Glow Pool
        if (this.mouse.x > 0 && this.mouse.y > 0) {
            const mx = this.mouse.x * this.dpr;
            const my = this.mouse.y * this.dpr;
            const poolRadius = Math.min(360 * this.dpr, (210 + this.mouseVelocity * 3) * this.dpr);
            const mg = this.ctx.createRadialGradient(mx, my, 0, mx, my, poolRadius);
            mg.addColorStop(0, `hsla(${h1}, 90%, 65%, 0.2)`);
            mg.addColorStop(0.55, `hsla(${h2}, 80%, 55%, 0.06)`);
            mg.addColorStop(1, "rgba(4, 7, 17, 0)");

            this.ctx.fillStyle = mg;
            this.ctx.fillRect(0, 0, this.width, this.height);
        }
    }

    animate() {
        this.time++;

        // Base Dark Quantum Background
        this.ctx.fillStyle = "#040711";
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Render Flowing Aurora Plasma Streams
        this.drawOrganicAuroraPlasma();

        // Render Pure Liquid Dye Smoke Clouds (Screen Blend Mode - NO RINGS/OUTLINES)
        this.ctx.globalCompositeOperation = "screen";

        for (let i = this.fluids.length - 1; i >= 0; i--) {
            const f = this.fluids[i];

            f.vx *= 0.96;
            f.vy *= 0.96;
            f.x += f.vx;
            f.y += f.vy;

            if (f.radius < f.maxRadius) {
                f.radius += f.growRate;
            }

            f.alpha -= f.decay;

            if (f.alpha <= 0) {
                this.fluids.splice(i, 1);
                continue;
            }

            const grad = this.ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius);
            grad.addColorStop(0, `hsla(${f.hue}, ${f.saturation}%, ${f.lightness}%, ${f.alpha})`);
            grad.addColorStop(0.5, `hsla(${f.hue}, ${f.saturation}%, ${f.lightness - 8}%, ${f.alpha * 0.4})`);
            grad.addColorStop(1, `hsla(${f.hue}, ${f.saturation}%, 40%, 0)`);

            this.ctx.beginPath();
            this.ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = grad;
            this.ctx.fill();
        }

        this.ctx.globalCompositeOperation = "source-over";

        requestAnimationFrame(() => this.animate());
    }
}

function initCanvasBackground() {
    new CyberAuroraBackground("bg-canvas");
}
