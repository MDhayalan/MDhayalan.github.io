document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object to hold the form data
    const formData = new FormData(this);

    // Manually construct the Google Forms entry URL (Replace 'ENTRY_ID' with actual IDs)
    const googleFormURL = 'https://docs.google.com/forms/d/1qI7DhJrzJptjRWfv9k77ImQrE5h8eeAbsy0EFg33dm8/formResponse';
    
    // Convert formData to URL-encoded string
    const formParams = new URLSearchParams();
    formParams.append('entry.2005620554', formData.get('entry.2005620554'));
    formParams.append('entry.1045781291', formData.get('entry.1045781291'));
    formParams.append('entry.1166974658', formData.get('entry.1166974658'));
    formParams.append('entry.839337160', formData.get('entry.839337160'));
    // Add more form fields if necessary

    // Submit the form data using fetch API
    fetch(googleFormURL, {
        method: 'POST',
        body: formParams.toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors', // Required to bypass CORS restrictions
    })
    .then(() => {
        alert('Form submitted successfully!');
        this.reset(); // Optionally reset the form
    })
    .catch(() => {
        alert('There was an error submitting the form.');
    });
});
