import React from 'react';
import './css/base.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';



class App extends React.Component{
 
  render(){
    return(
      <div>
      <Header />
      <AboutMe />
      <Portfolio />
      </div>
    )
  }
}


export default App
