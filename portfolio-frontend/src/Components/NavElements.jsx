import React, { useEffect, useState } from "react";

const NavElements = (props) => {
    useEffect(() => {
        const navBg = document.querySelector(".navElements");
        if (window.innerWidth <= 1024) {
            navBg.classList.add("background-navBar")
        } else {
            navBg.classList.remove("background-navBar")
        }
    },[])
    return (
        <ul className={ `navElements h-[${props.h}] flex ${props.direction} justify-center text-center gap-8 py-7`} ref={props.refs}>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#about">About</a></li>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#experience">Experince</a></li>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#project">Project</a></li>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#contact">Contact</a></li>
                <li className="hover:-translate-y-1 hover:scale-110" onClick={props.closeNavBar}><a href="https://drive.google.com/file/d/1EGeAhgySH3tIZEidiS_9ZypToysBcHG7/view?usp=sharing" target="_blank" className="border-2 p-2">Resume</a></li>
        </ul>
    )
}

export default NavElements;
