// slidedhow for company.html
const slideshow = document.querySelector('.image-slideshow');
slideshow.addEventListener('mouseenter', () => {
    slideshow.style.animationPlayState = 'paused';
});
slideshow.addEventListener('mouseleave', () => {
    slideshow.style.animationPlayState = 'running';
});
