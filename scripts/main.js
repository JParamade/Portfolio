/**
 * main.js
 * Handles mobile navigation toggle and the homepage typewriter effect.
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
    // 2. TYPEWRITER EFFECT (Homepage Only)
    // ========================================================
    const typeWriterElement = document.getElementById('typewriter');
    
    // SAFETY CHECK: Only run this script if we are on a page that actually has the typewriter ID!
    // Without this, the script will throw a Null Reference Error on the Blog/Portfolio pages.
    if (typeWriterElement) {
        const words = ["Game", "UI", "Audio", "Gameplay"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Remove a character
                typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; 
            } else {
                // Add a character
                typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            // Word is complete, wait before deleting
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 1500; 
            } 
            // Word is fully deleted, move to the next word
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; 
                typeSpeed = 500; 
            }

            setTimeout(type, typeSpeed);
        }

        // Start the effect after a brief delay so the entrance animations can finish
        setTimeout(type, 1200); 
    }
    
    // ========================================================
    // 3. PREVENT SCROLL CREEP ON PAGE RELOAD
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
});