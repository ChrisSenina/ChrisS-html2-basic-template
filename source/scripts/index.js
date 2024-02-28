/* eslint-disable no-return-assign */
/* в этот файл добавляет скрипты*/

import { navStart } from './nav';
import { tabClick } from './nav';
import { updateSlider } from './slider';
import { rangeSliderInit } from './range';

navStart();
tabClick ();
updateSlider();

const init = () => {
  rangeSliderInit();
};

window.addEventListener('DOMContentLoaded', init);

const docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  (el) => {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
