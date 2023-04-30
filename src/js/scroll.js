window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let scrollPosition = window.scrollY;
  let headerHeight = window.innerWidth < 768 ? 120 : 70;

  if (scrollPosition >= headerHeight) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});
