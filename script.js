// Initialize EmailJS with your Public Key
emailjs.init('LapjjthlmLXitMch_'); // Replace 'YOUR_PUBLIC_KEY' with your actual Public Key from EmailJS

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic form validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match!";
        return;
    } else {
        passwordError.textContent = "";
    }

    // Prepare email parameters
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
    };

    // Send the email using EmailJS
    emailjs.send('service_x1en2wu', 'template_ove1ye4', templateParams)
        .then(function (response) {
            document.getElementById('successMessage').textContent = 'Registration successful! Confirmation email sent.';
            document.getElementById('successMessage').style.display = 'block';
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            document.getElementById('successMessage').textContent = 'Registration successful! However, the email could not be sent.';
            document.getElementById('successMessage').style.display = 'block';
            console.log('FAILED...', error);
        });
});












