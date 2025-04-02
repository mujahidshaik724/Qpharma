document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    // Validate Name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Enter a valid email address");
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById("phone");
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        showError(phone, "Enter a valid 10-digit phone number");
        isValid = false;
    }

    // Validate Subject
    const subject = document.getElementById("subject");
    if (subject.value.trim() === "") {
        showError(subject, "Subject is required");
        isValid = false;
    }

    // Validate Resume Upload
    const resume = document.getElementById("resume");
    if (resume.files.length === 0) {
        showError(resume, "Please upload your resume");
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
        showError(message, "Message cannot be empty");
        isValid = false;
    }

    // Submit form if all validations pass
    if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
    }
});

// Function to show error message
function showError(inputElement, message) {
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.color = "red";
}
