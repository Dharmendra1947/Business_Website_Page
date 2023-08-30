const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;

function slideImages() {
    currentIndex = (currentIndex + 1) % images.length;
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(slideImages, 3000); 
// Slide every 3 seconds