import React from 'react'
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Portfolio, HomePage, Intro, DragonRepeller, NumberGenerator, WeatherApp  } from './components/pages'



const Main = () => {
  
  return (
    <div className="app">
      <Intro />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio/dragonrepeller' element={<DragonRepeller />} />
        <Route path='/portfolio/numbergenerator' element={<NumberGenerator />} />
        <Route path='/portfolio/weatherapp' element={<WeatherApp />} />
        
      </Routes>
    </div>
  );
}

export default Main
