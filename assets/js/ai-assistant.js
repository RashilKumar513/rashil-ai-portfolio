/* =====================================================
   NEXUS Portfolio - Interactive AI Recruiter Assistant Engine
   Target Candidate: RASHIL KUMAR SURESH KUMAR
===================================================== */

const AI_RECRUITER_KNOWLEDGE = {
    whyHire: {
        title: "Why Hire Rashil Kumar Suresh Kumar?",
        badge: "TOP CANDIDATE SUMMARY",
        text: `<strong>Rashil is a rare high-yield candidate combining Full Stack Engineering, AI Integration, and HR Talent Sourcing experience.</strong><br><br>
        • <strong>12 Verified Internships:</strong> Hands-on experience across full-stack development, AI model integration, and leadership.<br>
        • <strong>100% Verified Attendance & 7.7 GPA:</strong> Proven extreme discipline, reliability, and academic consistency at Panimalar Engineering College.<br>
        • <strong>AI + MERN Stack Master:</strong> Expert in Gemini API, RAG vector stores (ChromaDB/Ollama), React, Node.js, Express, and MySQL/MongoDB.<br>
        • <strong>OWASP Security Trained:</strong> Every application is built with clean architecture, input validation, and security best practices.<br>
        • <strong>Cross-Functional Operations:</strong> Practical experience in HR sourcing, talent acquisition, and digital project management.`,
        actions: [
            { label: "View Projects", link: "#projects" },
            { label: "Download Resume", link: "assets/resume.pdf", external: true }
        ]
    },
    internships: {
        title: "12 Verified Internships Breakdown",
        badge: "WORK EXPERIENCE",
        text: `<strong>Rashil has completed 12 internships spanning technical development, AI engineering, QA, and leadership:</strong><br><br>
        • <strong>7 Technical / AI Roles:</strong> AI Engineering, Web Development (MERN), Python Automation, Database Architecture, and Android QA Testing.<br>
        • <strong>5 Leadership & Operations Roles:</strong> Talent Acquisition (HR), Community Management, Strategic Marketing, and Event Coordination.<br>
        • <strong>Recent Role:</strong> Online Community Manager completed June 2025 with stellar feedback.<br>
        • <strong>Proven Work Ethic:</strong> High adaptability across agile dev teams and remote/onsite workflows.`,
        actions: [
            { label: "Explore Experience Timeline", link: "#journey" }
        ]
    },
    education: {
        title: "Academic Standing & Attendance Record",
        badge: "ACADEMICS & DISCIPLINE",
        text: `<strong>Degree:</strong> B.Tech in Artificial Intelligence & Data Science (3rd Year, 2024–2028)<br>
        <strong>Institution:</strong> Panimalar Engineering College, Chennai<br>
        <strong>Current CGPA:</strong> 7.7 / 10<br><br>
        🏅 <strong>Key Distinction — 100% Attendance Record:</strong> Recognized for zero unexcused absences, demonstrating commitment, punctuality, and professional reliability.`,
        actions: [
            { label: "View Education Details", link: "#education" }
        ]
    },
    skills: {
        title: "Technical & AI Skill Matrix",
        badge: "PRODUCTION STACK",
        text: `<strong>Core Stack:</strong><br>
        • <strong>Languages:</strong> Python, JavaScript (ES6+), TypeScript, C/C++, Java, HTML5/CSS3<br>
        • <strong>Web & Backend:</strong> React.js, Node.js, Express.js, MERN Architecture, REST APIs, Tailwind CSS<br>
        • <strong>AI & Machine Learning:</strong> Gemini API v2.5, OpenCV, Computer Vision, TensorFlow, Ollama (RAG / Local Vector Search)<br>
        • <strong>Databases & Security:</strong> MySQL, MongoDB, SQLite, Firebase, ChromaDB, OWASP Security Guidelines<br>
        • <strong>Management & Ops:</strong> Talent Sourcing, HR Screening, Agile Execution, Stakeholder Management`,
        actions: [
            { label: "View All 7 Skill Domains", link: "#skills" }
        ]
    },
    contact: {
        title: "Direct Recruiter Outreach",
        badge: "CONTACT CANDIDATE",
        text: `<strong>Connect directly with Rashil Kumar Suresh Kumar:</strong><br><br>
        📧 <strong>Email:</strong> <a href="mailto:rashidrashil2006@gmail.com" style="color: #60A5FA;">rashidrashil2006@gmail.com</a><br>
        🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/rashil-kumar-suresh-kumar" target="_blank" style="color: #60A5FA;">linkedin.com/in/rashil-kumar-suresh-kumar</a><br>
        💻 <strong>GitHub:</strong> <a href="https://github.com/RashilKumar513" target="_blank" style="color: #60A5FA;">github.com/RashilKumar513</a><br>
        📍 <strong>Location:</strong> Chennai, Tamil Nadu, India`,
        actions: [
            { label: "Send Message Now", link: "#contact" }
        ]
    },
    hr: {
        title: "Administration, Leadership & HR Operations Experience",
        badge: "5 LEADERSHIP & OPS ROLES",
        text: `<strong>Rashil brings proven real-world experience in Operations Management, Student Leadership & Administration:</strong><br><br>
        • 💼 <strong>Administration Department Intern @ Renu Sharma Healthcare & Education Foundation:</strong> Managed daily cross-departmental operations using Google Workspace & MS Office. Organized 500+ administrative files with 98% filing accuracy and improved team collaboration efficiency by 40%.<br>
        • 🌐 <strong>Online Community Manager - Tamil Nadu @ Hypedin (Delhi):</strong> Built and managed active student communities across 5 platforms with 500+ members. Coordinated monthly events for 2,000+ student participants.<br>
        • 📢 <strong>Campus Ambassador & Marketing Executive @ InnoKnowvex, Shiksha Vertex & Xiartz:</strong> Led campus campaigns reaching 5,000+ students across 8 colleges, generated 200+ qualified leads, and executed 6+ workshops.<br>
        • 👥 <strong>5 Leadership & Management Roles:</strong> Combines technical engineering capability with administrative operations, team leadership, and stakeholder communication skills.`,
        actions: [
            { label: "Explore 12-Internship Vault", link: "#journey" },
            { label: "Contact Rashil Directly", link: "#contact" }
        ]
    },
    services: {
        title: "100% Best Quality Certificate Services",
        badge: "ENTERPRISE INFRASTRUCTURE",
        text: `<strong>Rashil provides high-speed automated certificate generation & verification services for esteemed organizations:</strong><br><br>
        • 📜 <strong>Automated Bulk Certificate Generation:</strong> 1,000+ print-ready (300 DPI) PDF certificates generated in < 30s with dynamic CSV data binding.<br>
        • 🛡️ <strong>Tamper-Proof QR & Cryptographic Verification:</strong> Live verification API with unique hash IDs and instant mobile QR validation.<br>
        • 💻 <strong>Custom HR Credential Portals:</strong> Full-Stack MERN dashboards for colleges, hackathons, and corporate teams with attendance/GPA integration.`,
        actions: [
            { label: "Explore Services Planet", link: "#services" },
            { label: "Direct Outreach / Contact", link: "#contact" }
        ]
    },
    srv_bulk: {
        title: "100% Best Quality Bulk Certificate Generation",
        badge: "ENTERPRISE SERVICE",
        text: `<strong>Automated High-Speed PDF Certificate Generation Engine</strong><br><br>
        • <strong>Speed:</strong> Generates 1,000+ vector PDF certificates in under 30 seconds.<br>
        • <strong>Quality:</strong> 100% Crisp 300 DPI print-ready design with custom college/corporate branding.<br>
        • <strong>Automation:</strong> Auto-binds recipient names, dates, course titles, and dispatches directly via email.<br>
        • <strong>Deliverables:</strong> Full Python script / Node.js service + custom HTML/CSS template engine.`,
        actions: [
            { label: "Book Service / Email Rashil", link: "#contact" }
        ]
    },
    srv_verify: {
        title: "Tamper-Proof QR Code & Hash Verification Protocol",
        badge: "SECURITY PROTOCOL",
        text: `<strong>Live Credential Verification Endpoint for HR & Auditors</strong><br><br>
        • <strong>Security:</strong> Generates unique cryptographic hash IDs per certificate.<br>
        • <strong>Mobile Scanner:</strong> Embedded QR codes scan directly to a live verification landing page.<br>
        • <strong>Anti-Forgery:</strong> Digital watermarking prevents PDF manipulation or fake certificates.<br>
        • <strong>Integration:</strong> REST API endpoint compatible with any existing university database.`,
        actions: [
            { label: "Book Service / Email Rashil", link: "#contact" }
        ]
    },
    srv_portal: {
        title: "Custom HR & Institutional Credential Portals",
        badge: "FULL STACK MERN",
        text: `<strong>Bespoke Web Application Portals for Universities & Enterprises</strong><br><br>
        • <strong>Role-Based Access:</strong> Admin dashboards for university deans, event organizers, and student search.<br>
        • <strong>MERN Stack:</strong> Built using React, Node.js, Express, and MongoDB / PostgreSQL.<br>
        • <strong>Analytics & Audit:</strong> Live tracking of issued credentials, attendance records, and GPA badges.`,
        actions: [
            { label: "Book Service / Email Rashil", link: "#contact" }
        ]
    },
    srv_event: {
        title: "End-to-End Event Management & Hackathon Operations",
        badge: "100% BEST QUALITY",
        text: `<strong>Full-Scope Technical & Event Management Services</strong><br><br>
        • <strong>Event Operations:</strong> Comprehensive planning, logistics, and on-site coordination for hackathons, college symposia, and workshops.<br>
        • <strong>Scale:</strong> Proven experience managing 2,000+ attendee events with seamless registration ticketing portals.<br>
        • <strong>Integrated Delivery:</strong> Combines event management with 100% Best Quality automated certificate dispatch and trophy awards.<br>
        • <strong>Tech Operations:</strong> Registration portals, live leaderboard tracking, and stakeholder communication.`,
        actions: [
            { label: "Book Event Management / Email Rashil", link: "#contact" }
        ]
    }
};

class AIRecruiterAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.initUI();
    }

    initUI() {
        const widgetHTML = `
            <div id="ai-assistant-widget" class="ai-assistant-widget">
                <!-- Floating Launcher Button -->
                <button id="ai-assistant-toggle" class="ai-assistant-toggle" aria-label="Open AI Recruiter Assistant" onclick="aiRecruiter.toggle()">
                    <div class="ai-orb-glow"></div>
                    <div class="ai-orb-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                    </div>
                    <span class="ai-status-ping"></span>
                    <span class="ai-toggle-label">ASK RECRUITER AI</span>
                </button>

                <!-- Chat Panel Drawer -->
                <div id="ai-chat-panel" class="ai-chat-panel glass-featured" style="display: none;">
                    <div class="ai-chat-header">
                        <div class="ai-header-info">
                            <div class="ai-avatar-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                            </div>
                            <div>
                                <h3 class="ai-chat-title">AI Recruiter Assistant</h3>
                                <p class="ai-chat-status"><span class="pulse-dot"></span> EVALUATING RASHIL KUMAR</p>
                            </div>
                        </div>
                        <button class="ai-close-btn" onclick="aiRecruiter.toggle()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                        </button>
                    </div>

                    <!-- Chat Log Container -->
                    <div id="ai-chat-log" class="ai-chat-log">
                        <div class="ai-msg ai-msg-bot">
                            <div class="ai-msg-bubble">
                                👋 <strong>Welcome Recruiter!</strong> I am Rashil's AI Candidate Representative.<br><br>
                                I can answer questions about his <strong>12 internships</strong>, <strong>7.7 GPA</strong>, <strong>100% attendance</strong>, <strong>100% Certificate Services</strong>, or <strong>AI/MERN stack</strong>.
                            </div>
                        </div>
                    </div>

                    <!-- Quick Recruiter Prompt Pills -->
                    <div class="ai-prompt-pills">
                        <button class="prompt-pill" onclick="aiRecruiter.ask('whyHire')">💼 Why hire Rashil?</button>
                        <button class="prompt-pill" onclick="aiRecruiter.ask('hr')">👥 HR & Talent Sourcing</button>
                        <button class="prompt-pill" onclick="aiRecruiter.ask('services')">📜 Certificate Services</button>
                        <button class="prompt-pill" onclick="aiRecruiter.ask('internships')">📊 12 Internships</button>
                        <button class="prompt-pill" onclick="aiRecruiter.ask('education')">🎓 Attendance & GPA</button>
                        <button class="prompt-pill" onclick="aiRecruiter.ask('skills')">⚡ AI & Tech Stack</button>
                        <button class="prompt-pill" onclick="aiRecruiter.ask('contact')">📧 Direct Outreach</button>
                    </div>

                    <!-- Input Form -->
                    <form class="ai-chat-form" onsubmit="aiRecruiter.handleUserSubmit(event)">
                        <input type="text" id="ai-user-input" class="ai-input-field" placeholder="Ask custom recruiter question..." autocomplete="off">
                        <button type="submit" class="ai-send-btn" aria-label="Send">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </form>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }

    toggle() {
        this.isOpen = !this.isOpen;
        const widget = document.getElementById("ai-assistant-widget");
        const panel = document.getElementById("ai-chat-panel");
        const toggleBtn = document.getElementById("ai-assistant-toggle");

        if (widget && panel) {
            if (this.isOpen) {
                widget.classList.add("is-open");
                panel.style.display = "flex";
                if (toggleBtn) toggleBtn.style.opacity = "0";
                setTimeout(() => {
                    if (toggleBtn) toggleBtn.style.pointerEvents = "none";
                }, 200);
                const log = document.getElementById("ai-chat-log");
                if (log) log.scrollTop = log.scrollHeight;
            } else {
                widget.classList.remove("is-open");
                panel.style.display = "none";
                if (toggleBtn) {
                    toggleBtn.style.opacity = "1";
                    toggleBtn.style.pointerEvents = "auto";
                }
            }
        }
    }

    ask(key) {
        if (!this.isOpen) {
            this.toggle();
        }
        const data = AI_RECRUITER_KNOWLEDGE[key];
        if (!data) return;

        this.appendUserMsg(this.getLabelForKey(key));
        setTimeout(() => {
            this.appendBotMsg(data);
        }, 300);
    }

    getLabelForKey(key) {
        switch (key) {
            case "whyHire": return "Why should I hire Rashil?";
            case "services": return "What 100% Best Quality Certificate Services does Rashil offer?";
            case "hr": return "What is his experience in HR & Talent Acquisition?";
            case "internships": return "Tell me about his 12 internships.";
            case "education": return "What is his GPA & attendance record?";
            case "skills": return "What is his technical & AI skill stack?";
            case "contact": return "How can I contact Rashil directly?";
            case "srv_bulk": return "Hi Rashil, I want to order your 100% Best Quality Bulk Certificate Generation Engine for my organization.";
            case "srv_verify": return "Hi Rashil, I need your Tamper-Proof QR Code & Cryptographic Verification System for our credentials.";
            case "srv_portal": return "Hi Rashil, we want to build a Custom HR & Institutional Credential Portal with your team.";
            case "srv_event": return "Hi Rashil, I would like to hire your 100% Best Quality Event Management & Hackathon Operations services for our event.";
            default: return "Enterprise Certificate & Event Service Inquiry";
        }
    }

    handleUserSubmit(e) {
        e.preventDefault();
        const input = document.getElementById("ai-user-input");
        if (!input) return;
        const query = input.value.trim();
        if (!query) return;

        input.value = "";
        this.appendUserMsg(query);

        setTimeout(() => {
            const answerData = this.matchQuery(query);
            this.appendBotMsg(answerData);
        }, 400);
    }

    matchQuery(q) {
        const queryLower = q.toLowerCase();

        if (queryLower.includes("hr") || queryLower.includes("human resource") || queryLower.includes("talent") || queryLower.includes("recruit") || queryLower.includes("sourcing") || queryLower.includes("hiring")) {
            return AI_RECRUITER_KNOWLEDGE.hr;
        } else if (queryLower.includes("service") || queryLower.includes("certificate") || queryLower.includes("bulk") || queryLower.includes("qr") || queryLower.includes("credential") || queryLower.includes("pdf")) {
            return AI_RECRUITER_KNOWLEDGE.services;
        } else if (queryLower.includes("hire") || queryLower.includes("why") || queryLower.includes("best")) {
            return AI_RECRUITER_KNOWLEDGE.whyHire;
        } else if (queryLower.includes("intern") || queryLower.includes("work") || queryLower.includes("experience") || queryLower.includes("job")) {
            return AI_RECRUITER_KNOWLEDGE.internships;
        } else if (queryLower.includes("gpa") || queryLower.includes("attendance") || queryLower.includes("college") || queryLower.includes("degree") || queryLower.includes("panimalar")) {
            return AI_RECRUITER_KNOWLEDGE.education;
        } else if (queryLower.includes("skill") || queryLower.includes("python") || queryLower.includes("react") || queryLower.includes("ai") || queryLower.includes("tech") || queryLower.includes("code")) {
            return AI_RECRUITER_KNOWLEDGE.skills;
        } else if (queryLower.includes("contact") || queryLower.includes("email") || queryLower.includes("phone") || queryLower.includes("reach") || queryLower.includes("reach out")) {
            return AI_RECRUITER_KNOWLEDGE.contact;
        } else {
            return {
                title: "Candidate Overview",
                badge: "AI MATCH",
                text: `<strong>Rashil Kumar Suresh Kumar</strong> is a 3rd-year B.Tech AI & DS student at Panimalar Engineering College with <strong>12 verified internships</strong>, a <strong>7.7 GPA</strong>, and <strong>100% verified attendance</strong>.<br><br>
                He specializes in Full Stack MERN development, Gemini API integrations, and RAG vector applications.`,
                actions: [
                    { label: "Why Hire Rashil?", link: "javascript:askAIRecruiter('whyHire')" }
                ]
            };
        }
    }

    appendUserMsg(text) {
        const log = document.getElementById("ai-chat-log");
        if (!log) return;
        const msgHTML = `
            <div class="ai-msg ai-msg-user">
                <div class="ai-msg-bubble">${this.escapeHTML(text)}</div>
            </div>
        `;
        log.insertAdjacentHTML('beforeend', msgHTML);
        log.scrollTop = log.scrollHeight;
    }

    appendBotMsg(data) {
        const log = document.getElementById("ai-chat-log");
        if (!log) return;

        let actionsHTML = "";
        if (data.actions && data.actions.length) {
            actionsHTML = `<div class="ai-msg-actions">` +
                data.actions.map(act => {
                    if (act.link.startsWith("javascript:")) {
                        return `<button onclick="${act.link.replace('javascript:', '')}" class="ai-action-btn">${act.label}</button>`;
                    } else if (act.external) {
                        return `<a href="${act.link}" target="_blank" class="ai-action-btn">${act.label} ↗</a>`;
                    } else {
                        return `<a href="${act.link}" onclick="if(window.aiRecruiter) window.aiRecruiter.toggle()" class="ai-action-btn">${act.label}</a>`;
                    }
                }).join("") +
            `</div>`;
        }

        const msgHTML = `
            <div class="ai-msg ai-msg-bot">
                <div class="ai-msg-bubble">
                    ${data.badge ? `<span class="ai-bot-badge">${data.badge}</span>` : ""}
                    ${data.title ? `<h4 class="ai-bot-title">${data.title}</h4>` : ""}
                    <div class="ai-bot-content">${data.text}</div>
                    ${actionsHTML}
                </div>
            </div>
        `;

        log.insertAdjacentHTML('beforeend', msgHTML);
        log.scrollTop = log.scrollHeight;
    }

    escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
}

// Global instance initialization & helpers
window.aiRecruiter = null;

function initAIRecruiterAssistant() {
    if (!window.aiRecruiter) {
        window.aiRecruiter = new AIRecruiterAssistant();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAIRecruiterAssistant);
} else {
    initAIRecruiterAssistant();
}

function askAIRecruiter(key) {
    if (!window.aiRecruiter) {
        initAIRecruiterAssistant();
    }
    if (window.aiRecruiter) {
        window.aiRecruiter.ask(key);
    }
}
