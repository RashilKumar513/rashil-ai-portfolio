/* =====================================================
   NEXUS Portfolio - Main Entry Point (WOW UI)
===================================================== */

// Force browser to disable automatic scroll restoration & reset to top on page refresh
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    console.log("Initializing NEXUS Developer Portfolio v2.0...");

    // Initialize Interactive Ambient Canvas Network
    if (typeof initCanvasBackground === "function") {
        initCanvasBackground();
    }

    // Render all dynamic sections from data files
    if (typeof renderAll === "function") {
        renderAll();
    } else {
        console.error("renderAll function not found. Ensure render.js is loaded.");
    }

    // Initialize Interactive CLI Terminal
    if (typeof initTerminal === "function") {
        initTerminal();
    }

    // Initialize scroll animations and observers
    if (typeof initAnimations === "function") {
        initAnimations();
    }

    // Initialize mobile navigation
    if (typeof initMobileMenu === "function") {
        initMobileMenu();
    }

    console.log("NEXUS Portfolio successfully loaded and rendered with interactive features.");
});