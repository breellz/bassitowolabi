import React from 'react'
import '../css/portfolio.css';
import covid19 from '../images/covid19.jpg'
import flipper from '../images/flipper.jpg'
import ocr from '../images/ocr.jpg'
import personal_web_1 from '../images/personal_web_1.jpg'
import personal_web_2 from '../images/personal_web_2.jpg';
import expensify from '../images/expensify.jpg'


const Portfolio = ()=>(
    <div>
    <h1 className="h1-center">Here are the stuffs I've done so far</h1>
    <div className="portfolio-images">
    <div>
    <img src={flipper} alt="portfolio-image" />
    <figcaption>My first React App. Flipper is a simple web application 
    that accepts options from users and suggests which one they should
    go for.Being my first app, it took me about a month to complete.
    I was so exicted learning new stuffs. With Flipper I learnt about React components,
    lifecycle methods,stateless functional components and webpack to mention a few.<br/><br/>
    <a href="http://flipper1.herokuapp.com/" target="_blank">Visit Site</a></figcaption>
    </div>
    <div>
    <img src={personal_web_2} alt="portfolio-image" />
    <figcaption>
    This is my second personal website. I built it in two days after I've
    gotten very comfortable with React.<br/><br/>
    <a href="http://breellz.me" target="_blank">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={expensify} alt="portfolio-image" />
    <figcaption>
    expensify is a web-app that helps users track their expenses.
    It features account registration and some features of realword app like
    writing to a database and reading from it. while working on thise project
    I learnt to use stuffs like React-router,redux,testing React components,app deployment,
    firebase, firebase authentication and React Hooks.<br/><br/>
    <a href="https://myexpensestracker.herokuapp.com/" target="_blank">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={ocr} alt="portfolio-image" />
    <figcaption>
    This is an Optical Character Recognition software interface
    that allows users to upload pictures to convert to text or capture with their webcam/mobile camera.
    I built this with pure Html CSS and JavaScript. Then, I had no idea what frame works or libraries were, lol.
    it still has some bugs but I left them intentionally to know how far I've come<br/> <br/>
    <a href="http://breellz.github.io/ocr-web-interface" target="_blank">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={personal_web_1} alt="portfolio-image" />
    <figcaption>
    Here is my first ever personal website. I spent about a week building this with Bootstrap.
    Bootstrap made everything do easy, by just specifying a class on an element you could make it responsive.
    It was a chilling adventure but at a point I realized I couldn't do this myself without the help of Bootsrap.
    so I had to go back to learn CSS the hard way, and at the end, it paid off<br/><br/>
    <a href="https://breellz.github.io/my-personal-website/" target="_blank">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={covid19} alt="portfolio-image" />
    <figcaption>
     I built covid19-today during the coronavirus pandemic. As a developer at that time,
     one of the ways I could help people was provide them with relevant information.
     It displays data on the spread of the virus for all affected countries, 
     with the country of the userscoming up first. Data provided include, daeth count, total confirmed cases
     total deaths, new cases and the likes.<br/><br/>
     <a href="https://breellz.github.io/covid19-today/" target="_blank">Visit Site</a>
    </figcaption>
    </div>
    </div>
    </div>
)

export default Portfolio