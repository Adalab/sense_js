/* eslint-disable curly */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable strict */

// definimos variables//
const buttonShare = document.querySelector('.share_button_img');
var responseURL = document.querySelector('.response');
var fillItems = document.querySelector('.fill-in_items');
var fr = new FileReader();


// definimos variable que va a ser una función para mandar una petición a la api (fetch) dónde le pasamos la información del usuario //
//const handlerButtonShare = () => sendRequest(userInfo);

// Añadimos evento Listener al hacer click en el botón //
buttonShare.addEventListener('click', sendRequest);

function sendData() {
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
}

// función sendRequest //
function sendRequest(userInfo) {
    buttonShare.disabled = true;

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (resp) {
            buttonShare.disabled = false;
            return resp.json();
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
    //const responseURL = document.querySelector('.completed_content_url');
    const twitterBtn = document.querySelector('.completed_content_button');
    const twitterLink = document.querySelector('.completed_content_twitter');
    const tweet = 'https://twitter.com/intent/tweet?text';

    if (result.succes) {
        /*completedURL*/responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
        twitterBtn.classList.remove('hidden');
        twitterLink.href = tweet + result.cardURL;
    } else {
        /*completedURL*/responseURL.innerHTML = 'ERROR:' + result.error;
    }
}