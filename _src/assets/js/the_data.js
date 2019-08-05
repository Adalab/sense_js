'use strict';
const dataForm = document.querySelector('.js-form');
const getFullName = document.querySelector('#full_name');
const getJob = document.querySelector('#job');
const getPhone = document.querySelector('#phone');
const getEmail = document.querySelector('#email');
const getLinkedinUser = document.querySelector('#linkedin');
const getGitHubUser = document.querySelector('#github');
const getPhotoUrl = document.querySelector('.js__profile-image');
const colorSelected = document.querySelector('.js-palettes');
let paletteSelected;
let palette;
//crear función para meter datos en el array, con lo del formualrio.

function getColorSelected(ev) {
  paletteSelected = ev.target.value;
  return  palette = paletteSelected;
}
// const getPaletter = document.querySelector('.')
function getUserData() {
  const FullName = getFullName.value;
  const Job = getJob.value;
  const Phone = getPhone.value;
  const Email = getEmail.value;
  const LinkedinUser = getLinkedinUser.value;
  const GitHubUser = getGitHubUser.value;
  const PhotoUrl = getPhotoUrl.style.backgroundImage;

  const data = {
    name: `${FullName}`,
    job: Job,
    email: Phone,
    phone: Email,
    linkedin: LinkedinUser,
    github: GitHubUser,
    photoURL: PhotoUrl,
    thePalette: palette,
  };
  // Guardamos los datos pasados a cadena.
  localStorage.setItem('data', JSON.stringify(data));
  console.log(data);
}


colorSelected.addEventListener('change', getColorSelected);
dataForm.addEventListener('keyup', getUserData);