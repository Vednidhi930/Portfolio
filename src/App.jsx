import React from "react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Skills from "./Component/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import AboutMe from "./Component/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/" element={<HeroSection />}/>
          <Route path="/Project" element={<Projects />}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
