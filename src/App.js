import React from 'react';
import './css/base.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm'


  
class App extends React.Component{

  render(){
    return(
      <>
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact>
      <ContactForm />
      </Contact>
      </>
    )
  }
}


export default App
