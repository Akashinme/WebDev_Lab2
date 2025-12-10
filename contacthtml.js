
document.addEventListener("DOMContentLoaded", () => {
  
  const dropdown = document.getElementById("contactType");
  const inputField = document.getElementById("ddepartment");
  const form = document.getElementById("contactForm");

  // Change placeholder + type when dropdown changes
  dropdown.addEventListener("change", () => {
    const value = dropdown.value;

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

      default:
        inputField.placeholder = "";
        inputField.type = "text";
        inputField.required = false;
    }
  });

  // Form validation
  form.addEventListener("submit", function (e) {
    let errors = [];

    const first = document.getElementById("first").value.trim();
    const last = document.getElementById("last").value.trim();
    const message = document.getElementById("message").value.trim();
    const type = dropdown.value;
    const contactValue = inputField.value.trim();

    if (first === "") errors.push("First name is required.");
    if (last === "") errors.push("Last name is required.");
    if (message === "") errors.push("Message cannot be empty.");
    if (type === "") errors.push("Please choose a contact type.");

    if (type === "eng" && !contactValue.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      errors.push("Please enter a valid email.");
    }

    if (type === "spa" && !contactValue.match(/^[0-9\-\+\s]+$/)) {
      errors.push("Please enter a valid phone number.");
    }

    if (errors.length > 0) {
      e.preventDefault();
      alert("Please fix the following:\n\n" + errors.join("\n"));
      return false;
    }
  });
});
