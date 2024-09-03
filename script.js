document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const address = document.getElementById('address').value.trim();
    const fileUpload = document.getElementById('fileUpload').files.length;

    let message = '';

    // Validate fullName
    if (fullName === '') {
        message += 'Full Name is required.<br>';
    }

    // Validate email
    if (email === '') {
        message += 'Email ID is required.<br>';
    }

    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {
        message += 'Phone Number must be 10 digits.<br>';
    }

    // Validate pincode
    if (!/^[0-9]{6}$/.test(pincode)) {
        message += 'Pincode must be 6 digits.<br>';
    }

    // Validate address
    if (address === '') {
        message += 'Address is required.<br>';
    }

    // Validate file upload
    if (fileUpload === 0) {
        message += 'Profile Picture upload is required.<br>';
    }

    // Display message or submit form
    if (message === '') {
        document.getElementById('formMessage').innerHTML = 'Form submitted successfully!';
        // Here you can add code to actually submit the form if needed
    } else {
        document.getElementById('formMessage').innerHTML = message;
    }
});
