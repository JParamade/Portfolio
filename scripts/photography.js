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
        const closeBtn = document.querySelector('.lightbox-close');

        masonryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                
                if (img) {
                    lightboxImg.src = img.src;
                    
                    const sidebar = document.querySelector('.lightbox-sidebar');
                    const metaData = item.querySelector('.photo-meta-data');
                    
                    if (sidebar && metaData) {
                        document.getElementById('lb-camera').textContent = metaData.getAttribute('data-camera') || 'Unknown';
                        document.getElementById('lb-lens').textContent = metaData.getAttribute('data-lens') || 'Unknown';
                        document.getElementById('lb-aperture').textContent = metaData.getAttribute('data-aperture') || 'Unknown';
                        document.getElementById('lb-shutter').textContent = metaData.getAttribute('data-shutter') || 'Unknown';
                        document.getElementById('lb-iso').textContent = metaData.getAttribute('data-iso') || 'Unknown';
                    }
                    
                    lightbox.classList.add('active');
                    
                    document.body.style.overflow = 'hidden'; 
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            
            document.body.style.overflow = 'auto'; 
            
            setTimeout(() => {
                lightboxImg.src = '';
            }, 300);
        };

        closeBtn.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || 
                e.target.classList.contains('pure-image-content') || 
                e.target.classList.contains('lightbox-img-wrapper')) {
                closeLightbox();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});