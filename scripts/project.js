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
            
            // Toggle the clicked block
            currentBlock.classList.toggle('open');
            
            // Close other open blocks automatically 
            /*
            dropdownHeaders.forEach(otherHeader => {
                const otherBlock = otherHeader.parentElement;
                if (otherBlock !== currentBlock && otherBlock.classList.contains('open')) {
                    otherBlock.classList.remove('open');
                }
            });
            */
        });
    });

});