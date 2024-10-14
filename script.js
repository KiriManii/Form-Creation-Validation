document.addEventListener('DOMContentLoaded', () => {
    // Function to handle form validation
    function validateForm(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // Select the form and feedback div
        const form = document.getElementById('registration-form');
        const feedbackDiv = document.getElementById('form-feedback');
        
        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and messages
        let isValid = true;
        const messages = [];

        // Username validation: must be at least 3 characters long
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation: must contain '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation: must be at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback to the user
        feedbackDiv.style.display = 'block'; // Show feedback div
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Success message color
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Show error messages
            feedbackDiv.style.color = '#dc3545'; // Error message color
        }
    }

    // Select the form and add the submit event listener
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', validateForm);
});
