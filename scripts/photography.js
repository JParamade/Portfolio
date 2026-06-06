/**
 * photography.js
 * Handles Masonry Grid filtering and Lightbox interactions (Pure Image & EXIF variants)
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================================
    // 1. GALLERY FILTER LOGIC
    // ========================================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const masonryItems = document.querySelectorAll('.masonry-item');

    // Only run filter logic if filters exist on the current page
    if (filterBtns.length > 0 && masonryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all, add to clicked
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Toggle visibility based on category class
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

    // ========================================================
    // 2. SMART LIGHTBOX LOGIC
    // ========================================================
    const lightbox = document.getElementById('photo-lightbox');
    
    // Only run lightbox logic if a lightbox exists on the current page
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-main-img');
        const closeBtn = document.querySelector('.lightbox-close');

        // Open Lightbox
        masonryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                
                if (img) {
                    lightboxImg.src = img.src;
                    
                    // --- EXIF Metadata Injection (For Real Life Gallery) ---
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
                    document.body.style.overflow = 'hidden'; // Lock background scrolling
                }
            });
        });

        // Close Lightbox function
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
            
            // Clear source after fade-out transition to prevent ghosting
            setTimeout(() => {
                lightboxImg.src = '';
            }, 300);
        };

        // Event Listeners for closing
        closeBtn.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            // Close if clicking the background overlay
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