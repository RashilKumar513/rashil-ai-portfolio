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
  <span class="term-cmd">help</span>       - Displays list of commands
  <span class="term-cmd">about</span>      - Developer overview & engineering mindset
  <span class="term-cmd">skills</span>     - Technical capabilities & stack
  <span class="term-cmd">projects</span>   - Highlighted portfolio projects
  <span class="term-cmd">contact</span>    - Direct contact info & links
  <span class="term-cmd">clear</span>      - Clear terminal screen
  <span class="term-cmd">sudo hire</span>  - Priority engineering inquiry`;
                break;

            case "about":
                response = `<span class="term-highlight">RASHIL KUMAR SURESH KUMAR</span> - Full Stack Developer
Engineering philosophy: Clean architecture, maintainable schemas, and intuitive user experiences using PHP, ASP.NET Core, and JS.`;
                break;

            case "skills":
                response = `<span class="term-info">Core Technologies:</span>
  • Frontend: HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind
  • Backend: PHP, ASP.NET Core, REST APIs
  • Database: MySQL, Relational Schemas, Data Modeling
  • Tools: Git, GitHub, VS Code, XAMPP`;
                break;

            case "projects":
                response = `<span class="term-info">Featured Projects:</span>
  1. <span class="term-highlight">Intern Hub</span> - PHP & MySQL Internship Platform
  2. <span class="term-highlight">NEXUS Engine</span> - Modular Vanilla JS Portfolio Engine
  3. <span class="term-highlight">Task Web API</span> - ASP.NET Core C# Endpoint Architecture`;
                break;

            case "contact":
                response = `<span class="term-info">Contact Information:</span>
  • Email: <a href="mailto:rashidrashil@gmail.com" class="term-link">rashidrashil@gmail.com</a>
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
