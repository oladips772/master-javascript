/** @format */
const maxName = 10;
const error = document.getElementById("error");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const BTN = document.getElementById("BTN");

const checkPassword = () => {
  const passwordValue = passwordInput.value;
  const pText = maxName - passwordValue.length;
  error.innerText = `you have ${pText} characters left`;
};

const togglePassword = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    BTN.innerText = "hide password";
  } else if (passwordInput.type === "text") {
    passwordInput.type = "password";
    BTN.innerText = "show password";
  }
};
