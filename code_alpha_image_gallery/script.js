const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;
let visibleImages = [];

/* OPEN LIGHTBOX */
function openLightbox(index) {
    visibleImages = Array.from(galleryItems).filter(
        item => item.style.display !== 'none'
    );
    currentIndex = index;
    lightboxImg.src = visibleImages[currentIndex].querySelector('img').src;
    lightbox.style.display = 'flex';
}

/* CLOSE LIGHTBOX */
function closeLightbox() {
    lightbox.style.display = 'none';
}

/* NEXT / PREV */
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = visibleImages.length - 1;
    }
    if (currentIndex >= visibleImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = visibleImages[currentIndex].querySelector('img').src;
}

/* CLICK EVENTS */
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
});

/* FILTER */
function filterImages(category) {
    galleryItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
