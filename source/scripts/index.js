/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');

nav.classList.add('nav--closed');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});
