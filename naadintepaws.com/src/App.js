import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FurryFrames from './Pages/FurryFrames';
import AdoptPayment from './Components/Adopt/AdoptPayment';
import './App.css';
import Donate from './Components/Donation/Donate/Donate';
import DonatePayment from './Components/Donation/Donate/DonatePayment';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Furry-Frames" element={<FurryFrames />} />
        <Route path="/adopt-payment" element={<AdoptPayment />} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/donate-payment" element={<DonatePayment />} />
      </Routes>
    </div>
  );
}

export default App;
