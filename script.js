window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#000'; // darker shade when scrolling
  } else {
    navbar.style.backgroundColor = '#333'; // original color
  }
});
