'use strict';

const dataForm = document.querySelector('.js-form');
const getFullName = document.querySelector('#full_name');
const getJob = document.querySelector('#job');
const getPhone = document.querySelector('#phone');
const getEmail = document.querySelector('#email');
const getLinkedinUser = document.querySelector('#linkedin');
const getGitHubUser = document.querySelector('#github');
const getPhotoUrl = document.querySelector('.js__profile-image');
const getPreview = document.querySelector('.js__profile-preview');
const colorSelected = document.querySelector('.js-palettes');

function getUserData() {
  const FullName = getFullName.value;
  const Job = getJob.value;
  const Phone = getPhone.value;
  const Email = getEmail.value;
  const LinkedinUser = getLinkedinUser.value;
  const GitHubUser = getGitHubUser.value;
  const PhotoUrl = getPhotoUrl.style.backgroundImage;
  const palette = document.querySelector('.form_item:checked').value;

  const data = {
    name: FullName,
    job: Job,
    email: Phone,
    phone: Email,
    linkedin: LinkedinUser,
    github: GitHubUser,
    photoURL: PhotoUrl,
    paletteSelected: palette
  };
  // Guardamos los datos pasados a cadena.
  localStorage.setItem('data', JSON.stringify(data));
}
//Borrar los datos del local storage, se ejecuta con el botón reset.
const resetData = function(){
  localStorage.removeItem('data');
};

//Cuando hay info en localstorage, mantenerla en inputs y card.

const paintData = function(data){
  if (data){
    //Inputs form
    getFullName.value = data.name;
    getJob.value = data.job;
    getPhone.value = data.phone;
    getEmail.value = data.email;
    getLinkedinUser.value = data.linkedin;
    getGitHubUser.value = data.github;
    getPhotoUrl.style.backgroundImage = data.photoURL;
    getPreview.style.backgroundImage = data.photoURL;
    //Paleta
    let palette = parseInt(data.paletteSelected) + 1;
    cardPage.classList.remove('palette1','palette2', 'palette3');
    cardPage.classList.add('palette'+palette);
    if (palette === 1){
      select1.checked = true;
    }
    else if (palette === 2){
      select2.checked = true;
    }
    else {
      select3.checked = true;
    }
    //Card
    data.name === '' ? cardName.innerHTML = defaultInfo.name : cardName.innerHTML = data.name;
    
    data.job === '' ? cardJob.innerHTML = defaultInfo.job : cardJob.innerHTML = data.job;
    data.phone === '' ? document.querySelector('.js-phone').href = '' : document.querySelector('.js-phone').href = data.phone;
    data.email === '' ? document.querySelector('.js-email').href = '' : document.querySelector('.js-email').href = 'mailto:' + data.email;
    data.linkedin === '' ? document.querySelector('.js-linkedin').href = '' : document.querySelector('.js-linkedin').href = 'https://www.linkedin.com/in/' + data.linkedin;
    data.github === '' ? document.querySelector('.js-github').href = '' : document.querySelector('.js-github').href = 'https://github.com/' + data.github;
  }
};

const keepData = function(){
  const data = JSON.parse(localStorage.getItem('data'));
  paintData(data);
};

keepData();

colorSelected.addEventListener('change', getUserData);
dataForm.addEventListener('keyup', getUserData);