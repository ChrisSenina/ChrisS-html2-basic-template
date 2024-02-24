/* eslint-disable no-return-assign */
/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');

const slider = document.querySelector('.slider');
const sliderList = document.querySelector('.slider__list')
const prevButton = document.querySelector('.slider__button-prev');
const nextButton = document.querySelector('.slider__button-next');
const sliderDots = document.querySelector('slider__dot');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;

let slideIndex = 0;

nav.classList.add('nav--closed');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});


prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();

