document.addEventListener('DOMContentLoaded', () => {
    
    // --- Hamburger Menu Logic ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // --- Typewriter Effect Logic ---
    const words = ["Game", "User Interface", "Audio", "Gameplay"];
    const typeWriterElement = document.getElementById('typewriter');
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; 
        } else {
            typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 1500; 
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            typeSpeed = 500; 
        }

        setTimeout(type, typeSpeed);
    }

    // DELAY ADDED HERE: Wait 1.2 seconds before starting to match the CSS fade-in
    setTimeout(type, 1200); 
});