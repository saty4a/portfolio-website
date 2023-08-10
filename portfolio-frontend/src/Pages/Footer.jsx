import React from "react";
import {FaGithub, FaLinkedinIn, FaMedium} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="text-center mt-5">
            <div className="flex flex-row gap-5 justify-center">
            <a href="https://github.com/saty4a"><FaGithub /></a>
            <a href="https://www.linkedin.com/feed/"><FaLinkedinIn /></a>
            <a href="https://medium.com/@satyabrat53272"><FaMedium /></a>
            <a href="#"><AiFillMail /></a>
            </div>
            <p className="mt-4">Made by Satyabrata Biswal</p>
        </div>
    )
}

export default Footer;
