import React from 'react';
import './App.css'; 
import Head from "./components/Head";
import { Route, Routes } from "react-router-dom";
import Quote from "./components/Quote";
import Docs from './components/Docs';
import Contact from './components/Contact';


export default function App() {
    return (
      <>
        <div className="App">
          {/* Routings  */}
      
          <Routes>
            <Route path="/" element={<Head />} />
            <Route path="/doc" element={<Docs />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
          <br></br>
    
        </div>
      </>
    );
  }