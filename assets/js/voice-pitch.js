/* =====================================================
   NEXUS Portfolio - AI Executive Voice Pitch & Audio Briefing
   Target Candidate: RASHIL KUMAR SURESH KUMAR
===================================================== */

class AIVoicePitchEngine {
    constructor() {
        this.isPlaying = false;
        this.synth = window.speechSynthesis || null;
        this.utterance = null;
        this.pitchText = "Greetings! Welcome to the digital universe of Rashil Kumar Suresh Kumar — an elite Full Stack and Artificial Intelligence Engineer from Panimalar Engineering College. Rashil stands in a tier of his own: featuring 12 verified engineering and leadership internships, an extraordinary 100 percent attendance record, and a strong 7.7 B Tech GPA. From building Gemini AI RAG architectures and OWASP security tested systems, to crafting immersive 3D web experiences, Rashil delivers production excellence with passion, speed, and precision. Candidate talent of this caliber is truly rare. Explore his work, and let's hire Rashil today!";
    }

    togglePitch() {
        if (!this.synth) {
            alert("Speech synthesis is not supported in your browser.");
            return;
        }

        if (this.isPlaying) {
            this.pausePitch();
        } else {
            this.playPitch();
        }
    }

    playPitch() {
        try {
            // Cancel any pending speech synthesis
            this.synth.cancel();

            this.utterance = new SpeechSynthesisUtterance(this.pitchText);
            this.utterance.rate = 0.96; // Calm, clear, confident pacing
            this.utterance.pitch = 1.06; // Sweet, warm, welcoming pitch
            this.utterance.volume = 1.0;

            const voices = this.synth.getVoices();
            if (voices && voices.length > 0) {
                // Priority matching for sweet, natural English voices across Windows, Mac, Chrome & iOS
                const preferredVoice = voices.find(v => 
                    v.lang.startsWith("en") && (
                        v.name.includes("Jenny") || 
                        v.name.includes("Google US English") || 
                        v.name.includes("Samantha") || 
                        v.name.includes("Zira") || 
                        v.name.includes("Google UK English Female") || 
                        v.name.includes("Karen") || 
                        v.name.includes("Victoria") || 
                        v.name.includes("Natural") || 
                        v.name.includes("Enhanced")
                    )
                );
                if (preferredVoice) {
                    this.utterance.voice = preferredVoice;
                } else {
                    const anyEnglish = voices.find(v => v.lang.startsWith("en"));
                    if (anyEnglish) this.utterance.voice = anyEnglish;
                }
            }

            this.utterance.onend = () => {
                this.onPlaybackEnd();
            };

            this.utterance.onerror = (e) => {
                console.warn("Speech synthesis error event:", e);
                this.onPlaybackEnd();
            };

            // Speak utterance
            this.synth.speak(this.utterance);
            this.isPlaying = true;
            this.updateUI(true);
        } catch (err) {
            console.error("SpeechSynthesis play error:", err);
            this.onPlaybackEnd();
        }
    }

    pausePitch() {
        if (this.synth) {
            this.synth.cancel();
        }
        this.isPlaying = false;
        this.updateUI(false);
    }

    onPlaybackEnd() {
        this.isPlaying = false;
        this.updateUI(false);
    }

    updateUI(playing) {
        const btn = document.getElementById("hero-voice-pitch-btn");
        const eq = document.getElementById("voice-pitch-equalizer");
        const label = document.getElementById("voice-pitch-btn-label");

        if (btn) {
            if (playing) {
                btn.classList.add("is-playing");
                if (label) label.innerText = "PAUSE AI AUDIO PITCH";
                if (eq) eq.style.display = "flex";
            } else {
                btn.classList.remove("is-playing");
                if (label) label.innerText = "PLAY 30s EXECUTIVE AUDIO PITCH";
                if (eq) eq.style.display = "none";
            }
        }
    }
}

// Global Voice Pitch Engine instance & Helper
window.aiVoicePitch = null;

function initAIVoicePitchEngine() {
    if (!window.aiVoicePitch) {
        window.aiVoicePitch = new AIVoicePitchEngine();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAIVoicePitchEngine);
} else {
    initAIVoicePitchEngine();
}

function toggleVoicePitch() {
    if (!window.aiVoicePitch) {
        initAIVoicePitchEngine();
    }
    if (window.aiVoicePitch) {
        window.aiVoicePitch.togglePitch();
    }
}
