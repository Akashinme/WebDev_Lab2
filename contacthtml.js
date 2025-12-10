
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector("select[name=' langdropdown ']");
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

        // --- FORM VALIDATION ---
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const dropdown = document.getElementById("contactType");
  const inputField = document.getElementById("ddepartment");

  form.addEventListener("submit", function (e) {
    let errors = [];

    const first = document.querySelector("input[name='first']").value.trim();
    const last = document.querySelector("input[name='last']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();
    const contactValue = inputField.value.trim();
    const type = dropdown.value;

    if (first === "") errors.push("First name is required.");
    if (last === "") errors.push("Last name is required.");
    if (message === "") errors.push("Message cannot be empty.");

    if (type === "0" || type === "") {
      errors.push("Please choose a contact type.");
    }

    if (type === "eng") {
      if (!contactValue.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        errors.push("Please enter a valid email.");
      }
    }

    if (type === "spa") {
      if (!contactValue.match(/^[0-9\-\+\s]+$/)) {
        errors.push("Please enter a valid phone number.");
      }
    }

    if (errors.length > 0) {
      e.preventDefault();
      alert("Please fix the following:\n\n" + errors.join("\n"));
    }
  });
});

