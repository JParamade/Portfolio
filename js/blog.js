const descriptions = document.querySelectorAll('.post-description');
descriptions.forEach(desc => {
    const max = parseInt(desc.dataset.maxlength);
    if (desc.textContent.length > max) {
        desc.textContent = desc.textContent.substring(0, max) + '...';
    }
});