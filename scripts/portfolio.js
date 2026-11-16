/**
 * portfolio.js
 * Handles category filtering on the portfolio index page.
 */
document.addEventListener('DOMContentLoaded', () => {
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectItems = document.querySelectorAll('.project-filter-item');

    if (!filterPills.length || !projectItems.length) return;

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const selectedFilter = pill.getAttribute('data-filter');

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (selectedFilter === 'all' || category === selectedFilter) {
                    item.classList.remove('is-hidden');
                } else {
                    item.classList.add('is-hidden');
                }
            });
        });
    });
});