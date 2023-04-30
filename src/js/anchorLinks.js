const links = document.querySelectorAll('a[href^="#"]');
let headerOffset = document
  .querySelector('header')
  .getBoundingClientRect().height;

for (const link of links) {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    console.log(elementPosition);
    const offsetPosition = elementPosition - headerOffset;

    history.pushState(null, null, targetId);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
}

window.addEventListener('resize', () => {
  headerOffset = document
    .querySelector('header')
    .getBoundingClientRect().height;
});

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

window.addEventListener('load', () => {
  history.replaceState(null, null, ' ');
});
