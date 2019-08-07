'use strict';

// Variables para el botón de crear tarjeta + link de la tarjeta generada //
const buttonShare = document.querySelector('.share_button_img');
const responseURL = document.querySelector('.completed_content_url');

// variables del formulario para el userInfo //
const fullName = document.querySelector('#full_name');
const jobTitle = document.querySelector('#job');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');

// variables para Twitter //
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
  } else {
    responseURL.innerHTML = 'ERROR:' + userInfo.error;
  }
}

// función de preuba para el botón de crear tarjeta para deshabilitarlo una vez pulsado //
function buttonDisabledEnabled() {
  event.preventDefault();
  buttonShare.classList.add('');
  buttonShare.setAttribute('disabled', true);
  writeURL();
}

// Añadimos evento Listener al hacer click en el botón y nos pinte la función writeURL //
buttonShare.addEventListener('click', writeURL);

// prueba función buttonDisableEnabled //
buttonShare.addEventListener('click', buttonDisabledEnabled);
