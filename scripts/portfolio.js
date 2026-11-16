/**
 * portfolio.js
 * Handles category filtering and automatically promotes the first visible card to the featured layout.
 */
document.addEventListener('DOMContentLoaded', () => {
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectItems = Array.from(document.querySelectorAll('.project-filter-item'));

    if (!filterPills.length || !projectItems.length) return;

    const applyFilter = selectedFilter => {
        let firstVisibleAssigned = false;

        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            const isVisible = selectedFilter === 'all' || category === selectedFilter;

            item.classList.toggle('is-hidden', !isVisible);
            item.classList.remove('is-featured');

            if (isVisible && !firstVisibleAssigned) {
                item.classList.add('is-featured');
                firstVisibleAssigned = true;
            }
        });
    };

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            applyFilter(pill.getAttribute('data-filter'));
        });
    });

    // Ensure initial load promotes the first visible item
    applyFilter('all');
});