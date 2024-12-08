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






let currentTestimonialSlide = 0;

// Function to move the testimonial slide
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


// service cards from service page
// JavaScript to handle "View Details" button click and closing when clicking outside
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        
        const serviceCard = this.closest('.service-card'); // Get the closest parent card
        const detailsSection = serviceCard.querySelector('.service-details'); // Find the details section within this card

        // Toggle the visibility of the service details
        const isVisible = detailsSection.style.display === 'block';
        if (isVisible) {
            detailsSection.style.display = 'none'; // If already visible, hide it
        } else {
            detailsSection.style.display = 'block'; // If not visible, show it
        }
    });
});

// Close the service details if the user clicks outside the card
document.addEventListener('click', function(event) {
    const allServiceCards = document.querySelectorAll('.service-card');
    allServiceCards.forEach(card => {
        const detailsSection = card.querySelector('.service-details');
        if (detailsSection.style.display === 'block' && !card.contains(event.target)) {
            // If details are visible and the click is outside of the card, hide the details
            detailsSection.style.display = 'none';
        }
    });s
});


// modal
// Function to open the modal and show the full image
function viewImage(imageSrc) {
    // Get the modal element and the modal image element
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-img');
    
    // Set the image source of the modal to the clicked image source
    modalImage.src = imageSrc;
    
    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}


