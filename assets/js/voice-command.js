/* =====================================================
   RASHIL.AI - World First Voice-Controlled Portfolio Engine
   Target Candidate: RASHIL KUMAR SURESH KUMAR
===================================================== */

class VoiceNavEngine {
    constructor() {
        this.isListening = false;
        this.recognition = null;
        this.initSpeechRecognition();
        this.initUI();
    }

    initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("Speech Recognition API not supported in this browser.");
            return;
        }

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
            this.isListening = true;
            this.updateBtnState(true);
            this.showVoiceHUD("Listening for voice commands... Speak 'Internships', 'Projects', 'Services', 'Skills', or 'Contact'");
        };

        this.recognition.onresult = (event) => {
            let transcript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            const cleanText = transcript.toLowerCase().trim();
            this.updateVoiceHUDTranscript(cleanText);

            if (event.results[0].isFinal) {
                this.processCommand(cleanText);
            }
        };

        this.recognition.onerror = (e) => {
            console.error("Speech Recognition Error:", e);
            this.isListening = false;
            this.updateBtnState(false);
            this.showVoiceHUD(`Voice Error: ${e.error || 'Mic Permission Needed'}`);
            setTimeout(() => this.hideVoiceHUD(), 3000);
        };

        this.recognition.onend = () => {
            this.isListening = false;
            this.updateBtnState(false);
            setTimeout(() => this.hideVoiceHUD(), 600);
        };
    }

    initUI() {
        // Create HUD Modal Panel if missing
        if (!document.getElementById("cyber-voice-hud")) {
            const hud = document.createElement("div");
            hud.id = "cyber-voice-hud";
            hud.style.display = "none";
            hud.style.position = "fixed";
            hud.style.bottom = "30px";
            hud.style.right = "30px";
            hud.style.zIndex = "9999999";
            hud.style.padding = "1.2rem 1.6rem";
            hud.style.borderRadius = "16px";
            hud.style.background = "rgba(8, 13, 26, 0.95)";
            hud.style.backdropFilter = "blur(16px)";
            hud.style.border = "1px solid rgba(168, 85, 247, 0.5)";
            hud.style.boxShadow = "0 0 35px rgba(168, 85, 247, 0.35)";
            hud.style.fontFamily = "'Orbitron', sans-serif";
            hud.style.maxWidth = "380px";
            hud.style.color = "#FFFFFF";

            hud.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 800; color: #A855F7;">
                        <span class="pulse-dot" style="background: #A855F7;"></span> 🎙️ CYBER VOICE HUD
                    </div>
                    <button onclick="voiceNav.stop()" style="color: #94A3B8; background: transparent; border: none; font-size: 1rem; cursor: pointer;">✕</button>
                </div>
                <div id="voice-hud-msg" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem; color: #CBD5E1; line-height: 1.4;">
                    Listening...
                </div>
                <div id="voice-hud-transcript" style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #38BDF8; margin-top: 0.5rem; min-height: 20px;">
                </div>
            `;
            document.body.appendChild(hud);
        }

        // Attach event to existing nav-voice-btn if present
        const existingBtn = document.getElementById("nav-voice-btn");
        if (existingBtn) {
            existingBtn.onclick = () => this.toggle();
        }
    }

    toggle() {
        if (!this.recognition) {
            alert("Voice Navigation requires Google Chrome or Edge browser microphone support.");
            return;
        }

        if (this.isListening) {
            this.stop();
        } else {
            try {
                this.recognition.start();
            } catch (err) {
                console.error("Start error:", err);
            }
        }
    }

    stop() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
        this.hideVoiceHUD();
    }

    updateBtnState(listening) {
        const btn = document.getElementById("nav-voice-btn");
        if (!btn) return;

        if (listening) {
            btn.classList.add("active-listening");
            btn.innerHTML = `🔴 LISTENING...`;
        } else {
            btn.classList.remove("active-listening");
            btn.innerHTML = `🎙️ VOICE NAV`;
        }
    }

    showVoiceHUD(msg) {
        const hud = document.getElementById("cyber-voice-hud");
        const msgEl = document.getElementById("voice-hud-msg");
        if (hud) hud.style.display = "block";
        if (msgEl) msgEl.innerText = msg;
    }

    updateVoiceHUDTranscript(text) {
        const tr = document.getElementById("voice-hud-transcript");
        if (tr) tr.innerText = text ? `"${text}"` : "";
    }

    hideVoiceHUD() {
        const hud = document.getElementById("cyber-voice-hud");
        if (hud) hud.style.display = "none";
    }

    processCommand(cmd) {
        if (window.cyberSFX && typeof window.cyberSFX.playClickSFX === "function") {
            window.cyberSFX.playClickSFX();
        }

        let feedback = "";
        let targetSection = null;

        if (cmd.includes("internship") || cmd.includes("experience") || cmd.includes("vault") || cmd.includes("journey")) {
            feedback = "Navigating to Planet CHRONETHIS - 14 Verified Internships";
            targetSection = "journey";
        } else if (cmd.includes("project") || cmd.includes("work") || cmd.includes("code") || cmd.includes("creation")) {
            feedback = "Navigating to Planet ARCANEX - 7 Production Projects";
            targetSection = "projects";
        } else if (cmd.includes("service") || cmd.includes("certificate") || cmd.includes("event") || cmd.includes("bulk")) {
            feedback = "Navigating to Planet CREDENX - Certificate and Event Services";
            targetSection = "services";
        } else if (cmd.includes("skill") || cmd.includes("stack") || cmd.includes("python") || cmd.includes("react")) {
            feedback = "Navigating to Planet FORGEVYN - Technical and AI Skill Matrix";
            targetSection = "skills";
        } else if (cmd.includes("education") || cmd.includes("gpa") || cmd.includes("college") || cmd.includes("attendance")) {
            feedback = "Navigating to Planet SCHOLIRA - Academics and 100% Attendance";
            targetSection = "education";
        } else if (cmd.includes("contact") || cmd.includes("hire") || cmd.includes("email") || cmd.includes("reach")) {
            feedback = "Navigating to Planet SIGNALYX - Direct Recruiter Outreach";
            targetSection = "contact";
        } else if (cmd.includes("pitch") || cmd.includes("audio") || cmd.includes("voice")) {
            feedback = "Playing 30 second Executive Audio Pitch";
            if (typeof toggleExecutivePitch === "function") toggleExecutivePitch();
        } else if (cmd.includes("galaxy") || cmd.includes("3d") || cmd.includes("solar")) {
            feedback = "Toggling 3D Solar System Galaxy View";
            if (typeof toggleGalaxy3DMode === "function") toggleGalaxy3DMode();
        } else {
            feedback = `Command recognized: "${cmd}". Try saying 'Internships', 'Projects', or 'Services'.`;
        }

        this.showVoiceHUD(feedback);
        this.speakFeedback(feedback);

        if (targetSection) {
            this.scrollTo(targetSection);
        }

        setTimeout(() => this.hideVoiceHUD(), 1200);
    }

    scrollTo(sectionId) {
        if (typeof scrollToSection === "function") {
            scrollToSection(sectionId);
        } else {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }

    speakFeedback(text) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const synth = new SpeechSynthesisUtterance(text);
        synth.rate = 1.0;
        synth.pitch = 1.05;
        window.speechSynthesis.speak(synth);
    }
}

// Global Instance & Helper
window.voiceNav = null;

function toggleVoiceNav() {
    if (!window.voiceNav) {
        window.voiceNav = new VoiceNavEngine();
    }
    if (window.voiceNav) {
        window.voiceNav.toggle();
    }
}

function initVoiceNavEngine() {
    if (!window.voiceNav) {
        window.voiceNav = new VoiceNavEngine();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVoiceNavEngine);
} else {
    initVoiceNavEngine();
}
