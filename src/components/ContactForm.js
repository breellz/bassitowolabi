import React from 'react';
import '../css/contact-form.css';
import emailjs from 'emailjs-com'
import apiKeys from '../apikeys'

const onSubmit=(e)=>{
    e.preventDefault()
     emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(
      result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
      },
      error => {
        alert( 'An error occured, Plese try again',error.text)
      }
    )
    e.target.elements.name.value = ''
    e.target.elements.message.value = ''
    e.target.elements.subject.value = ''
    e.target.elements.email.value = ''

  }

const ContactForm = ()=>(
    <div>
    <h3 id="contact-text">A contact form that actually works!</h3>
    <form className="form" onSubmit = {onSubmit}>
    
       <p>Your Name:</p>
        <input name='name' type="text" placeholder="Your name..." className="form__input" />
        <p>Your Email:</p>
        <input name='email' type="email" placeholder="Your email..." className="form__input" />
        <p>Subject:</p>
        <input name='subject' type="text" placeholder="Subject..." className="form__input"  />
        <p>Your Message:</p>
         <textarea name='message' type="text" placeholder="Your Message..." className="form__input-messag"  ></textarea>

        <button className="form__input--button">Send Message</button>
    </form>    
    </div>
)


export default ContactForm

