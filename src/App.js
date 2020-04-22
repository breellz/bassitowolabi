import React from 'react';
import './css/base.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


class App extends React.Component{
 
  render(){
    return(
      <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      </div>
    )
  }
}


export default App
