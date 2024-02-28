const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');

nav.classList.add('nav--closed');

function navStart() {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
  });
}

function tabClick() {
  menuButton.addEventListener('keydown', () => {
    nav.classList.toggle('nav--closed');
  });
  menuButton.addEventListener('keyup', () => {
    nav.classList.toggle('nav--opened');
  });
}

export { tabClick };
export { navStart };
