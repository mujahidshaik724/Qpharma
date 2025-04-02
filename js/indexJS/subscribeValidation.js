document.getElementById('subscribe-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
  
    let isValid = true;
  
    // Validate name
    const nameError = document.getElementById('name-error');
    if (!name) {
      nameError.textContent = 'Name is required.';
      nameError.style.display = 'block';
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(name)) {
      nameError.textContent = 'Name should contain only letters.';
      nameError.style.display = 'block';
      isValid = false;
    } else if (name.length < 2 || name.length > 50) {
      nameError.textContent = 'Name should be between 2 and 50 characters.';
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }
  
    // Validate surname
    const surnameError = document.getElementById('surname-error');
    if (!surname) {
      surnameError.textContent = 'Surname is required.';
      surnameError.style.display = 'block';
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(surname)) {
      surnameError.textContent = 'Surname should contain only letters.';
      surnameError.style.display = 'block';
      isValid = false;
    } else if (surname.length < 2 || surname.length > 50) {
      surnameError.textContent = 'Surname should be between 2 and 50 characters.';
      surnameError.style.display = 'block';
      isValid = false;
    } else {
      surnameError.style.display = 'none';
    }
  
    // Validate email
    const emailError = document.getElementById('email-error');
    if (!email) {
      emailError.textContent = 'Email is required.';
      emailError.style.display = 'block';
      isValid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
      isValid = false;
    } else if (!email.endsWith('@example.com')) {
      emailError.textContent = 'Email must end with @example.com.';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // If all validations pass
    if (isValid) {
      alert('Thank you for subscribing!');
      document.getElementById('subscribe-form').reset(); // Reset the form
    }
  });
  
  // Email validation helper function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Convert email input to lowercase automatically
  document.getElementById('email').addEventListener('input', function (event) {
    event.target.value = event.target.value.toLowerCase();
  });
  