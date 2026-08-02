/* =====================================================
   NEXUS Portfolio - Developer Achievement Trophies & Gamer XP System
   Target Candidate: RASHIL KUMAR SURESH KUMAR
===================================================== */

class DeveloperTrophyEngine {
    constructor() {
        this.xp = 0;
        this.maxXp = 3500;
        this.unlockedTrophies = new Set();

        this.trophies = [
            { id: "t-01", title: "Nexus Voyager", desc: "Arrived at Planet NEXARA (Hero Section)", xp: 500, icon: "🚀" },
            { id: "t-02", title: "Executive Pitch Listener", desc: "Listened to the 30s AI Audio Briefing", xp: 500, icon: "🔊" },
            { id: "t-03", title: "Starlight Explorer", desc: "Launched Interactive 3D Solar System Mode", xp: 750, icon: "🪐" },
            { id: "t-04", title: "AI Recruiter Evaluator", desc: "Interacted with the AI Hiring Assistant", xp: 500, icon: "🤖" },
            { id: "t-05", title: "Credential Vault Auditor", desc: "Inspected the Verified 12-Internship Vault", xp: 500, icon: "🛡️" },
            { id: "t-06", title: "Direct Outreach Protocol", desc: "Submitted an Email Inquiry to Rashil", xp: 750, icon: "⚡" }
        ];

        this.init();
    }

    init() {
        this.createHUDWidget();
        this.setupListeners();
        // Auto unlock t-01 on load
        setTimeout(() => this.unlock("t-01"), 1200);
    }

    createHUDWidget() {
        if (document.getElementById("gamer-xp-hud")) return;

        const hud = document.createElement("div");
        hud.id = "gamer-xp-hud";
        hud.className = "gamer-xp-hud glass-featured";
        hud.innerHTML = `
            <div class="xp-hud-header">
                <div id="xp-rank-badge" class="xp-rank-badge">⭐ LEVEL 1</div>
                <span id="xp-title-text" class="xp-title">RECRUIT NOVICE</span>
            </div>
            <div class="xp-progress-bar-wrap">
                <div id="xp-progress-fill" class="xp-progress-fill" style="width: 0%;"></div>
            </div>
            <div class="xp-hud-footer">
                <span id="xp-counter-text" class="xp-counter-text">0 / 3500 XP</span>
                <span id="trophy-count-text" class="trophy-count-text">0 / 6 TROPHIES</span>
            </div>
        `;
        document.body.appendChild(hud);
    }

    setupListeners() {
        // Observer for vault section
        const journeySec = document.getElementById("journey");
        if (journeySec) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.unlock("t-05");
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(journeySec);
        }

        // Listen for voice pitch click
        const voiceBtn = document.getElementById("hero-voice-pitch-btn");
        if (voiceBtn) {
            voiceBtn.addEventListener("click", () => this.unlock("t-02"));
        }

        // Listen for 3D mode click
        const galaxyBtn = document.getElementById("nav-3d-toggle");
        if (galaxyBtn) {
            galaxyBtn.addEventListener("click", () => this.unlock("t-03"));
        }
    }

    unlock(trophyId) {
        if (this.unlockedTrophies.has(trophyId)) return;

        const trophy = this.trophies.find(t => t.id === trophyId);
        if (!trophy) return;

        this.unlockedTrophies.add(trophyId);
        this.xp = Math.min(this.maxXp, this.xp + trophy.xp);

        if (window.cyberSFX && typeof window.cyberSFX.playTrophySFX === "function") {
            window.cyberSFX.playTrophySFX();
        }

        this.updateHUD();
        this.showToast(trophy);
    }

    calculateLevelAndTitle() {
        if (this.xp >= 3500) {
            return { level: "LEVEL 99", title: "LEGENDARY AI ENGINEER", badgeColor: "#F59E0B" };
        } else if (this.xp >= 2500) {
            return { level: "LEVEL 85", title: "MASTER CREDENTIAL AUDITOR", badgeColor: "#F97316" };
        } else if (this.xp >= 1750) {
            return { level: "LEVEL 60", title: "SENIOR AI ARCHITECT", badgeColor: "#A855F7" };
        } else if (this.xp >= 1000) {
            return { level: "LEVEL 35", title: "FULL STACK APPRENTICE", badgeColor: "#38BDF8" };
        } else if (this.xp >= 500) {
            return { level: "LEVEL 15", title: "JUNIOR AI EXPLORER", badgeColor: "#34D399" };
        } else {
            return { level: "LEVEL 1", title: "RECRUIT NOVICE", badgeColor: "#94A3B8" };
        }
    }

    updateHUD() {
        const fill = document.getElementById("xp-progress-fill");
        const xpText = document.getElementById("xp-counter-text");
        const trophyText = document.getElementById("trophy-count-text");
        const rankBadge = document.getElementById("xp-rank-badge");
        const titleText = document.getElementById("xp-title-text");

        const rankInfo = this.calculateLevelAndTitle();
        if (rankBadge) {
            rankBadge.innerHTML = `⭐ ${rankInfo.level}`;
            rankBadge.style.color = rankInfo.badgeColor;
            rankBadge.style.borderColor = `${rankInfo.badgeColor}60`;
            rankBadge.style.background = `${rankInfo.badgeColor}18`;
        }
        if (titleText) {
            titleText.innerText = rankInfo.title;
            titleText.style.color = rankInfo.badgeColor;
        }

        const percent = Math.min(100, Math.round((this.xp / this.maxXp) * 100));

        if (fill) fill.style.width = `${percent}%`;
        if (xpText) xpText.innerText = `${this.xp} / ${this.maxXp} XP`;
        if (trophyText) trophyText.innerText = `${this.unlockedTrophies.size} / ${this.trophies.length} TROPHIES`;
    }

    showToast(trophy) {
        const toast = document.createElement("div");
        toast.className = "trophy-toast-notification glass-featured";
        toast.innerHTML = `
            <div class="toast-trophy-icon">${trophy.icon}</div>
            <div class="toast-trophy-body">
                <div class="toast-trophy-tag">🏆 ACHIEVEMENT UNLOCKED</div>
                <div class="toast-trophy-title">${trophy.title}</div>
                <div class="toast-trophy-desc">${trophy.desc}</div>
            </div>
            <div class="toast-xp-pill">+${trophy.xp} XP</div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("show");
        }, 50);

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }
}

// Global Trophy Engine Instance
window.developerTrophy = null;

function initDeveloperTrophyEngine() {
    if (!window.developerTrophy) {
        window.developerTrophy = new DeveloperTrophyEngine();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDeveloperTrophyEngine);
} else {
    initDeveloperTrophyEngine();
}
