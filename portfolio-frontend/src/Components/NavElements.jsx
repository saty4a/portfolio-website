import React, { useEffect, useState } from "react";

const NavElements = (props) => {
    const [bgColor, setBgColor] = useState(props.bgColor ? props.bgColor : "")
    useEffect(() => {
        setBgColor(props.bgColor ? props.bgColor : "")
    },[])
    return (
        <ul className={ `h-[${props.h}] flex ${props.direction} justify-center text-center gap-8 py-7 bg-[${bgColor}]`} ref={props.refs}>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#about">About</a></li>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#experience">Experince</a></li>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#project">Project</a></li>
                <li className="text-underline-animation " onClick={props.closeNavBar}><a href="#contact">Contact</a></li>
                <li className="hover:-translate-y-1 hover:scale-110" onClick={props.closeNavBar}><a href="https://drive.google.com/file/d/1IjrM1tlwSUaNT9Kl9eLsNW25x12bmaoF/view?usp=sharing" target="_blank" className="border-2 p-2">Resume</a></li>
            </ul>
    )
}

export default NavElements;