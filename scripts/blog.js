/* global document */
document.addEventListener("DOMContentLoaded", function () {
    var descriptions = document.querySelectorAll('.post-description');
    descriptions.forEach(function (desc) {
        var max = parseInt(desc.dataset.maxlength);
        if (desc.textContent.length > max) {
            desc.textContent = desc.textContent.substring(0, max) + '...';
        }
    });
});