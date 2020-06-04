import React, { useState, useEffect } from 'react';
import '../css/Header.css';


const Header = ()=> {
    const hobbies = ['a front-end developer', 'a gamer', 'a statistician','a swimmer','a tech lover','a javascript guru']
    let index = 0;

    const [hobby, setHobby] = useState([]);

    const  loadIntro=()=>{
        setHobby(hobbies[index])
        index++
        if(index >= hobbies.length){
           index = 0
        }
    }
        
    useEffect(()=>{
        const hobbiesInterval = setInterval(loadIntro, 2000)
        return ()=>{
            clearInterval(hobbiesInterval)
        }
    },[]);

    const handleClick=()=>{
        const anchor = document.querySelector('#contact-me');
         anchor.scrollIntoView({behavior: 'smooth', block:'center'})
     }

    return(
        <div className= "header-wrapper">
    <header className="containers">
    <p className="header-subtitle">Hey there,</p>
     <h1 id="header-title">I'm Bassit Owolabi</h1>
     <h2 className="header-subtitle">{hobby}</h2><br /> 
    </header>
    <button id="hire-me" onClick={handleClick}>HIRE ME</button>
    </div>)
}



export default Header