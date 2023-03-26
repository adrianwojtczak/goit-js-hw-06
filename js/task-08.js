const form = document.querySelector(".login-form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  if (!form.elements.email.value || !form.elements.password.value) {
    alert("Wszystkie pola powinny zostać wypełnione");
  } else {
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    console.log(formData);
    form.reset();
  }
});
