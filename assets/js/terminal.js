/* =====================================================
   NEXUS Portfolio - Hero Interactive CLI Terminal
===================================================== */

class TerminalWidget {
    constructor(outputId, inputId) {
        this.output = document.getElementById(outputId);
        this.input = document.getElementById(inputId);
        this.history = [];
        this.historyIndex = -1;

        if (this.input) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const command = this.input.value.trim();
                if (command) {
                    this.execute(command);
                    this.history.push(command);
                    this.historyIndex = this.history.length;
                    this.input.value = "";
                }
            } else if (e.key === "ArrowUp") {
                if (this.history.length > 0 && this.historyIndex > 0) {
                    this.historyIndex--;
                    this.input.value = this.history[this.historyIndex];
                }
            } else if (e.key === "ArrowDown") {
                if (this.historyIndex < this.history.length - 1) {
                    this.historyIndex++;
                    this.input.value = this.history[this.historyIndex];
                } else {
                    this.historyIndex = this.history.length;
                    this.input.value = "";
                }
            }
        });
    }

    execute(cmd) {
        const cleanCmd = cmd.toLowerCase().trim();
        this.appendLine(`<span class="term-prompt">guest@nexus:~$</span> ${escapeHTML(cmd)}`, "user-cmd");

        let response = "";

        switch (cleanCmd) {
            case "help":
                response = `
<span class="term-info">Available Commands:</span>
  <span class="term-cmd">help</span>        - Displays list of commands
  <span class="term-cmd">about</span>       - Developer overview & engineering mindset
  <span class="term-cmd">skills</span>      - AI & MERN tech stack
  <span class="term-cmd">internships</span> - 13 Verified Internship breakdown
  <span class="term-cmd">services</span>    - 100% Best Quality Certificate Services
  <span class="term-cmd">verify</span>      - Verifies HASH#PEC-2026-DA00 credential
  <span class="term-cmd">projects</span>    - Highlighted portfolio projects
  <span class="term-cmd">contact</span>     - Direct contact info & links
  <span class="term-cmd">clear</span>       - Clear terminal screen
  <span class="term-cmd">sudo hire</span>   - Priority engineering inquiry`;
                break;

            case "about":
                response = `<span class="term-highlight">RASHIL KUMAR SURESH KUMAR</span> - AI & MERN Full-Stack Engineer
Panimalar Engineering College (3rd Year B.Tech AI & DS) | 13 Verified Internships | 100% Verified Attendance | 7.7 CGPA`;
                break;

            case "skills":
                response = `<span class="term-info">Production Stack:</span>
  • AI & RAG: Gemini 2.5 API, ChromaDB Vector Store, LangChain, OpenCV, Python
  • Full Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs
  • Security & QA: OWASP Top 10, Android Testing, Manual QA, SHA-256 Hashing`;
                break;

            case "internships":
                response = `<span class="term-info">13 Verified Internships (Recent to Old):</span>
  1. Data Analyst Intern @ Beeskilled (Jul 2026 – Sep 2026)
  2. AIML Engineering Intern @ Hawking Defense Services (Jun 2026)
  3. Online Community Manager @ Hypedin (Dec 2025 – Jun 2026)
  4. Administration Dept Intern @ Renu Sharma Foundation (Dec 2025 – Mar 2026)
  ... and 9 more verified records on Planet CHRONETHIS!`;
                break;

            case "services":
                response = `<span class="term-success">100% Best Quality Certificate Services:</span>
  • Bulk PDF Generation Engine (< 30s for 1000+ PDFs)
  • Tamper-Proof QR Code & Cryptographic Verification
  • Custom HR & College Credential Web Portals`;
                break;

            case "verify":
            case "verify cert":
                response = `<span class="term-success">✔ CRYPTOGRAPHIC AUDIT PASSED:</span>
  Record ID: HASH#PEC-2026-DA00
  Candidate: Rashil Kumar Suresh Kumar
  Role: Data Analyst Intern @ Beeskilled
  Period: Jul 2026 – Sep 2026 | Status: AUTHENTICATED VERIFIED RECORD`;
                break;

            case "projects":
                response = `<span class="term-info">Featured Projects:</span>
  1. <span class="term-highlight">InternHub</span> - Verified Internship Credential Platform
  2. <span class="term-highlight">AI Notes Generator</span> - Gemini RAG Lecture Summarizer
  3. <span class="term-highlight">API Microservices</span> - Secure OWASP Backend Infrastructure`;
                break;

            case "contact":
                response = `<span class="term-info">Contact Information:</span>
  • Email: <a href="mailto:rashidrashil2006@gmail.com" class="term-link">rashidrashil2006@gmail.com</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/rashil-kumar-suresh-kumar" target="_blank" class="term-link">rashil-kumar-suresh-kumar</a>
  • GitHub: <a href="https://github.com/RashilKumar513" target="_blank" class="term-link">RashilKumar513</a>`;
                break;

            case "sudo hire":
            case "sudo hire_rashil":
            case "hire":
                response = `<span class="term-success">✔ ACCESS GRANTED: Priority Engineering Inquiry Initiated.</span>
Redirecting to contact section...`;
                setTimeout(() => {
                    scrollToSection("contact");
                }, 800);
                break;

            case "clear":
                this.output.innerHTML = "";
                return;

            default:
                response = `<span class="term-error">Command not found: '${escapeHTML(cmd)}'. Type '<span class="term-cmd">help</span>' for available options.</span>`;
                break;
        }

        this.appendLine(response, "term-output");
        this.scrollToBottom();
    }

    appendLine(htmlContent, className = "") {
        const div = document.createElement("div");
        div.className = `term-line ${className}`;
        div.innerHTML = htmlContent;
        this.output.appendChild(div);
    }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
}

function switchCodeTab(tabName) {
    const tabCode = document.getElementById("tab-btn-code");
    const tabTerm = document.getElementById("tab-btn-term");
    const viewCode = document.getElementById("view-code-body");
    const viewTerm = document.getElementById("view-term-body");

    if (!tabCode || !tabTerm || !viewCode || !viewTerm) return;

    if (tabName === "term") {
        tabCode.classList.remove("active");
        tabTerm.classList.add("active");
        viewCode.style.display = "none";
        viewTerm.style.display = "flex";
        document.getElementById("term-input")?.focus();
    } else {
        tabTerm.classList.remove("active");
        tabCode.classList.add("active");
        viewTerm.style.display = "none";
        viewCode.style.display = "block";
    }
}

let activeTerminal = null;

function initTerminal() {
    if (document.getElementById("term-output") && document.getElementById("term-input")) {
        activeTerminal = new TerminalWidget("term-output", "term-input");
    }
}
