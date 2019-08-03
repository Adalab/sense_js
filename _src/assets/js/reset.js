'use strict';

const buttonReset = document.querySelector('.js-reset');
const fillInInputs = document.querySelectorAll('.fill-in_input');
const cardIcons = document.querySelectorAll('.card_link');
const cardName = document.querySelector('.card_name');
const cardJob = document.querySelector('.card_job');

const defaultInfo = {
  palette: 1,
  name: 'nombre apellido',
  job: 'Front-end developer',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

const resetInfo = function(ev){
  ev.preventDefault();
  //Imputs del form
  for (const input of fillInInputs){
    input.value = '';
  }
  //Iconos card
  for (const icon of cardIcons){
    icon.href = '';
  }
  //Foto (consts definidas de interactive-photo.js)
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';
  //Nombre y puesto - card
  cardName.innerHTML = defaultInfo.name;
  cardJob.innerHTML = defaultInfo.job;
  //Paleta (consts definidas en design.js)
  select1.checked = true;
  select2.checked = false;
  select3.checked = false;
  cardPage.classList.remove('palette1','palette2', 'palette3');
  cardPage.classList.add('palette1');
};

buttonReset.addEventListener('click', resetInfo);