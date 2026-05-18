// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Active Navigation Link
const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

// Image Slider for Home Page
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

if (slides.length > 0) {
    // Function to change slide
    const changeSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };

    // Next slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        changeSlide(currentSlide);
    };

    // Auto play slider
    let slideInterval = setInterval(nextSlide, 5000);

    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            changeSlide(currentSlide);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
}
