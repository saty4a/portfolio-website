import React, { useRef } from "react";
import NavElements from "./NavElements";

const NavBar = ({setShowNavBar}) => {
    const ref = useRef();
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShowNavBar(false);
        }
    }
    const closeNavBar = () => {
        setShowNavBar(false)
    }
    return(
        <div className="h-[100vh] w-full top-0 fixed right-0 text-white z-20 blur-background" onClick={handleClick}>
            <NavElements refs={ref} closeNavBar={closeNavBar} h={"50vh"} direction={"flex-col"} />
        </div>
    )
}

export default NavBar;