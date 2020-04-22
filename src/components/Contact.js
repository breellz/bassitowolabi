import React from 'react';
import '../css/contact.css'
import '@fortawesome/fontawesome-free/css/all.css'

const Contact =()=>(
    <div>
    <h1 className="h1-center">Contact Me!</h1>
    <p id="contact-text">Let's connect.  I prefer <a href="https://twitter.com/breellz" target="_blank" rel="noopener noreferrer"> Twitter DMs</a> and <a href="mailto: barseetbrown@gmil.com"> Email</a></p>
    <div class="social-icons">
    <a href="https://twitter.com/breellz" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-twitter fa-5x"></i></a>
    <a href="https://fb.com/breellz" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-facebook-square fa-5x"></i></a>
    <a href="https://instagram.com/breellzfit" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-instagram-square fa-5x"></i></a>
    </div>
    </div>
)

export default Contact