const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const websiteInput = document.querySelector('#website');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  if (nameInput.value.trim() === '') {
    alert('Name is required!');
    isValid = false;
  }

  if (emailInput.value.trim() === '') {
    alert('Email is required!');
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email!');
    isValid = false;
  }

  if (websiteInput.value.trim() === '') {
    alert('Website is required!');
    isValid = false;
  } else if (!validateUrl(websiteInput.value)) {
    alert('Please enter a valid website!');
    isValid = false;
  }

  if (messageInput.value.trim() === '') {
    alert('Message is required!');
    isValid = false;
  }

  if (isValid) {
    // Submit the form or do whatever you need to do
    console.log('Form submitted successfully!');
  }
});

function validateEmail(email) {
  // Regular expression for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateUrl(url) {
  // Regular expression for URL validation
  const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'()*+,;=.]+$/;
  return re.test(url);
}