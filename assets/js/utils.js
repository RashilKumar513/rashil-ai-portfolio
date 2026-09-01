/* =====================================================
   NEXUS Portfolio - Utility Helpers (Offset Scroll & Tab Control)
===================================================== */

/**
 * Get single element by ID
 */
function getElement(id) {
    return document.getElementById(id);
}

/**
 * Smooth scroll to element by ID with sticky header clearance offset
 */
function scrollToSection(id) {
    if (id === "hero" || id === "nexara") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 80; // Fixed header clearance height
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
    });
}

/**
 * Re-initialize Lucide icons dynamically rendered into the DOM
 */
function refreshIcons() {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
    }
}

/**
 * Tab switcher for Hero Interactive Code Window
 */
function switchCodeTab(tab) {
    const codeBody = document.getElementById("view-code-body");
    const termBody = document.getElementById("view-term-body");
    const codeBtn = document.getElementById("tab-btn-code");
    const termBtn = document.getElementById("tab-btn-term");

    if (tab === "code") {
        if (codeBody) codeBody.style.display = "flex";
        if (termBody) termBody.style.display = "none";
        if (codeBtn) codeBtn.classList.add("active");
        if (termBtn) termBtn.classList.remove("active");
    } else {
        if (codeBody) codeBody.style.display = "none";
        if (termBody) termBody.style.display = "flex";
        if (termBtn) termBtn.classList.add("active");
        if (codeBtn) codeBtn.classList.remove("active");
        
        // Focus terminal input
        const termInput = document.getElementById("term-input");
        if (termInput) termInput.focus();
    }
}

/**
 * Basic HTML escaping helper to prevent XSS in dynamic templates
 */
function escapeHTML(str) {
    if (typeof str !== "string") return str;
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}