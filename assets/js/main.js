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

function initApp() {
    window.scrollTo(0, 0);

    // Render all dynamic sections from data files
    if (typeof renderAll === "function") {
        renderAll();
    }

    // Initialize Interactive Ambient Canvas Network
    if (typeof initCanvasBackground === "function") {
        initCanvasBackground();
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
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}