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

            const internshipCount = typeof internshipsData !== "undefined" ? internshipsData.length : 14;
            const projectCount = typeof projectsData !== "undefined" ? projectsData.length : 10;

            const pitchText = `Greetings! Welcome to RASHIL.AI — the official cyber universe of Rashil Kumar Suresh Kumar, an elite 20-year-old Full Stack and Artificial Intelligence Engineer from Panimalar Engineering College. Rashil stands in a tier of his own: featuring ${internshipCount} verified engineering and leadership internships, ${projectCount} production-grade AI and full-stack systems, an extraordinary 100 percent verified attendance record, and a 7.7 CGPA. From building Gemini 2.5 API RAG vector search engines and OWASP security-tested platforms to crafting autonomous 3D web experiences, Rashil delivers production excellence with speed, passion, and precision. Candidate talent of this caliber is truly rare. Explore his portfolio and hire Rashil today!`;

            this.utterance = new SpeechSynthesisUtterance(pitchText);
            this.utterance.rate = 1.02; // Confident, energetic, young adult pacing
            this.utterance.pitch = 0.95; // Natural 20-year-old male pitch tone
            this.utterance.volume = 1.0;

            const voices = this.synth.getVoices();
            if (voices && voices.length > 0) {
                // Priority matching for energetic 20-year-old Male English voices across Windows, Mac, Chrome, Android & iOS
                const preferredVoice = voices.find(v => 
                    v.lang.startsWith("en") && (
                        v.name.includes("Guy") || 
                        v.name.includes("David") || 
                        v.name.includes("Google US English Male") || 
                        v.name.includes("Google UK English Male") || 
                        v.name.includes("Rishi") || 
                        v.name.includes("Alex") || 
                        v.name.includes("Daniel") || 
                        v.name.includes("Mark") || 
                        v.name.includes("George") || 
                        (v.name.includes("Male") && !v.name.includes("Female"))
                    )
                );
                if (preferredVoice) {
                    this.utterance.voice = preferredVoice;
                } else {
                    const anyMale = voices.find(v => v.lang.startsWith("en") && !v.name.toLowerCase().includes("female") && !v.name.toLowerCase().includes("zira") && !v.name.toLowerCase().includes("hazel") && !v.name.toLowerCase().includes("samantha"));
                    if (anyMale) this.utterance.voice = anyMale;
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
