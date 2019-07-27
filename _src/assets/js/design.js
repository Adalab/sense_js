'use strict';

const cardPage = document.querySelector('.card_content');
const select1 = document.querySelector('.js-select1');
const select2 = document.querySelector('.js-select2');
const select3 = document.querySelector('.js-select3');
const changePalette = function (palette) {
  return function () {
    cardPage.classList.remove('palette1','palette2', 'palette3');
    cardPage.classList.add(palette);
  };
};

select1.addEventListener('click', changePalette('palette1'));
select2.addEventListener('click', changePalette('palette2'));
select3.addEventListener('click', changePalette('palette3'));