// <!-- JavaScript for Toggle Menu -->
// Function to toggle the menu
function toggleMenu() {
    document.getElementById('navbar-links').classList.toggle('show');
}

// Close the menu if the user clicks outside of it
document.addEventListener('click', function(event) {
    const navbarLinks = document.getElementById('navbar-links');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    
    // Check if the click was outside the navbar or hamburger button
    if (!navbarLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        navbarLinks.classList.remove('show');  // Close the menu
    }
});

// Prevent closing when clicking inside the menu (e.g., on a link)
document.getElementById('navbar-links').addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent the click from propagating to the document
});



// Services Carousel Functions
let serviceSlideIndex = 1;
const serviceSlides = document.querySelectorAll('.services-carousel-item');
const serviceIndicators = document.querySelectorAll('.services-carousel-indicator');

function showServiceSlides() {
    if (serviceSlideIndex > serviceSlides.length) {
        serviceSlideIndex = 1;
    }
    if (serviceSlideIndex < 1) {
        serviceSlideIndex = serviceSlides.length;
    }

    // Move to the current slide
    const serviceSlideContainer = document.querySelector('.services-carousel-slides');
    serviceSlideContainer.style.transform = `translateX(-${(serviceSlideIndex - 1) * 100}%)`;

    // Highlight the active indicator
    serviceIndicators.forEach((indicator, index) => {
        if (index === serviceSlideIndex - 1) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Move to the next or previous service slide
function moveServiceSlide(n) {
    serviceSlideIndex += n;
    showServiceSlides();
}

// Set the current service slide based on the clicked indicator
function currentServiceSlide(n) {
    serviceSlideIndex = n;
    showServiceSlides();
}

// Initialize the Services Carousel
showServiceSlides();



// testimonial section - home page
// Testimonials carousel
let currentTestimonialSlide = 0;

function moveTestimonialSlide() {
    const testimonialContainer = document.querySelector('.testimonials .carousel-container');
    const totalTestimonials = document.querySelectorAll('.testimonials blockquote').length;

    // Update the current slide index
    currentTestimonialSlide++;

    // Loop through slides
    if (currentTestimonialSlide >= totalTestimonials) {
        currentTestimonialSlide = 0;
    }

    testimonialContainer.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
}

// Automatic sliding for testimonials
setInterval(moveTestimonialSlide, 5000); // Change slide every 5 seconds