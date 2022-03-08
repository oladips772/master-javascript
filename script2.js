// /** @format */

// const email = document.querySelector("#email");
// const password1 = document.querySelector("#password1");
// const password2 = document.querySelector("#password2");
// const pss1 = document.querySelector(".pss1");
// const pss2 = document.querySelector(".pss2");

// function Onchange() {
//   if (password1.value.trim().length < 10) {
//     pss1.classList.add("active");
//   } else {
//     pss1.classList.remove("active");
//   }
// }

// function Onchange2() {
//   if (password2.value != password1.value) {
//     pss2.classList.add("active");
//   } else {
//     pss2.classList.remove("active");
//   }
// }

// function register() {
//   const hashedPasswords = [
//     window.btoa(password1.value),
//     window.btoa(password2.value),
//   ];

//   const user = [email.value, hashedPasswords];
//   email.value = "";
//   password1.value = "";
//   password2.value = "";
//   console.log(user);
//   localStorage.setItem("new user", user);
// }
