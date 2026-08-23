/* =====================================================
   RASHIL.AI - High-Impact Elaborate Tailored Resume Generator
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
        modal.style.background = "rgba(4, 7, 17, 0.94)";
        modal.style.backdropFilter = "blur(18px)";
        modal.style.zIndex = "9999999";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.padding = "1.5rem";

        modal.innerHTML = `
            <div class="glass-featured" style="max-width: 920px; width: 100%; max-height: 92vh; overflow-y: auto; padding: 2.2rem; border-radius: 22px; border: 1px solid rgba(56, 189, 248, 0.45); background: #080D1A; box-shadow: 0 0 60px rgba(56, 189, 248, 0.35);">
                
                <!-- HEADER -->
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 1.2rem; margin-bottom: 1.5rem;">
                    <div>
                        <span style="font-family: 'Orbitron', sans-serif; font-size: 0.72rem; color: #38BDF8; font-weight: 800; letter-spacing: 0.06em; background: rgba(56, 189, 248, 0.15); padding: 0.25rem 0.7rem; border-radius: 9999px;">
                            📄 EXECUTIVE ELABORATE TAILORED RESUME
                        </span>
                        <h2 style="font-family: 'Orbitron', sans-serif; font-size: 1.5rem; color: #FFFFFF; margin-top: 0.5rem;">
                            Customize Rashil's Resume by Candidate Role Focus
                        </h2>
                    </div>
                    <button onclick="resumeGenerator.close()" style="color: #94A3B8; background: transparent; border: none; font-size: 1.6rem; cursor: pointer;">✕</button>
                </div>

                <!-- ROLE FOCUS TABS -->
                <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.75rem;">
                    <button class="filter-tab-btn active" id="res-tab-all" onclick="resumeGenerator.filter('all')">
                        ⭐ Full Master Resume (13 Verified Internships)
                    </button>
                    <button class="filter-tab-btn" id="res-tab-ai" onclick="resumeGenerator.filter('ai')">
                        🤖 AI, ML & RAG Vector Focus
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
                <div id="resume-preview-box" style="background: #FFFFFF; color: #0F172A; padding: 2.5rem; border-radius: 14px; font-family: 'Inter', sans-serif; font-size: 0.88rem; line-height: 1.55; box-shadow: 0 15px 40px rgba(0,0,0,0.6);">
                    <!-- Dynamic Content -->
                </div>

                <!-- FOOTER ACTIONS -->
                <div style="display: flex; gap: 1rem; margin-top: 1.75rem; justify-content: flex-end; flex-wrap: wrap;">
                    <button onclick="window.print()" class="btn-glowing" style="padding: 0.85rem 1.85rem !important; font-size: 0.88rem !important; width: auto !important;">
                        🖨️ PRINT / EXPORT AS PDF
                    </button>
                    <button onclick="resumeGenerator.close()" class="project-btn project-btn-demo" style="padding: 0.85rem 1.4rem; font-size: 0.88rem;">
                        CLOSE PREVIEW
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.renderResume();
    }

    open() {
        if (window.cyberSFX && typeof window.cyberSFX.playClickSFX === "function") {
            window.cyberSFX.playClickSFX();
        }
        let modal = document.getElementById("resume-generator-modal");
        if (!modal) {
            this.initUI();
            modal = document.getElementById("resume-generator-modal");
        }
        if (modal) {
            modal.style.display = "flex";
            this.renderResume();
        }
    }

    close() {
        if (window.cyberSFX && typeof window.cyberSFX.playClickSFX === "function") {
            window.cyberSFX.playClickSFX();
        }
        const modal = document.getElementById("resume-generator-modal");
        if (modal) modal.style.display = "none";
    }

    filter(cat) {
        if (window.cyberSFX && typeof window.cyberSFX.playClickSFX === "function") {
            window.cyberSFX.playClickSFX();
        }
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
        let roleTitle = "AI & MERN Full-Stack Engineer";
        let summaryText = "High-yield, disciplined 3rd-Year B.Tech Artificial Intelligence & Data Science candidate combining technical engineering mastery with operational leadership. Proven track record across 13 verified internships, achieving 100% verified attendance and a 7.7 CGPA.";
        
        let skillsGridHTML = "";

        if (this.activeFilter === "ai") {
            roleTitle = "AI, Deep Learning & RAG Vector Specialist";
            summaryText = "Specialized AI/ML Candidate with hands-on research and engineering experience building Gemini 2.5 API RAG vector stores, ChromaDB semantic search engines, OpenCV computer vision pipelines, and Hawking Defense drone object detection algorithms.";
            filteredItems = internshipsData.filter(i => i.skills.some(s => s.toLowerCase().includes("ai") || s.toLowerCase().includes("deep") || s.toLowerCase().includes("gemini") || s.toLowerCase().includes("learning") || s.toLowerCase().includes("cloud")));
            
            skillsGridHTML = `
                <div style="background: #EFF6FF; padding: 0.75rem 1rem; border-radius: 8px; border-left: 4px solid #2563EB; grid-column: span 2;">
                    <strong style="color: #1E40AF; font-size: 0.9rem;">🤖 PRIMARY FOCUS: AI, RAG & Deep Learning Engine Architecture</strong>
                    <div style="margin-top: 0.3rem; color: #1E293B;">
                        Gemini 2.5 API, ChromaDB Vector Store, Ollama, LangChain, PyTorch, OpenCV, Computer Vision, Autonomous Drone Object Detection, Vector Embeddings & Cosine Similarity.
                    </div>
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #10B981;">
                    <strong>Supporting Backend:</strong> Python (FastAPI/Flask), Node.js REST Endpoints, Docker Containers.
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #8B5CF6;">
                    <strong>Model Optimization:</strong> Dataset Annotation, Fine-Tuning, Prompt Engineering.
                </div>
            `;
        } else if (this.activeFilter === "fullstack") {
            roleTitle = "MERN Full-Stack & Web Security Specialist";
            summaryText = "Production-grade Full Stack Web Engineer specializing in React.js frontend performance, Node/Express microservices, MongoDB schemas, and OWASP Top 10 security standards. Developer behind 100% Best Quality automated certificate generation systems.";
            filteredItems = internshipsData.filter(i => i.skills.some(s => s.toLowerCase().includes("mern") || s.toLowerCase().includes("react") || s.toLowerCase().includes("qa") || s.toLowerCase().includes("web") || s.toLowerCase().includes("security") || s.toLowerCase().includes("express")));
            
            skillsGridHTML = `
                <div style="background: #ECFDF5; padding: 0.75rem 1rem; border-radius: 8px; border-left: 4px solid #10B981; grid-column: span 2;">
                    <strong style="color: #065F46; font-size: 0.9rem;">⚡ PRIMARY FOCUS: Full-Stack MERN Architecture & Web Security</strong>
                    <div style="margin-top: 0.3rem; color: #1E293B;">
                        React.js (ES6+), Node.js, Express.js, MongoDB Atlas, PostgreSQL, OWASP Top 10 Threat Mitigation, XSS/SQLi Prevention, RESTful Microservices, Tailwind CSS.
                    </div>
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #3B82F6;">
                    <strong>Security & Auth:</strong> SHA-256 Hashing, JWT Tokens, Watermarking APIs.
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #F59E0B;">
                    <strong>Quality & Testing:</strong> Android QA Testing, Lighthouse 95+ Optimization.
                </div>
            `;
        } else if (this.activeFilter === "data") {
            roleTitle = "Data Analyst & Quality Assurance Engineer";
            summaryText = "Analytical Data & Quality Specialist with hands-on experience at Beeskilled (AICTE & MSME Reg.) and Delphi TVS, mastering Python data pipelines, SQL queries, automated report generation, and 5S Lean Quality standards.";
            filteredItems = internshipsData.filter(i => i.skills.some(s => s.toLowerCase().includes("data") || s.toLowerCase().includes("python") || s.toLowerCase().includes("sql") || s.toLowerCase().includes("analytics") || s.toLowerCase().includes("quality") || s.toLowerCase().includes("5s")));
            
            skillsGridHTML = `
                <div style="background: #FEF3C7; padding: 0.75rem 1rem; border-radius: 8px; border-left: 4px solid #F59E0B; grid-column: span 2;">
                    <strong style="color: #92400E; font-size: 0.9rem;">📊 PRIMARY FOCUS: Data Analytics, Python & Quality Control</strong>
                    <div style="margin-top: 0.3rem; color: #1E293B;">
                        Python (Pandas, NumPy, Matplotlib), SQL Relational Databases, Automated CSV/Excel Data Pipelines, 5S Lean Manufacturing & Quality Inspection (Delphi TVS).
                    </div>
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #10B981;">
                    <strong>Business Intelligence:</strong> Automated PDF Certificate Generation, Student Analytics.
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #6366F1;">
                    <strong>QA Testing:</strong> Warehouse Logistics Inspection, Android App Bug Auditing.
                </div>
            `;
        } else if (this.activeFilter === "leadership") {
            roleTitle = "Leadership, HR Talent Sourcing & Event Operations Specialist";
            summaryText = "Proven Student Leader and Event Coordinator with demonstrated expertise managing 2,000+ attendee hackathons, campus community outreach for 500+ members at Hypedin, and administrative HR talent sourcing across 5 verified organizations.";
            filteredItems = internshipsData.filter(i => i.category === "leadership");
            
            skillsGridHTML = `
                <div style="background: #F3E8FF; padding: 0.75rem 1rem; border-radius: 8px; border-left: 4px solid #8B5CF6; grid-column: span 2;">
                    <strong style="color: #5B21B6; font-size: 0.9rem;">👥 PRIMARY FOCUS: Event Operations, HR Sourcing & Leadership</strong>
                    <div style="margin-top: 0.3rem; color: #1E293B;">
                        Hackathon & Event Management (2,000+ Attendees), HR Talent Sourcing, Administrative Logistics (Renu Sharma Foundation), Community Growth (Hypedin 500+ Members).
                    </div>
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #EC4899;">
                    <strong>Communication:</strong> Executive Outreach, Marketing Campaigns, Student Mentorship.
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #14B8A6;">
                    <strong>Operations:</strong> On-Site Logistics, Workspace Filing & Digital Archiving.
                </div>
            `;
        } else {
            // Master Overview (All)
            skillsGridHTML = `
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #2563EB;">
                    <strong>AI & Machine Learning:</strong> Gemini API v2.5, RAG Vector Search (ChromaDB), OpenCV, Computer Vision, Deep Learning (Drone AI).
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #10B981;">
                    <strong>Full-Stack Web Architecture:</strong> React.js, Node.js, Express.js, MongoDB Atlas, REST APIs, Tailwind CSS, Lighthouse 95+.
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #F59E0B;">
                    <strong>Data Analytics & QA:</strong> Python (Pandas/NumPy), SQL, Data Visualization, Android QA Testing, 5S Quality Standards.
                </div>
                <div style="background: #F8FAFC; padding: 0.65rem 0.85rem; border-radius: 6px; border-left: 3px solid #8B5CF6;">
                    <strong>Security & Operations:</strong> OWASP Top 10, SHA-256 Hashing, HR Talent Sourcing, Event Operations (2,000+ Attendees).
                </div>
            `;
        }

        box.innerHTML = `
            <div style="border-bottom: 2.5px solid #2563EB; padding-bottom: 1.2rem; margin-bottom: 1.4rem;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <h1 style="font-size: 1.85rem; font-weight: 900; color: #0F172A; text-transform: uppercase; margin: 0;">RASHIL KUMAR SURESH KUMAR</h1>
                        <p style="font-size: 1rem; font-weight: 800; color: #2563EB; margin-top: 0.25rem;">
                            ${roleTitle} | Panimalar Engineering College (B.Tech AI & DS)
                        </p>
                    </div>
                    <div style="background: #F1F5F9; border: 1px solid #CBD5E1; padding: 0.5rem 0.85rem; border-radius: 8px; font-size: 0.78rem; text-align: right; font-weight: 700; color: #334155;">
                        <div>⭐ <strong>13 Verified Internships</strong></div>
                        <div>🏅 <strong>100% Verified Attendance</strong></div>
                        <div>📊 <strong>7.7 / 10 CGPA</strong></div>
                    </div>
                </div>

                <div style="font-size: 0.82rem; color: #475569; margin-top: 0.6rem; display: flex; gap: 1.25rem; flex-wrap: wrap; font-weight: 600;">
                    <span>📧 rashidrashil2006@gmail.com</span>
                    <span>🔗 linkedin.com/in/rashil-kumar-suresh-kumar</span>
                    <span>💻 github.com/RashilKumar513</span>
                    <span>📍 Chennai, Tamil Nadu, India</span>
                </div>
            </div>

            <div style="margin-bottom: 1.4rem;">
                <h3 style="font-size: 0.98rem; font-weight: 900; color: #0F172A; text-transform: uppercase; border-bottom: 1.5px solid #CBD5E1; padding-bottom: 0.35rem; margin-bottom: 0.65rem;">
                    TAILORED CANDIDATE SUMMARY
                </h3>
                <p style="font-size: 0.86rem; color: #334155; margin: 0; line-height: 1.6;">
                    ${summaryText}
                </p>
            </div>

            <div style="margin-bottom: 1.4rem;">
                <h3 style="font-size: 0.98rem; font-weight: 900; color: #0F172A; text-transform: uppercase; border-bottom: 1.5px solid #CBD5E1; padding-bottom: 0.35rem; margin-bottom: 0.65rem;">
                    TECHNICAL SKILLS & ENGINEERING COMPETENCIES (TAILORED)
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem; font-size: 0.82rem;">
                    ${skillsGridHTML}
                </div>
            </div>

            <div style="margin-bottom: 1.4rem;">
                <h3 style="font-size: 0.98rem; font-weight: 900; color: #0F172A; text-transform: uppercase; border-bottom: 1.5px solid #CBD5E1; padding-bottom: 0.35rem; margin-bottom: 0.85rem;">
                    RELEVANT VERIFIED EXPERIENCE (${filteredItems.length} RELEVANT ROLES)
                </h3>
                ${filteredItems.map(item => `
                    <div style="margin-bottom: 1rem; padding-bottom: 0.85rem; border-bottom: 1px solid #E2E8F0;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; font-weight: 800; color: #0F172A; font-size: 0.9rem;">
                            <span>${item.title} <span style="color: #2563EB;">@ ${item.organization}</span></span>
                            <span style="color: #64748B; font-size: 0.8rem; font-weight: 600;">${item.period} | ${item.location}</span>
                        </div>
                        <p style="font-size: 0.84rem; color: #334155; margin: 0.3rem 0; line-height: 1.5;">${item.description}</p>
                        <div style="font-size: 0.78rem; color: #1E40AF; font-weight: 700;">
                            Skills: ${item.skills.join(" • ")} | <span style="color: #059669;">Verification Hash: ${item.hash} (${item.status})</span>
                        </div>
                    </div>
                `).join("")}
            </div>

            <div>
                <h3 style="font-size: 0.98rem; font-weight: 900; color: #0F172A; text-transform: uppercase; border-bottom: 1.5px solid #CBD5E1; padding-bottom: 0.35rem; margin-bottom: 0.65rem;">
                    ACADEMIC DISTINCTION & ENTERPRISE SERVICES
                </h3>
                <div style="font-size: 0.84rem; color: #334155;">
                    <div style="margin-bottom: 0.4rem;">
                        <strong>Panimalar Engineering College:</strong> B.Tech in AI & Data Science (2024–2028) | CGPA: <strong>7.7 / 10</strong> | Distinction: <strong>100% Verified Attendance Record</strong>.
                    </div>
                    <div>
                        <strong>Enterprise Services Offered:</strong> Automated 300 DPI Bulk PDF Generation (<30s for 1000+ certificates), Tamper-Proof QR & SHA-256 Hash Protocol, Custom MERN HR Portals, and End-to-End Event Management.
                    </div>
                </div>
            </div>
        `;
    }
}

// Global Instance & Helper
window.resumeGenerator = null;

function openCustomResume() {
    if (!window.resumeGenerator) {
        window.resumeGenerator = new ResumeGeneratorEngine();
    }
    if (window.resumeGenerator) {
        window.resumeGenerator.open();
    }
}

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
