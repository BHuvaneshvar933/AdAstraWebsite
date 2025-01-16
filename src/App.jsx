import { useState } from 'react'

import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Merch from './pages/Merch';
import Home from './components/Home';
import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';
import RegisterSection from './components/RegisterSection';
import FooterSection from './components/FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function App() {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/home" element={
          <>
            <Home/>
            <UpcomingEvents/>
            <PastEvents/>
            <RegisterSection/>
            <FooterSection/>
          </>
        } />
        <Route path="/about-us" element={<About />} />
        <Route path="/merch" element={<Merch/>}/>
    </Routes>
   </Router>
  );
}

export default App