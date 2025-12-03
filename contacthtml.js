
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
    }
  });
});

