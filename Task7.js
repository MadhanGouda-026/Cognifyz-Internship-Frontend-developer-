const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let valid = true;
  successMsg.textContent = "";

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";

  // Name validation
  if (nameField.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation
  if (!emailField.value.includes("@") || !emailField.value.includes(".")) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Phone validation (must be EXACT 10 digits)
  if (!/^\d{10}$/.test(phoneField.value)) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    valid = false;
  }

  // Message validation
  if (messageField.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  // Final status
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  }
});
