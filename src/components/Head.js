import React from 'react'
import Footer from './Footer';
import Hero from './Hero';
// import { Link } from "react-router-dom";
import Navbar from './Navbar';

export default function Head() {
  return (
    <div className='maincom'>
      <Navbar /> 
      <Hero />
      <Footer />
    </div>
  )
}



