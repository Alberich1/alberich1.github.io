let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showImage(index) {
    images.forEach(img => img.style.display = 'none');
    images[index].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + images.length - 1) % images.length;
    showImage(currentImageIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

showImage(0);