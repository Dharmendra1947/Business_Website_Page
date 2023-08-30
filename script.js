// Add this JavaScript to stop the animation during hover
const slideshow = document.querySelector('.image-slideshow');
slideshow.addEventListener('mouseenter', () => {
    slideshow.style.animationPlayState = 'paused';
});
slideshow.addEventListener('mouseleave', () => {
    slideshow.style.animationPlayState = 'running';
});
