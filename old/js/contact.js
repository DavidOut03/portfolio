import data from './data.json' assert {type: 'json'};
emailjs.init(data.publicKey);

const submitButton = document.getElementById("submit-button");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formMessage = document.querySelector(".form__message");


submitButton.addEventListener("click", (e) => {
    const paramaters = {
        "name": name.value,
        "email": email.value,
        "message": message.value
    }

    name.value = "";
    email.value = "";
    message.value = "";

    formMessage.textContent = "The message was succesfully send.";

    emailjs.send(data.serviceID2, data.templateID, paramaters).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

});
