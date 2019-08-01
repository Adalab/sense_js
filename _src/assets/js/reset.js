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
  //
};
buttonReset.addEventListener('click', resetInfo);