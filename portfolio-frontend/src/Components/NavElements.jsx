import React from "react";

const NavElements = (props) => {
    return (
        <ul className={ `h-[${props.h}] flex ${props.direction} justify-center text-center gap-8 bg-[${props.bgColor}]`} ref={props.refs}>
                <li value={0} onClick={props.closeNavBar}><a href="#about">About</a></li>
                <li onClick={props.closeNavBar}><a href="#experience">Experince</a></li>
                <li onClick={props.closeNavBar}><a href="#project">Project</a></li>
                <li onClick={props.closeNavBar}><a href="#contact">Contact</a></li>
                <li onClick={props.closeNavBar}><a href="https://drive.google.com/file/d/1IjrM1tlwSUaNT9Kl9eLsNW25x12bmaoF/view?usp=sharing" target="_blank" className="border-2 p-2">Resume</a></li>
            </ul>
    )
}

export default NavElements;