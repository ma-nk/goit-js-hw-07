const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const loginData = {
    email: login.trim(),
    password: password.trim(),
  };
  console.log(loginData);
  form.reset();
}
