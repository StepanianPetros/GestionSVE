const registrationForm = document.getElementById('sec_registrationForm');
const loginForm = document.getElementById('sec_loginForm');
const showLoginButton = document.getElementById('sec_showLogin');
const showRegisterButton = document.getElementById('sec_showRegister');

// Show Login Form
showLoginButton.addEventListener('click', () => {
  registrationForm.classList.add('sec_hidden');
  loginForm.classList.remove('sec_hidden');
});

// Show Registration Form
showRegisterButton.addEventListener('click', () => {
  loginForm.classList.add('sec_hidden');
  registrationForm.classList.remove('sec_hidden');
});

// Form Submissions
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const password = document.getElementById('sec_password').value;
  const confirmPassword = document.getElementById('sec_confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
  } else {
    alert('Registration successful!');
    // Add your registration logic here
  }
});

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('sec_loginEmail').value;
  const password = document.getElementById('sec_loginPassword').value;

  if (!email || !password) {
    alert('Please fill in all fields!');
  } else {
    alert('Log In successful!');
    // Add your login logic here
  }
});



  let lastScrollY = window.scrollY; // Track the last scroll position
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      nav.classList.add('hidden');
    } else {
      // Scrolling up
      nav.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Update the last scroll position
  });

  function registerField(){
    window.location.href = "index.html";
  }