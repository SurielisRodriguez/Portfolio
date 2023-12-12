import React from "react"
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { Outlet } from "react-router-dom";

const Header = () => {
  
    return (
      <>
        <div id="top"></div>
        <Navigation />
        <MobileNavigation />
      </>
    );
  }

export default Header