/* =====================================================
   RASHIL.AI - Live Custom Tailored Resume Generator Engine
   Target Candidate: RASHIL KUMAR SURESH KUMAR
===================================================== */

class ResumeGeneratorEngine {
    constructor() {
        this.activeFilter = "all";
        this.initUI();
    }

    initUI() {
        if (document.getElementById("resume-generator-modal")) return;

        const modal = document.createElement("div");
        modal.id = "resume-generator-modal";
        modal.style.display = "none";
        modal.style.position = "fixed";
        modal.style.inset = "0";
        modal.style.background = "rgba(4, 7, 17, 0.92)";
        modal.style.backdropFilter = "blur(16px)";
        modal.style.zIndex = "9999999";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.padding = "1.5rem";

        modal.innerHTML = `
            <div class="glass-featured" style="max-width: 850px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2rem; border-radius: 20px; border: 1px solid rgba(56, 189, 248, 0.4); background: #0A101C; box-shadow: 0 0 50px rgba(56, 189, 248, 0.3);">
                
                <!-- HEADER -->
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.5rem;">
                    <div>
                        <span style="font-family: 'Orbitron', sans-serif; font-size: 0.7rem; color: #38BDF8; font-weight: 800; letter-spacing: 0.05em; background: rgba(56, 189, 248, 0.15); padding: 0.2rem 0.6rem; border-radius: 9999px;">
                            📄 LIVE TAILORED RESUME GENERATOR
                        </span>
                        <h2 style="font-family: 'Orbitron', sans-serif; font-size: 1.4rem; color: #FFFFFF; margin-top: 0.4rem;">
                            Customize Rashil's Resume by Role Focus
                        </h2>
                    </div>
                    <button onclick="resumeGenerator.close()" style="color: #94A3B8; background: transparent; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
                </div>

                <!-- ROLE FOCUS TABS -->
                <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                    <button class="filter-tab-btn active" id="res-tab-all" onclick="resumeGenerator.filter('all')">
                        ⭐ Full Profile (All 13 Internships)
                    </button>
                    <button class="filter-tab-btn" id="res-tab-ai" onclick="resumeGenerator.filter('ai')">
                        🤖 AI & ML Engineering Focus
                    </button>
                    <button class="filter-tab-btn" id="res-tab-fullstack" onclick="resumeGenerator.filter('fullstack')">
                        ⚡ Full Stack MERN Focus
                    </button>
                    <button class="filter-tab-btn" id="res-tab-data" onclick="resumeGenerator.filter('data')">
                        📊 Data Analyst Focus
                    </button>
                    <button class="filter-tab-btn" id="res-tab-leadership" onclick="resumeGenerator.filter('leadership')">
                        👥 Leadership & Ops Focus
                    </button>
                </div>

                <!-- LIVE PREVIEW CONTAINER -->
                <div id="resume-preview-box" style="background: #FFFFFF; color: #0F172A; padding: 2rem; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 0.88rem; line-height: 1.5; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    <!-- Dynamic Resume Content Rendered Here -->
                </div>

                <!-- FOOTER ACTIONS -->
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; justify-content: flex-end; flex-wrap: wrap;">
                    <button onclick="window.print()" class="btn-glowing" style="padding: 0.75rem 1.5rem !important; font-size: 0.85rem !important; width: auto !important;">
                        🖨️ PRINT / SAVE AS PDF
                    </button>
                    <button onclick="resumeGenerator.close()" class="project-btn project-btn-demo" style="padding: 0.75rem 1.25rem; font-size: 0.85rem;">
                        CLOSE PREVIEW
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.renderResume();
    }

    open() {
        if (window.cyberSFX) window.cyberSFX.playClickSFX();
        const modal = document.getElementById("resume-generator-modal");
        if (modal) {
            modal.style.display = "flex";
            this.renderResume();
        }
    }

    close() {
        if (window.cyberSFX) window.cyberSFX.playClickSFX();
        const modal = document.getElementById("resume-generator-modal");
        if (modal) modal.style.display = "none";
    }

    filter(cat) {
        if (window.cyberSFX) window.cyberSFX.playClickSFX();
        this.activeFilter = cat;
        
        document.querySelectorAll("[id^='res-tab-']").forEach(btn => btn.classList.remove("active"));
        const activeBtn = document.getElementById(`res-tab-${cat}`);
        if (activeBtn) activeBtn.classList.add("active");

        this.renderResume();
    }

    renderResume() {
        const box = document.getElementById("resume-preview-box");
        if (!box || typeof internshipsData === "undefined") return;

        let filteredItems = internshipsData;
        if (this.activeFilter === "ai") {
            filteredItems = internshipsData.filter(i => i.skills.some(s => s.toLowerCase().includes("ai") || s.toLowerCase().includes("deep") || s.toLowerCase().includes("gemini") || s.toLowerCase().includes("learning")));
        } else if (this.activeFilter === "fullstack") {
            filteredItems = internshipsData.filter(i => i.skills.some(s => s.toLowerCase().includes("mern") || s.toLowerCase().includes("react") || s.toLowerCase().includes("qa") || s.toLowerCase().includes("web") || s.toLowerCase().includes("security")));
        } else if (this.activeFilter === "data") {
            filteredItems = internshipsData.filter(i => i.skills.some(s => s.toLowerCase().includes("data") || s.toLowerCase().includes("python") || s.toLowerCase().includes("sql") || s.toLowerCase().includes("analytics") || s.toLowerCase().includes("quality")));
        } else if (this.activeFilter === "leadership") {
            filteredItems = internshipsData.filter(i => i.category === "leadership");
        }

        box.innerHTML = `
            <div style="border-bottom: 2px solid #2563EB; padding-bottom: 1rem; margin-bottom: 1.2rem;">
                <h1 style="font-size: 1.6rem; font-weight: 900; color: #1E293B; text-transform: uppercase; margin: 0;">RASHIL KUMAR SURESH KUMAR</h1>
                <p style="font-size: 0.95rem; font-weight: 700; color: #2563EB; margin-top: 0.2rem;">
                    AI & MERN Full-Stack Engineer | Panimalar Engineering College (B.Tech AI & DS)
                </p>
                <div style="font-size: 0.8rem; color: #64748B; margin-top: 0.4rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <span>📧 rashidrashil2006@gmail.com</span>
                    <span>🔗 linkedin.com/in/rashil-kumar-suresh-kumar</span>
                    <span>💻 github.com/RashilKumar513</span>
                    <span>📍 Chennai, Tamil Nadu</span>
                </div>
            </div>

            <div style="margin-bottom: 1rem;">
                <h3 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; text-transform: uppercase; border-bottom: 1px solid #CBD5E1; padding-bottom: 0.3rem; margin-bottom: 0.6rem;">
                    SUMMARY & KEY METRICS
                </h3>
                <p style="font-size: 0.85rem; color: #334155; margin: 0;">
                    Versatile engineering candidate with <strong>13 Verified Internships</strong>, <strong>100% Verified Attendance Record</strong>, and a <strong>7.7 CGPA</strong>. Specialized in Gemini API RAG vector applications, React/Node.js web architecture, OWASP security standards, and 100% Best Quality automated certificate generation systems.
                </p>
            </div>

            <div style="margin-bottom: 1rem;">
                <h3 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; text-transform: uppercase; border-bottom: 1px solid #CBD5E1; padding-bottom: 0.3rem; margin-bottom: 0.6rem;">
                    TAILORED EXPERIENCE (${filteredItems.length} RELEVANT ROLES)
                </h3>
                ${filteredItems.map(item => `
                    <div style="margin-bottom: 0.85rem;">
                        <div style="display: flex; justify-content: space-between; font-weight: 700; color: #1E293B; font-size: 0.88rem;">
                            <span>${item.title} — <em>${item.organization}</em></span>
                            <span style="color: #64748B; font-size: 0.8rem;">${item.period}</span>
                        </div>
                        <p style="font-size: 0.82rem; color: #475569; margin: 0.2rem 0;">${item.description}</p>
                        <div style="font-size: 0.78rem; color: #2563EB; font-weight: 600;">
                            Skills: ${item.skills.join(" • ")} | Ref: ${item.hash}
                        </div>
                    </div>
                `).join("")}
            </div>

            <div>
                <h3 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; text-transform: uppercase; border-bottom: 1px solid #CBD5E1; padding-bottom: 0.3rem; margin-bottom: 0.6rem;">
                    EDUCATION & STANDING
                </h3>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #1E293B; font-weight: 700;">
                    <span>B.Tech in Artificial Intelligence & Data Science — Panimalar Engineering College</span>
                    <span>2024 – 2028</span>
                </div>
                <p style="font-size: 0.82rem; color: #475569; margin: 0.2rem 0;">
                    Current CGPA: <strong>7.7 / 10</strong> | Distinction: <strong>100% Attendance Verification Record</strong>
                </p>
            </div>
        `;
    }
}

// Global Instance
window.resumeGenerator = null;

function initResumeGeneratorEngine() {
    if (!window.resumeGenerator) {
        window.resumeGenerator = new ResumeGeneratorEngine();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initResumeGeneratorEngine);
} else {
    initResumeGeneratorEngine();
}
