const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
