

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function showNextImage() {
        // Hide the current image
        images[currentIndex].classList.remove("active");

        // Increment index and loop back to the first image if necessary
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images[currentIndex].classList.add("active");
    }

    // Start the carousel
    setInterval(showNextImage, 2000); // Change image every 2 seconds
});
