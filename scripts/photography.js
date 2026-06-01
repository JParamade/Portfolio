document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const masonryItems = document.querySelectorAll('.masonry-item');

    if (filterBtns.length > 0 && masonryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                masonryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    const lightbox = document.getElementById('photo-lightbox');
    
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-main-img');
        const lbTitle = document.getElementById('lb-title');
        const lbGame = document.getElementById('lb-game');
        const lbEngine = document.getElementById('lb-engine');
        const lbLens = document.getElementById('lb-lens');
        const lbAperture = document.getElementById('lb-aperture');
        const closeBtn = document.querySelector('.lightbox-close');

        masonryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const metaData = item.querySelector('.photo-meta-data');

                if (img && metaData) {
                    lightboxImg.src = img.src;

                    lbTitle.textContent = metaData.getAttribute('data-title') || 'Untitled';
                    lbGame.textContent = metaData.getAttribute('data-game') || 'Unknown';
                    lbEngine.textContent = metaData.getAttribute('data-engine') || 'Unknown';
                    lbLens.textContent = metaData.getAttribute('data-lens') || 'N/A';
                    lbAperture.textContent = metaData.getAttribute('data-aperture') || 'N/A';

                    lightbox.classList.add('active');
                }
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }
});