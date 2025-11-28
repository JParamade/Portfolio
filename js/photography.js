/* global document */
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    if (!gallery) return; // Safety check so JS doesn’t break on other pages

    fetch('photos.json')
        .then(res => res.json())
        .then(photos => {
            photos.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.src;
                img.alt = photo.title;
                img.classList.add('photo');
                img.onclick = () => openViewer(photo);
                gallery.appendChild(img);
            });
        });
});

// Opens the modal with metadata
function openViewer(photo) {
    const overlay = document.getElementById('viewer');
    const img = document.getElementById('viewer-img');
    const title = document.getElementById('viewer-title');
    const info = document.getElementById('viewer-info');

    img.src = photo.src;
    title.textContent = photo.title;
    info.innerHTML = `
        <strong>Camera:</strong> ${photo.camera}<br>
        <strong>Lens:</strong> ${photo.lens}<br>
        <strong>Shutter:</strong> ${photo.shutter}<br>
        <strong>ISO:</strong> ${photo.iso}
    `;

    overlay.style.display = "flex";
}