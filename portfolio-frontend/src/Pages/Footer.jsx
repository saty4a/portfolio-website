import React from "react";
import {FaGithub, FaLinkedinIn, FaMedium} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="text-center mt-5">
            <div className="flex flex-row gap-5 justify-center">
            <a href="https://github.com/saty4a"><FaGithub /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaMedium /></a>
            <a href="#"><AiFillMail /></a>
            </div>
            <p className="mt-4">Made by Satyabrata Biswal</p>
        </div>
    )
}

export default Footer;