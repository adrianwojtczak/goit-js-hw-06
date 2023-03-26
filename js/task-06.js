const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = validationInput.getAttribute("data-length");
  const inputValueLength = validationInput.value.length;

  if (inputValueLength === parseInt(requiredLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
