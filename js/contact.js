const data = "../js/data.json";

emailjs.send(data.serviceID,objectData.templateID, data, objectData.userID)
.then((response) => {
 console.log('SUCCESS!', response.status, response.text);
setInterval(setMessageSend(true), 3000);
}, (err) => {
 console.log('FAILED...', err);
playButtonAnimation(button, false);
});    