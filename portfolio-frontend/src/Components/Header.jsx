import React, { useEffect, useState, useRef } from "react";
import NavBar from "./NavBar";
import NavElements from "./NavElements";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const styles = "sticky top-0 z-50 blur-background";
  const [showNavBar, setShowNavBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [styleNavBar, setStyleNavBar] = useState(
    window.innerWidth <= 1024 ? "" : styles
  );
  const [navAnimation, setNavAnimation] = useState("slide-in-done")

  const ref = useRef();
  const handleNavBar = () => {
    if (showNavBar) {
      setNavAnimation("slide-out-done")
      setTimeout(() => {
        setShowNavBar(!showNavBar);
        setNavAnimation("slide-in-done")
      },600)
    }
    else{
      setShowNavBar(!showNavBar);
    }
  };

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [setShowNavBar, showNavBar]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setShowNavBar(false);
      }
      if (window.innerWidth <= 1024) {
        setStyleNavBar("");
      } else {
        setStyleNavBar(styles);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={`navBar ${styleNavBar}`}>
      <div className="flex justify-between items-center mx-0 2xl:mx-[5rem]">
        <h2 className="text-2xl">
          <a href="#">Portfolio</a>
        </h2>
        {windowWidth >= 1024 ? (
          <NavElements refs={ref} h={"full"} directions={"flex-row"} />
        ) : !showNavBar ? (
          <FaBars className="cursor-pointer" size={35} onClick={handleNavBar} />
        ) : (
          <FaXmark
            className="z-50 cursor-pointer"
            size={35}
            onClick={handleNavBar}
          />
        )}
      </div>
      {showNavBar ? (
        <NavBar setShowNavBar={setShowNavBar} navAnimation={navAnimation} setNavAnimation={setNavAnimation}  />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
