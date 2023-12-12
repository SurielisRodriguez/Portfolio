import React from "react";
import { Routes, Route} from "react-router-dom"
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";
import Header from "./components/components/NavBar";

import "../src/styles/App.scss"
import "../src/styles/AboutMe.scss"
import "../src/styles/Home.scss"
import "../src/styles/Media.scss"

const App = () =>{
  
  return(
    <>
      <Header />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
        </Routes>
    </>
  )}
  export default App