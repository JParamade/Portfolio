/**
 * home.js
 * Handles homepage specific interactions like the typewriter effect.
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
});