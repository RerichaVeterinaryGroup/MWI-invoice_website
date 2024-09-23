let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;
const visibleSlides = 3; // Number of images visible at once

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slideWidth = slides[0].clientWidth;

    // Move the carousel to display the next set of images
    carousel.style.transform = `translateX(${-slideWidth * index}px)`;
}

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    
    currentIndex++;

    if (currentIndex === totalSlides - visibleSlides + 1) {
        // Disable transition for resetting to start
        carousel.style.transition = 'none';
        currentIndex = 0; // Reset to the first slide
        showSlide(currentIndex);

        // Re-enable transition after resetting
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 20); // Small delay to ensure the transition is re-enabled
    } else {
        showSlide(currentIndex);
    }
}

// Change image every 3 seconds
setInterval(nextSlide, 3000);
