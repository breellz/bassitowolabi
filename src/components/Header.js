import React from 'react';
import '../css/Header.css';



const hobbies = ['a front-end developer', 'a gamer', 'a statistician','a swimmer',
                 'a tech lover','a javascript guru']
let index = 0
class Header extends React.Component{
    constructor(props){
        super(props)
    this.loadIntro = this.loadIntro.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
            hobby : []
    }

    }
    loadIntro(){
        this.setState(()=>({hobby: hobbies[index]}))
        index++
        if(index >= hobbies.length){
           index = 0
        }
    }
    componentDidMount(){
       setInterval(this.loadIntro, 2000)
    }
    handleClick(){
       const anchor = document.querySelector('#contact-me');
        anchor.scrollIntoView({behavior: 'smooth', block:'center'})
    }
    render(){
        return(
            <div className= "header-wrapper">
            <header className="containers">
            <p className="header-subtitle">Hey there,</p>
             <h1 id="header-title">I'm Bassit Owolabi</h1>
             <h2 className="header-subtitle">{this.state.hobby}</h2><br /> 
            </header>
            <button id="hire-me" onClick={this.handleClick}>HIRE ME</button>
            </div>
        )}
}


export default Header