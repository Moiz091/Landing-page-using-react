import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import aboutImage from './images/about.png';

function App() {
  return (
    <div className='App'>
        <Header/>  
        <Feature/>
        <About image={aboutImage} title="This is a demo heading" button="Get the App" />
        <Presentation />
        <Contact />
    </div>
  )
}

export default App;