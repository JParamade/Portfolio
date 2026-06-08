/**
 * home.js
 * Handles homepage specific interactions like the typewriter effect and parallax scroll.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================================
    // 1. TYPEWRITER EFFECT
    // ========================================================
    const typeWriterElement = document.getElementById('typewriter');
    
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
    // 2. DISAPPEARING SCROLL PROMPT & STATIC HERO TEXT
    // ========================================================
    const scrollPrompt = document.getElementById('scroll-prompt');
    const heroContent = document.querySelector('.hero-content');
    
    if (scrollPrompt || heroContent) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;

            // Handle the bouncing arrow
            if (scrollPrompt) {
                if (scrollPos > 50) {
                    scrollPrompt.classList.add('hidden');
                } else {
                    scrollPrompt.classList.remove('hidden');
                }
            }

            // Handle the Fixed Hero Text Fade-out
            if (heroContent) {
                // Starts at opacity 1, and safely hits opacity 0 by the time the user 
                // has scrolled down 80% of the screen height.
                let opacity = 1 - (scrollPos / (window.innerHeight * 0.8));
                heroContent.style.opacity = Math.max(0, opacity);
            }
        });

        // Optional: Clicking the arrow smoothly scrolls them to the About section
        if (scrollPrompt) {
            scrollPrompt.addEventListener('click', () => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

});