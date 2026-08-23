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
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
            this.isListening = true;
            this.updateBtnState(true);
            this.speakFeedback("Listening for voice commands...");
        };

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase().trim();
            console.log("Voice Transcript:", transcript);
            this.processCommand(transcript);
        };

        this.recognition.onerror = (e) => {
            console.error("Speech Recognition Error:", e);
            this.isListening = false;
            this.updateBtnState(false);
        };

        this.recognition.onend = () => {
            this.isListening = false;
            this.updateBtnState(false);
        };
    }

    initUI() {
        // Create Mic Button in Header if navbar exists
        const nav = document.querySelector(".navbar");
        if (!nav || document.getElementById("nav-voice-btn")) return;

        const voiceBtn = document.createElement("button");
        voiceBtn.id = "nav-voice-btn";
        voiceBtn.className = "nav-sfx-toggle";
        voiceBtn.style.borderColor = "rgba(168, 85, 247, 0.5)";
        voiceBtn.style.color = "#A855F7";
        voiceBtn.style.background = "rgba(168, 85, 247, 0.12)";
        voiceBtn.innerHTML = `[ 🎙️ VOICE NAV ]`;
        voiceBtn.onclick = () => this.toggle();

        // Insert before sfx toggle or end
        const sfxBtn = document.getElementById("nav-sfx-toggle");
        if (sfxBtn && sfxBtn.parentNode) {
            sfxBtn.parentNode.insertBefore(voiceBtn, sfxBtn);
        } else {
            nav.appendChild(voiceBtn);
        }
    }

    toggle() {
        if (!this.recognition) {
            alert("Voice Navigation requires Google Chrome or Edge browser.");
            return;
        }

        if (this.isListening) {
            this.recognition.stop();
        } else {
            try {
                this.recognition.start();
            } catch (err) {
                console.error("Start error:", err);
            }
        }
    }

    updateBtnState(listening) {
        const btn = document.getElementById("nav-voice-btn");
        if (!btn) return;

        if (listening) {
            btn.style.color = "#F43F5E";
            btn.style.borderColor = "#F43F5E";
            btn.style.background = "rgba(244, 63, 94, 0.2)";
            btn.innerHTML = `[ 🔴 LISTENING... ]`;
        } else {
            btn.style.color = "#A855F7";
            btn.style.borderColor = "rgba(168, 85, 247, 0.5)";
            btn.style.background = "rgba(168, 85, 247, 0.12)";
            btn.innerHTML = `[ 🎙️ VOICE NAV ]`;
        }
    }

    processCommand(cmd) {
        if (window.cyberSFX) window.cyberSFX.playClickSFX();

        if (cmd.includes("internship") || cmd.includes("experience") || cmd.includes("vault") || cmd.includes("journey")) {
            this.speakFeedback("Navigating to Planet CHRONETHIS - 13 Verified Internships");
            this.scrollTo("journey");
        } else if (cmd.includes("project") || cmd.includes("work") || cmd.includes("code") || cmd.includes("creation")) {
            this.speakFeedback("Navigating to Planet ARCANEX - 7 Production Projects");
            this.scrollTo("projects");
        } else if (cmd.includes("service") || cmd.includes("certificate") || cmd.includes("event") || cmd.includes("bulk")) {
            this.speakFeedback("Navigating to Planet CREDENX - Certificate and Event Services");
            this.scrollTo("services");
        } else if (cmd.includes("skill") || cmd.includes("stack") || cmd.includes("python") || cmd.includes("react")) {
            this.speakFeedback("Navigating to Planet FORGEVYN - Technical and AI Skill Matrix");
            this.scrollTo("skills");
        } else if (cmd.includes("education") || cmd.includes("gpa") || cmd.includes("college") || cmd.includes("attendance")) {
            this.speakFeedback("Navigating to Planet SCHOLIRA - Academics and 100% Attendance");
            this.scrollTo("education");
        } else if (cmd.includes("contact") || cmd.includes("hire") || cmd.includes("email") || cmd.includes("reach")) {
            this.speakFeedback("Navigating to Planet SIGNALYX - Direct Recruiter Outreach");
            this.scrollTo("contact");
        } else if (cmd.includes("pitch") || cmd.includes("audio") || cmd.includes("voice")) {
            this.speakFeedback("Playing 30 second Executive Audio Pitch");
            if (typeof toggleExecutivePitch === "function") toggleExecutivePitch();
        } else if (cmd.includes("galaxy") || cmd.includes("3d") || cmd.includes("solar")) {
            this.speakFeedback("Toggling 3D Solar System Galaxy View");
            if (typeof toggleGalaxy3DMode === "function") toggleGalaxy3DMode();
        } else {
            this.speakFeedback(`Command recognized: ${cmd}. Try asking for internships, projects, or services.`);
        }
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

// Global Instance
window.voiceNav = null;

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
