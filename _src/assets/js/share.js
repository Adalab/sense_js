/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-undef */
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
        .then(function (resp) {
            buttonShare.disabled = false;
            return resp.json();
        })
        .then(function (result) {
            showURL(result);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function showURL(result) {
    const responseURL = document.querySelector('.response');
    const twitterBtn = document.querySelector('.completed_content_button');
    const twitterLink = document.querySelector('completed_content_url');
    const tweet = "https://twitter.com/intent/tweet?text";

    if (result.succes) {
        responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
        twitterBtn.classList.remove('hidden');
        twitterLink.href = tweet + result.cardURL;
    } else {
        responseURL.innerHTML = 'ERROR:' + result.error;
    }
}