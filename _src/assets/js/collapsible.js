'use strict';
const collapsibleTriggers = document.querySelectorAll('.js-collapsible-trigger');

function updateCollapsible(event) {
  const currentCollapsible = event.currentTarget.parentElement;
  const currentCollapsibleStatus = currentCollapsible.classList.contains('js-collapsible-open');

  for (const item of collapsibleTriggers) {
    item.parentElement.classList.remove('js-collapsible-open');
  }
  if (currentCollapsibleStatus === false) {
    currentCollapsible.classList.add('js-collapsible-open');
  }
}

for (const item of collapsibleTriggers) {
  item.addEventListener('click', updateCollapsible);
}