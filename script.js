const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
  })

 // Close menu when clicking outside
 document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

  // Close menu when window is resized above mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
    }
  });