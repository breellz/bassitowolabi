import React from 'react'
import '../css/portfolio.css';
import covid19 from '../images/covid19.jpg'
import flipper from '../images/flipper.jpg'
import ocr from '../images/ocr.jpg'
import personal_web_1 from '../images/personal_web_1.jpg'
import personal_web_2 from '../images/personal_web_2.jpg';
import expensify from '../images/expensify.jpg';
import veepie from '../images/veepie.jpg'
import youtube from '../images/youtube.jpg'



const Portfolio = ()=>(
    <div>
    <h1 className="h1-center">Here are the stuffs I've done so far</h1>
    <div className="portfolio-images">
    <div>
    <img src={flipper} alt="portfolio" />
    <figcaption id="fig-caption_text_2">My first React App.<span role="img" aria-label="dancing">🕺</span> 
    Flipper is a simple web application 
    that accepts options from users and suggests which one they should
    choose. <span role="img" aria-label="wink">😉</span>
    Being my first app, it took me about a month to complete. <span role="img" aria-label="crying">😭</span>
    I was so exicted learning new stuffs.<span role="img" aria-label="sheep">😊</span>
     With Flipper I learnt about React components,
    lifecycle methods,stateless functional components and webpack to mention a few.
    <span role="img" aria-label="sheep">😊🤗</span>
    <br/><br/>
    <a href="http://flipper1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site</a></figcaption>
    </div>
    <div>
    <img src={personal_web_2} alt="portfolio" />
    <figcaption id="fig-caption_text_1">
    This is my second personal website. I built it in two days after I've
    gotten very comfortable with React.<span role="img" aria-label="happy">😁😍</span><br/><br/>
    <a href="http://breellz.me" target="_blank" rel="noopener noreferrer">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={expensify} alt="portfolio" />
    <figcaption>
    expensify is a web-app that helps users track their expenses.
    It features account registration and some features of realword app like
    writing to a database and reading from it.<span role="img" aria-label="sheep">🤔</span>
    while working on this project
    I learnt to use stuffs like React-router,redux,testing React components,app deployment,
    firebase, firebase authentication and React Hooks.<span role="img" aria-label="sheep">🤗</span><br/><br/>
    <a href="https://myexpensestracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={ocr} alt="portfolio" />
    <figcaption>
    This is an Optical Character Recognition software interface
    that allows users to upload pictures to convert to text or capture with their webcam/mobile camera.<span role="img" aria-label="sheep">👁‍🗨</span>
    I built this with pure Html CSS and JavaScript. Then, I had no idea what frame works or libraries were, lol.
    <span role="img" aria-label="sheep">😂😭</span>
    it still has some bugs but I left them intentionally to know how far I've come
    <span role="img" aria-label="sheep">🤗</span><br/> <br/>
    <a href="http://breellz.github.io/ocr-web-interface" target="_blank" rel="noopener noreferrer">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={personal_web_1} alt="portfolio" />
    <figcaption id="fig-caption_text_3">
    Here is my first  personal website.<span role="img" aria-label="sheep">🤗🤗</span> I spent about a week building this with Bootstrap.
    <span role="img" aria-label="sheep">😉</span>
    Bootstrap made everything do easy, by just specifying a class on an element you could make it responsive.<span role="img" aria-label="sheep">😁</span>
    It was a chilling adventure but at a point I realized I couldn't do this myself without the help of Bootsrap.
    <span role="img" aria-label="sheep">☹</span>
    so I had to go back to learn CSS the hard way, and at the end, it paid off
    <span role="img" aria-label="sheep">🤗</span><br/><br/>
    <a href="https://breellz.github.io/my-personal-website/" target="_blank"  rel="noopener noreferrer">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={covid19} alt="portfolio" />
    <figcaption>
     I built covid19-today during the coronavirus pandemic.<span role="img" aria-label="sheep">☹</span> As a developer at that time,
     one of the ways I could help people was provide them with relevant information.
     It displays data on the spread of the virus for all affected countries,<span role="img" aria-label="sheep">☹</span>
     with the country of the userscoming up first. Data provided include, daeth count, total confirmed cases<span role="img" aria-label="sheep">😢☹</span>
     total deaths, new cases and the likes.<br/><br/>
     <a href="https://breellz.github.io/covid19-today/" target="_blank" rel="noopener noreferrer">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={veepie} alt="portfolio" />
    <figcaption>
    Veepie is a blogging platform I built with react and redux. 
    It features account registration and some features of realword app like writing to a database and reading from it.
    while working on this project I implemented stuffs like React-router,redux,testing with jest, firebase,
     firebase authentication and React Hooks. 
    .<br/><br/>
     <a href="https://veepie.herokuapp.com" target="_blank" rel="noopener noreferrer">Visit Site</a>
    </figcaption>
    </div>
    <div>
    <img src={youtube} alt="portfolio" />
    <figcaption>
    A simple react app to fetch youtbe videos based on your mood! Either sad or happy, you're covered.
    <br/><br/>
     <a href="https://breellz.github.io/youtube-mood-player" target="_blank" rel="noopener noreferrer">Visit Site</a>
    </figcaption>
    </div>
    </div>
    </div>
)

export default Portfolio