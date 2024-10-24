document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Reset error messages and borders
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });
    document.querySelectorAll('input, select').forEach(input => {
        input.classList.remove('error-border');
    });

    let isValid = true;

    // Validate First Name (Letters only)
    if (!firstName || !/^[A-Za-z]+$/.test(firstName)) {
        document.getElementById('firstNameError').style.display = 'block';
        document.getElementById('firstName').classList.add('error-border');
        isValid = false;
    } else {
        document.getElementById('firstName').value = capitalize(firstName);
    }

    // Validate Last Name (Letters only)
    if (!lastName || !/^[A-Za-z]+$/.test(lastName)) {
        document.getElementById('lastNameError').style.display = 'block';
        document.getElementById('lastName').classList.add('error-border');
        isValid = false;
    } else {
        document.getElementById('lastName').value = capitalize(lastName);
    }

    // Validate Age (Between 1 and 100)
    if (!age || age < 1 || age > 100) {
        document.getElementById('ageError').style.display = 'block';
        document.getElementById('age').classList.add('error-border');
        isValid = false;
    }

    // Validate Gender
    if (!gender) {
        document.getElementById('genderError').style.display = 'block';
        document.getElementById('gender').classList.add('error-border');
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('error-border');
        isValid = false;
    }

    // Validate Phone Number (10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phone || !phonePattern.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        document.getElementById('phone').classList.add('error-border');
        isValid = false;
    }

    // Validate Password (at least 6 characters)
    if (!password || password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('password').classList.add('error-border');
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        document.getElementById('confirmPassword').classList.add('error-border');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'success.html'; // Redirect after 2 seconds
        }, 2000);
    }
});

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
