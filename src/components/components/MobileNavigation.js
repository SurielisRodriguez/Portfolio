import NavLinks from "./NavLinks";
import {CgMenuRightAlt, CgClose} from "react-icons/cg"
import { useState } from "react"

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    const hamburgerIcon =   <CgMenuRightAlt onClick={() => setOpen(!open)} className="hamburger" size="40px" color="white"/>

    const closeIcon =   <CgClose onClick={() => setOpen(!open)} className="hamburger" size="40px" color="white"/>
console.log(open);
    return ( 
        <div open={open} className="mobile-navigation">
           {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </div>
     );
}
 
export default MobileNavigation;