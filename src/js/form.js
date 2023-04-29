const form = document.querySelector('form');
const name = document.querySelector('.input_name');
const email = document.querySelector('.input_email');
const nameError = document.querySelector('.form_name_error_wrapp');
const emailError = document.querySelector('.form_email_error_wrapp');

const handleSubmit = e => {
  e.preventDefault();
  const trimmedName = name.value.trim();
  const trimmedEmail = email.value.trim();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailRegex.test(trimmedEmail);
  const isNameValid = trimmedName.length >= 3;
  nameError.style.display = !isNameValid ? 'flex' : 'none';
  emailError.style.display = !isEmailValid ? 'flex' : 'none';
  if (isNameValid && isEmailValid) {
    console.log({ name: trimmedName, email: trimmedEmail });
    e.target.reset();
  }
};

form.addEventListener('submit', handleSubmit);
