import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Header from './Components/Header';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import Contact from './Pages/contact';
import Footer from './Pages/Footer';
import { reveal } from './HelperFunction/ScrollAnimation';

class App extends Component {
  render() {
    window.addEventListener("scroll",reveal);
    return (
      <div className='App z-10 flex flex-col gap-5'>
      <Header />
      <HomePage />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
    );
  }
}

export default App;
