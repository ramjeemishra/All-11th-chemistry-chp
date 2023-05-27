const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  navBar.classList.toggle('open');
});
