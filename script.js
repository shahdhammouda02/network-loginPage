document.getElementById("loginForm").addEventListener("submit", function (e) {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const message = document.getElementById("message");
  const numberRegex = /^[0-9]+$/;

  // Reset states
  username.classList.remove("error", "success");
  password.classList.remove("error", "success");
  message.className = "message-hidden";

  // Validate username
  if (!username.value) {
    e.preventDefault();
    username.classList.add("error");
    return;
  }

  if (!numberRegex.test(username.value)) {
    e.preventDefault();
    username.classList.add("error");
    return;
  }

  // Validate password
  if (!password.value) {
    e.preventDefault();
    password.classList.add("error");
    return;
  }

  if (!numberRegex.test(password.value)) {
    e.preventDefault();
    password.classList.add("error");
    return;
  }

  e.preventDefault();
  username.classList.add("success");
  password.classList.add("success");

  message.textContent = "Login successful";
  message.className = "message-success";

  setTimeout(() => {
    message.className = "message-hidden";
    username.classList.remove("success");
    password.classList.remove("success");
  }, 3000);
});

document.getElementById("username").addEventListener("input", function () {
  const numberRegex = /^[0-9]*$/;
  if (numberRegex.test(this.value)) {
    this.classList.remove("error");
  } else {
    this.classList.add("error");
  }
});

document.getElementById("password").addEventListener("input", function () {
  const numberRegex = /^[0-9]*$/;
  if (numberRegex.test(this.value)) {
    this.classList.remove("error");
  } else {
    this.classList.add("error");
  }
});
