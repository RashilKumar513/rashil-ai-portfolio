/* =====================================================
   NEXUS Portfolio - Cyber Ambient Audio & SFX Engine
   Target Candidate: RASHIL KUMAR SURESH KUMAR
===================================================== */

class CyberSFXEngine {
    constructor() {
        this.enabled = true;
        this.audioCtx = null;
        this.init();
    }

    init() {
        const saved = localStorage.getItem("nexus_sfx_enabled");
        if (saved !== null) {
            this.enabled = saved === "true";
        }
        this.bindEvents();
        this.updateToggleButton();
    }

    getAudioContext() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        }
        if (this.audioCtx && this.audioCtx.state === "suspended") {
            this.audioCtx.resume();
        }
        return this.audioCtx;
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem("nexus_sfx_enabled", this.enabled);
        this.updateToggleButton();
        if (this.enabled) {
            this.playClickSFX();
        }
    }

    updateToggleButton() {
        const btn = document.getElementById("nav-sfx-toggle");
        if (btn) {
            btn.innerHTML = this.enabled ? "🔊 SFX ON" : "🔇 SFX OFF";
            btn.classList.toggle("sfx-muted", !this.enabled);
        }
    }

    // High-frequency Cybernetic Hover Tick
    playHoverSFX() {
        if (!this.enabled) return;
        const ctx = this.getAudioContext();
        if (!ctx) return;

        try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(1400, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);

            gain.gain.setValueAtTime(0.015, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.04);
        } catch (e) {}
    }

    // Futuristic Dual-Tone Laser Click
    playClickSFX() {
        if (!this.enabled) return;
        const ctx = this.getAudioContext();
        if (!ctx) return;

        try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.08);

            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } catch (e) {}
    }

    // Ascending Warp Frequency Sweep
    playWarpSFX() {
        if (!this.enabled) return;
        const ctx = this.getAudioContext();
        if (!ctx) return;

        try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.35);

            gain.gain.setValueAtTime(0.03, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.35);
        } catch (e) {}
    }

    // Glorious Achievement Unlock Fanfare
    playTrophySFX() {
        if (!this.enabled) return;
        const ctx = this.getAudioContext();
        if (!ctx) return;

        try {
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = "sine";
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

                gain.gain.setValueAtTime(0.05, ctx.currentTime + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.25);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(ctx.currentTime + idx * 0.08);
                osc.stop(ctx.currentTime + idx * 0.08 + 0.25);
            });
        } catch (e) {}
    }

    bindEvents() {
        document.addEventListener("mouseover", (e) => {
            const target = e.target.closest("button, a, .nav-link, .cert-vault-card, .service-card, .pec-project-card, .skill-card-modern, .filter-tab-btn");
            if (target && !target.dataset.sfxHovered) {
                target.dataset.sfxHovered = "true";
                this.playHoverSFX();
                setTimeout(() => delete target.dataset.sfxHovered, 150);
            }
        });

        document.addEventListener("click", (e) => {
            const target = e.target.closest("button, a, .nav-link, .filter-tab-btn, .service-cta-btn");
            if (target) {
                this.playClickSFX();
            }
        });
    }
}

// Global SFX Instance
window.cyberSFX = null;

function initCyberSFX() {
    if (!window.cyberSFX) {
        window.cyberSFX = new CyberSFXEngine();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCyberSFX);
} else {
    initCyberSFX();
}

function toggleSFXMode() {
    if (!window.cyberSFX) {
        initCyberSFX();
    }
    if (window.cyberSFX) {
        window.cyberSFX.toggle();
    }
}
