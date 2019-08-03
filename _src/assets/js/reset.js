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

// const resetInfo = function(ev){
//   ev.preventDefault();
//   //Nombre
//   document.querySelector('.js-name').innerHTML = 'Nombre Apellido';
//   document.getElementById('full_name').value = '';
//   //Puesto
//   document.querySelector('.js-job').innerHTML = 'Front-end developer';
//   document.getElementById('job').value = '';
//   //Foto
//   profileImage.style.backgroundImage = '';
//   profilePreview.style.backgroundImage = '';
//   //Móvil
//   document.querySelector('.js-phone').href = '';
//   document.getElementById('phone').value = '';
//   //Email
//   document.querySelector('.js-email').href = '';
//   document.getElementById('email').value = '';
//   //Likedin
//   document.querySelector('.js-linkedin').href = '';
//   document.getElementById('linkedin').value = '';
//   //Github
//   document.querySelector('.js-github').href = '';
//   document.getElementById('github').value = '';
// };


buttonReset.addEventListener('click', resetInfo);