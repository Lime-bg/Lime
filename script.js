// JavaScript to handle password validation and reveal secret section
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const passwordInput = document.getElementById('password').value;
    const validPassword = 'lime1234'; // Set your secret password here
    const secretSection = document.getElementById('secret-section');
    const errorMessage = document.getElementById('password-error');

    // Check if the entered password matches the valid password
    if (passwordInput === validPassword) {
        secretSection.style.display = 'block';  // Show the secret section
        errorMessage.style.display = 'none';    // Hide the error message
        document.getElementById('password-section').style.display = 'none'; // Hide the password form
    } else {
        errorMessage.style.display = 'block';   // Show the error message
    }
});
