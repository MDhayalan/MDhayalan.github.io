document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object to hold the form data
    const formData = new FormData(this);

    // Construct the Google Forms submission URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeVW4d4cyAXFG_exgz4r9S610RS4XZEB0-9yin01ha5Vx8umQ/viewform?usp=dialog';


    // Submit the form data using fetch API
    fetch(googleFormURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required to avoid CORS issues
    })
    .then(() => {
        alert('Form submitted successfully!');
        this.reset(); // Optionally reset the form
    })
    .catch(() => {
        alert('There was an error submitting the form.');
    });
});

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
