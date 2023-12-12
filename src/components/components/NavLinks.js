import React from 'react';
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return ( 
    <Nav className='navbar'>   
        <NavItem className="nav-buttons">
          <NavLink  to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="nav-buttons">
          <NavLink  to="/portfolio" className="nav-link">
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem className="nav-buttons">
          <NavLink to="/resume" className="nav-link">
            Resume
          </NavLink>
        </NavItem>
        <NavItem className="nav-buttons">
          <NavLink  to="/contact" className="nav-link">
            Contact Me
          </NavLink>
        </NavItem>
    </Nav>    
     );
}
 
export default NavLinks;