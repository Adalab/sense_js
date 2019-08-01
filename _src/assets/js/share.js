/* eslint-disable strict */
const buttonShare = document.querySelector('.share_button_img');

const handlerButtonShare = () => sendRequest(userInfo);

buttonShare.addEventListener('click', handlerButtonShare);

function sendRequest(userInfo) {
    buttonShare.disabled = true;

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (resp) { buttonShare.disabled = false; return resp.json(); })
        .then(function (result) { showURL(result); })
        .catch(function (error) { console.log(error); });
}