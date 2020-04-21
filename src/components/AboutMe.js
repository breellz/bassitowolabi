import React from 'react';
import '../css/AboutMe.css'



const AboutMe = ()=>(
    <div>
    <h1 className="about-text">This is my system</h1>
    <div className="about-section">
       <div className="about_cards">
           <div className="card-1">
           <p>Pursue passions,not paychecks</p><br />
           <p>Be lovable</p>
           </div>
           <div className="card-2">
           <p>Don't take yourself too seriously</p><br />
           <p>Learn daily</p>
           </div>
           <div className="card-3">
           <p>Believe in Change</p><br />
           <p>Priotize the customer</p>
           </div>
           <div className="card-4">
           <p>Invest in ideas that matter</p><br/>
           <p>Be crazy and dumb!</p>
           </div>
       </div>
    <div className="about-right">
    <h2>Who am I?</h2>
    <p>My name is......</p>
    </div>
    </div>
    </div>
)

export default AboutMe