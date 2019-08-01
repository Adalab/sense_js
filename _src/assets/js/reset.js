'use strict';

const buttonReset = document.querySelector('.js-reset');


const resetInfo = function(ev){
  ev.preventDefault();
  //Nombre
  document.querySelector('.js-name').innerHTML = 'Nombre Apellido';
  document.getElementById('full_name').value = '';
  //Puesto
  document.querySelector('.js-job').innerHTML = 'Front-end developer';
  document.getElementById('job').value = '';
  //Foto
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';
  //Móvil
  document.querySelector('.js-phone').href = '';
  document.getElementById('phone').value = '';
  //Email
  document.querySelector('.js-email').href = '';
  document.getElementById('email').value = '';
  //Likedin
  document.querySelector('.js-linkedin').href = '';
  document.getElementById('linkedin').value = '';
  //Github
  document.querySelector('.js-github').href = '';
  document.getElementById('github').value = '';
};


buttonReset.addEventListener('click', resetInfo);