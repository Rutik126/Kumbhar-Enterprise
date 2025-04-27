//Nav Bar
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Form Submission
(function() {
  emailjs.init("z6l5xsL1vaTRgzGUh");
})();

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Invalid email format. Please enter a valid email address.");
    return; // Exit if email is invalid
  }

  emailjs.sendForm('service_o8l6goj', 'template_nba4vri', this)
    .then(() => {
      alert('✅ Message sent successfully!');
      form.reset();
    }, (error) => {
      console.error('Failed to send message:', error);
      alert('❌ Failed to send message. Check Console.');
    });
});



