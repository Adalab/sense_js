/* eslint-disable no-lonely-if */
'use strict';

const changeText = function(ev) {
  const inputElement = ev.target;
  const className = inputElement.classList[0];
  const destElement = document.querySelector('.js-card .' + className);
  if (destElement === null) {
    return;
  }

  const prefix = destElement.dataset.prefix || '';
  const inputValue = ev.target.value || '';
  const value = inputValue ? prefix + inputValue : '';

  if (destElement.tagName === 'A') {
    if (value === '') {
      destElement.href = destElement.dataset.placeholder || '';
    } else {
      destElement.href = value;
    }
  } else {
    if (value === '') {
      destElement.innerHTML = destElement.dataset.placeholder || '';
    } else {
      destElement.innerHTML = value;
    }
  }
};

const container = document.querySelector('.fill-in_items');
container.addEventListener('keyup', changeText);
