const form = document.getElementById("myForm");
const email = document.getElementById("email").value.trim();
const username = document.getElementById("username").value.trim();
const errorMessage = document.getElementById("errorMessage").value.trim;

form.onsubmit = function (e) {
 if (!email) {
  e.preventDefault();
  errorMessage.textContent = "Email is required!";
 }
};

username.oninput = function () {
 if (username.value.length < 5) {
   username.setCustomValidity("Username must be at least 5 characters.");
 } else {
   username.setCustomValidity("");
 }
};

const toggleButton= document.getElementById("toggleButton");
const extraText = document.getElementById("extraText");

toggleButton.onclick = function () {
 if (extraText.style.display === "none") {
  extraText.style.display = "block";
  toggleButton.textContent = "Hide Text";
} else {
  extraText.style.display = "none";
  button.textContent = "Show Text";
  }
};
