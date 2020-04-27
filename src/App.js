import React from 'react';
import './css/base.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'


  
class App extends React.Component{

  render(){
    return(
      <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact>
      <ContactForm />
      </Contact>
      </div>
    )
  }
}


export default App
