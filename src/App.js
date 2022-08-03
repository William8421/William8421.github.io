import React from 'react';
import Header from './components/Header.js'
import Home from './components/Home.js';
import './styles/style.scss'
import About from './components/About';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
