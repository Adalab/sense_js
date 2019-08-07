'use strict';

// Variables para el botón de crear tarjeta + link de la tarjeta generada //
const buttonShare = document.querySelector('.share_button_img');
const responseURL = document.querySelector('.completed_content_url');

// Variables del formulario para el userInfo //
const fullName = document.querySelector('#full_name');
const jobTitle = document.querySelector('#job');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');

// Variables para Twitter //
const completedContainer = document.querySelector('.completed_content');
const twitterUrl = document.querySelector('.completed_content_button_twitter');
const tweet = 'https://twitter.com/intent/tweet?text=My awesome profile card: ';

// Función que recoge la información del usuario y llama a la api externa (cards) para que nos genere la tarjeta de visita. //
function writeURL() {
  const userInfo = {
    palette: document.querySelector('.form_item:checked').value,
    name: fullName.value,
    job: jobTitle.value,
    phone: phone.value,
    email: email.value,
    linkedin: linkedin.value,
    github: github.value,
    // eslint-disable-next-line no-undef
    photo: fr.result
  };
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(userInfo => showURL(userInfo))
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
}

// Función showURL //
function showURL(userInfo) {
  if (userInfo.success) {
    responseURL.innerHTML =
      '<a href=' + userInfo.cardURL + '>' + userInfo.cardURL + '</a>';
    twitterUrl.href = tweet + userInfo.cardURL;
    // Eliminamos la clase hidden del contenedor del link de la card + botón de twitter//
    completedContainer.classList.remove('hidden');
  } else {
    responseURL.innerHTML = 'ERROR:' + userInfo.error;
  }
}

// Función para dehabilitar el botón de "crear tarjeta" al pinchar en él (se nos genera el link de la tarjeta) y se le aplique el background gris //
function buttonEnabledDisabled() {
  event.preventDefault();
  buttonShare.classList.add('share_button_disabled');
  buttonShare.setAttribute('disabled', true);
  buttonShare.style.backgroundColor = '#d5d5d5';
  writeURL();
}

// Añadimos evento Listener al hacer click en el botón y nos pinte la función writeURL //
buttonShare.addEventListener('click', writeURL);

// Añadimos evento listener para que al hacer click en el botón se ejecute la función de buttonEnabledDisabled //
buttonShare.addEventListener('click', buttonEnabledDisabled);
