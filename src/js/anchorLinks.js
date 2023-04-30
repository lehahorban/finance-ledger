const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
}

window.addEventListener('resize', () => {
  headerOffset = document.querySelector('header').offsetHeight;
});

window.addEventListener('load', () => {
  history.replaceState(null, null, ' ');
});
