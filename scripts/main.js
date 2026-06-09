/**
 * main.js
 * Handles global scripts like mobile navigation and scroll management.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================================
    // 1. MOBILE NAVIGATION TOGGLE
    // ========================================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // ========================================================
    // 2. PREVENT SCROLL CREEP ON PAGE RELOAD
    // ========================================================
    if ('scrollRestoration' in history) {
        // Tells the browser not to auto-restore the scroll position on refresh,
        // which prevents layout-shifting CSS animations from pushing the page down.
        history.scrollRestoration = 'manual';
    }

    // Optional: Force the page to always start at the very top on a fresh reload
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });
    
    // ========================================================
    // 3. BACK TO TOP BUTTON LOGIC
    // ========================================================
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Show button after scrolling down 500px
        if (window.scrollY > 500) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});