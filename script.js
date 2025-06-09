document.getElementById('loginForm').addEventListener('submit', function(e) {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const numberRegex = /^[0-9]+$/;
  
  username.classList.remove('error', 'success');
  password.classList.remove('error', 'success');
  
  // Validate username
  if (!username.value) {
    e.preventDefault();
    username.classList.add('error');
    return;
  }
  
  if (!numberRegex.test(username.value)) {
    e.preventDefault();
    username.classList.add('error');
    return;
  }
  
  // Validate password
  if (!password.value) {
    e.preventDefault();
    password.classList.add('error');
    return;
  }
  
  if (!numberRegex.test(password.value)) {
    e.preventDefault();
    password.classList.add('error');
    return;
  }
  
  username.classList.add('success');
  password.classList.add('success');
  
  setTimeout(() => {
    username.classList.remove('success');
    password.classList.remove('success');
  }, 2000);
});

document.getElementById('username').addEventListener('input', function() {
  const numberRegex = /^[0-9]*$/;
  if (numberRegex.test(this.value)) {
    this.classList.remove('error');
  } else {
    this.classList.add('error');
  }
});

document.getElementById('password').addEventListener('input', function() {
  const numberRegex = /^[0-9]*$/;
  if (numberRegex.test(this.value)) {
    this.classList.remove('error');
  } else {
    this.classList.add('error');
  }
});