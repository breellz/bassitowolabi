import React from 'react';
import '../css/Header.css';
import Contact from '../components/Contact'


const hobbies = ['a front-end developer', 'a gamer', 'a statistician','a swimmer',
                 'a tech lover','a javascript guru']
let index = 0
class Header extends React.Component{
    constructor(props){
        super(props)
         this.loadIntro = this.loadIntro.bind(this)
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
    render(){
        return(
            <div className= "header-wrapper">
            <header className="containers">
            <p className="header-subtitle">Hey there,</p>
             <h1 id="header-title">I'm Bassit Owolabi</h1>
             <h2 className="header-subtitle">{this.state.hobby}</h2><br /> 
            </header>
            <a id="hire-me" href="mailto: barseetbrown@gmail.com">Hire Me</a>
            </div>
        )}
}


export default Header