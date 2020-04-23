import React from 'react';
import '../css/contact.css'
import '@fortawesome/fontawesome-free/css/all.css'

const Contact =()=>(
    <div>
    <h1 className="h1-center">Contact Me!</h1>
    <p id="contact-text">Let's connect.  I prefer <a href="https://twitter.com/breellz" target="_blank" rel="noopener noreferrer"> Twitter DMs</a> and <a href="mailto: barseetbrown@gmil.com"> Email</a></p>
    <div className="social-icons">
    <a href="https://twitter.com/breellz" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter fa-3x"></i></a>
    <a href="https://fb.com/breellz" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-square fa-3x"></i></a>
    <a href="https://instagram.com/breellzfit" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram-square fa-3x"></i></a>
    <a href="https://linkedin.com/in/bassit-owolabi-55751b15a" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin fa-3x"></i></a>
    <a href="https://stackoverflow.com/users/13081082/breellz" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-stack-overflow fa-3x"></i></a>
    <a href="https://giithub.com/breellz" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github-square fa-3x"></i></a>
    </div>
    </div>
)

export default Contact