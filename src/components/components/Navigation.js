import React from "react";
import NavLinks from "./NavLinks";
import { Outlet } from "react-router-dom";

const Navigation = () => {

    return (
      <div className="navigation">
        <NavLinks />
      </div>
    )
  }

  export default Navigation