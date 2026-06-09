/**
 * project.js
 * Handles interactions specific to the project detail pages (like the deep-dive accordion).
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================================
    // 1. PORTFOLIO DROPDOWN ACCORDION
    // ========================================================
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentBlock = header.parentElement;
            
            // Toggle the clicked block and store whether it is now open
            const isOpen = currentBlock.classList.toggle('open');
            
            // If the block was just opened, smoothly scroll it into view
            if (isOpen) {
                setTimeout(() => {
                    currentBlock.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 300); // Small delay allows the CSS animation to start first
            }
            
            // Close other open blocks automatically 
            
            dropdownHeaders.forEach(otherHeader => {
                const otherBlock = otherHeader.parentElement;
                if (otherBlock !== currentBlock && otherBlock.classList.contains('open')) {
                    otherBlock.classList.remove('open');
                }
            });
            
        });
    });

});