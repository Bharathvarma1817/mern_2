const form = document.querySelector('form');
const inputs = document.querySelectorAll('input, select, textarea');
const errorMessages = {
  'firstName': 'Please enter your first name',
  'lastName': 'Please enter your last name',
  'email': 'Please enter a valid email address',
  'password': 'Please enter a password',
  'confirmPassword': 'Passwords do not match',
  'gender': 'Please select your gender',
  'age': 'Please enter your age',
  'phoneNumber': 'Please enter a valid phone number',
  'address': 'Please enter your address',
  'state': 'Please select your state',
  'country': 'Please select your country',
  'languagesKnown': 'Please select at least one language'
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  inputs.forEach(input => {
    if (input.type === 'radio' || input.type === 'checkbox') {
      if (!input.checked) {
        isValid = false;
        input.nextElementSibling.textContent = errorMessages[input.name];
      }
    } else if (input.value === '') {
      isValid = false;
      input.nextElementSibling.textContent = errorMessages[input.name];
    } else {
      input.nextElementSibling.textContent = '';
    }
  });

  if (isValid) {
    // Submit the form
    form.submit();
  }
});