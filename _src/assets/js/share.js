/* eslint-disable no-unused-vars */
/* eslint-disable curly */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable strict */

// definimos variables//
const buttonShare = document.querySelector('.share_button_img');
//const responseURL = document.querySelector('.response');
const fullName = document.querySelector('#full_name');
const jobTitle = document.querySelector('#job');
const fileInput = document.querySelector('#img-profile');
let imageToSave = '';
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');
/*const devImage = document.querySelector('.share__created--link');
const shareTwitter = document.querySelector ('.twitter');

var fillItems = document.querySelector('.fill-in_items');
var fr = new FileReader();*/
function getUserInfo() {

    const userInfo = {
        palette: document.querySelector('.form_item:checked').value,
        name: fullName.value,
        job: jobTitle.value,
        phone: phone.value,
        email: email.value,
        linkedin: linkedin.value,
        github: github.value,
        photo: imageToSave,
    }

    const userInfostr = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', userInfostr);
    return userInfostr;
}

// definimos variable que va a ser una función para mandar una petición a la api (fetch) dónde le pasamos la información del usuario //
const handlerButtonShare = () => sendRequest(getUserInfo);

// Añadimos evento Listener al hacer click en el botón //
buttonShare.addEventListener('click', handlerButtonShare);

/*function sendData() {
    var inputs = Array.from(fillItems);
    var userInfo = getJSONFromInputs(inputs);
    userInfo.skills = ['JavaScript', 'React'];
    userInfo.photo = fr.result;
    sendRequest(userInfo);
}

fr.addEventListener('load', sendData);

function getJSONFromInputs(inputs) {
    return inputs.reduce(function (acc, val) {
        if (val.nodeName !== 'BUTTON')
            acc[val.name] = val.value;
        return acc;
    }, {})
}*/

// función sendRequest //
function sendRequest(event) {
    event.preventDefault();
    buttonShare.disabled = true;

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: getUserInfo(),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (response) {
            buttonShare.disabled = false;
            return response.json();
        }) // entonces llamamos a la función showURL //
        .then(function (result) {
            showURL(result);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// función showURL//
function showURL(result) {
    const responseURL = document.querySelector('.completed_content_url');
    const twitterBtn = document.querySelector('.completed_content_button');
    const twitterLink = document.querySelector('.completed_content_twitter');
    const tweet = 'https://twitter.com/intent/tweet?text';

    if (result.succes) {
        responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
        twitterBtn.classList.remove('hidden');
        twitterLink.href = tweet + result.cardURL;
    } else {
        responseURL.innerHTML = 'ERROR:' + result.error;
    }
}