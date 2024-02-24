/* eslint-disable no-return-assign */
/* в этот файл добавляет скрипты*/

import { navStart } from './nav';
import { updateSlider } from './slider';
import { rangeSliderInit } from './range';

navStart ();
updateSlider();

const init = () => {
  rangeSliderInit();
};

window.addEventListener('DOMContentLoaded', init);


