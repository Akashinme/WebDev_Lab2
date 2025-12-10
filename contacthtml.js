document.addEventListener("DOMContentLoaded", () => {
  const dropdown =
    document.querySelector("select[name=' langdropdown ']") ||
    document.getElementById("contactType");

  const inputField = document.getElementById("ddepartment");

  if (!dropdown || !inputField) return;

  dropdown.addEventListener("change", function () {
    const value = this.value;

    switch (value) {
      case "eng":
        inputField.placeholder = "Enter your email";
        inputField.type = "email";
        inputField.required = true;
        break;

      case "spa":
        inputField.placeholder = "Enter your phone number";
        inputField.type = "tel";
        inputField.required = true;
        break;

      case "none":
        inputField.placeholder = "No contact info required";
        inputField.type = "text";
        inputField.value = "";
        inputField.required = false;
        break;
    }
  });
});

function showError(inputElement, message) {
  clearError(inputElement);

  inputElement.classList.add("input-error");

  const msg = document.createElement("div");
  msg.className = "error-message";
  msg.innerText = message;

  inputElement.insertAdjacentElement("afterend", msg);
}

function clearError(inputElement) {
  inputElement.classList.remove("input-error");

  const next = inputElement.nextElementSibling;
  if (next && next.classList.contains("error-message")) {
    next.remove();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  const dropdown = document.getElementById("contactType");
  const contactInfo = document.getElementById("ddepartment");
  const firstName = document.querySelector("input[name='first']");
  const lastName = document.querySelector("input[name='last']");
  const message = document.querySelector("textarea[name='message']");

  form.addEventListener("submit", function (e) {
    let hasErrors = false;

    [firstName, lastName, message, contactInfo, dropdown].forEach(clearError);

    if (firstName.value.trim() === "") {
      showError(firstName, "First name is required.");
      hasErrors = true;
    }

    if (lastName.value.trim() === "") {
      showError(lastName, "Last name is required.");
      hasErrors = true;
    }

    if (message.value.trim() === "") {
      showError(message, "Message cannot be empty.");
      hasErrors = true;
    }

    const type = dropdown.value;
    if (type === "0" || type === "") {
      showError(dropdown, "Please select a contact type.");
      hasErrors = true;
    }

    if (type === "eng") {
      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

      if (!emailRegex.test(contactInfo.value.trim())) {
        showError(contactInfo, "Please enter a valid email.");
        hasErrors = true;
      }
    }
    
    if (type === "spa") {
      const phoneRegex = /^[0-9\-\+\s]+$/;

      if (!phoneRegex.test(contactInfo.value.trim())) {
        showError(contactInfo, "Please enter a valid phone number.");
        hasErrors = true;
      }
    }

    if (hasErrors) {
      e.preventDefault();
    }
  });
});

