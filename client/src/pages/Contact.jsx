import objectData from "../object.json";
import emailjs from '@emailjs/browser';

import {useState} from 'react'

const Contact = () => {
  const [messageSend, setMessageSend] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleChange = (event) => {
    const id = event.target.id;
    if(id === "name") {
      setName(event.target.value);
    } else if(id === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value)
    }
  }

  const sendEmail = (e) => {
    const form = e.target;
    const button = form.querySelector(".submit-button__button");    
    e.preventDefault();
    const data = {name, email, message};

    setName("");
    setEmail("");
    setMessage("");

    button.classList.add("submit-button__clicked");
    emailjs.send(objectData.serviceID,objectData.templateID, data, objectData.userID)
	  .then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
     setInterval(setMessageSend(true), 3000);
	  }, (err) => {
	   console.log('FAILED...', err);
     playButtonAnimation(button, false);
	  });    
  }

  const playButtonAnimation = (button, submitWorked) => {
    setInterval(() => {
        button.style.visibility = "hidden";
        const icon  = document.querySelector(".submit-button__icon");
      
        if(icon != null) {
          if(submitWorked === true) {
            icon.style.backgroundColor = "#55c57a";
            icon.classList.add("fa-check");
          } else {
            icon.style.backgroundColor = "#C55555";
            icon.classList.add("fa-times");
          }
            icon.classList.add("submit-button__icon__shown");
        }
    }, 3000);
  }

  if(messageSend !== true) {
    return (<section className="section-contact">
    <div className="section-contact__content">
        <form className="form" onSubmit={sendEmail}>
           <h2 className="form__title">Contact</h2> 
          <ul className="form__groups">
             <li className="form__group">
                    <input type="text" className="form__input" placeholder="Name" id="name" required value={name} onChange={handleChange}/>
                    <label htmlFor="name" className="form__label">Name</label>
                </li>
                <li className="form__group">
                    <input type="email" className="form__input" placeholder="Email" id="email" required value={email} onChange={handleChange}/>
                    <label htmlFor="email" className="form__label">Email</label>
                </li>

                <li className="form__group">
                    <textarea className="form__input form__input__message" placeholder="Message" id="message" cols="30" rows="4" required value={message} onChange={handleChange}></textarea>
                    <label htmlFor="message" className="form__label">Message</label>
                </li>

                <li className="form__group">
                  <div className="submit-button">
                    <button className="submit-button__button" type="submit">Send</button>
                        <i className="fas fa-check submit-button__icon"></i>
                  </div>
                </li>
        </ul>
               
            </form>
      <div className="section-contact__image-box">
        <img src="./images/Vector2.png" alt="" className="section-contact__image" />
      </div>
  </div>
  </section>)  
  } else {
    return (<section className="section-message">
    <div className="section-message__content">
      <div className="section-message__text-box">
         <p className="section-message__succes-message">Successfully send the message</p>
          <i className="fas fa-check section-message__succes-icon"></i>
      </div>
      <a href="/" className="section-message__button" >Click to go back to the home page</a>
    </div>
   </section>) 
  }
 

}

export default Contact;