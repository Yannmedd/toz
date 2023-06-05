import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './Header';
import Glavnaya from './Glavnaya';
import Footer from './Footer';
import Fotogr from './Fotogr';
import About from './Aboutus';
import Contenttest from './Contenttest';



const App = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Glavnaya />} />
            <Route path="foto" element={<Fotogr />} />
            <Route path="about" element={<About />} />
            <Route path="/test" element={<Contenttest />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
