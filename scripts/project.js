/**
 * project.js
 * Handles interactions specific to the project detail pages (accordions, expand-all toggle, and jump links).
 */
document.addEventListener('DOMContentLoaded', () => {
    const featureBlocks = document.querySelectorAll('.feature-block');
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    const toggleAllBtn = document.getElementById('toggle-all-systems');
    const jumpLinks = document.querySelectorAll('.system-jump-nav a');

    const updateExpandAllButton = () => {
        if (!toggleAllBtn || !featureBlocks.length) return;
        const allOpen = Array.from(featureBlocks).every(block => block.classList.contains('open'));
        toggleAllBtn.innerHTML = allOpen
            ? '<i class="fas fa-compress-alt"></i> Collapse All'
            : '<i class="fas fa-expand-alt"></i> Expand All';
    };

    // 1. Individual Accordion Toggle
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentBlock = header.parentElement;
            const isOpen = currentBlock.classList.toggle('open');

            if (isOpen) {
                setTimeout(() => {
                    currentBlock.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 250);
            }

            updateExpandAllButton();
        });
    });

    // 2. Expand All / Collapse All Toggle
    if (toggleAllBtn) {
        toggleAllBtn.addEventListener('click', () => {
            const allOpen = Array.from(featureBlocks).every(block => block.classList.contains('open'));
            featureBlocks.forEach(block => {
                if (allOpen) {
                    block.classList.remove('open');
                } else {
                    block.classList.add('open');
                }
            });
            updateExpandAllButton();
        });
    }

    // 3. Auto-open Target Block when clicking Quick-Jump Links
    jumpLinks.forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            const targetBlock = document.querySelector(targetId);
            if (targetBlock) {
                e.preventDefault();
                targetBlock.classList.add('open');
                updateExpandAllButton();
                setTimeout(() => {
                    targetBlock.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 150);
            }
        });
    });

    updateExpandAllButton();
});