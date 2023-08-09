import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import NavElements from "./NavElements";

library.add(faBars, faXmark);

const Header = () => {
  const styles = "sticky top-0 z-50 blur-navbar-background";
  const [showNavBar, setShowNavBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [styleNavBar, setStyleNavBar] = useState(window.innerWidth <= 1024 ? "" : styles)
  const ref = useRef();
  const handleNavBar = () => {
    setShowNavBar(!showNavBar);
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
      }
      else {
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
        <h2 className="text-2xl"><a href="#">Portfolio</a></h2>
        {windowWidth >= 1024 ? (
          <NavElements refs={ref} h={"full"} directions={"flex-row"} />
        ) : !showNavBar ? (
          <FontAwesomeIcon
            icon="bars"
            className="cursor-pointer"
            size="2xl"
            onClick={handleNavBar}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className="z-50 cursor-pointer"
            size="2xl"
            onClick={handleNavBar}
          />
        )}
      </div>
      {showNavBar ? <NavBar setShowNavBar={setShowNavBar} /> : ""}
    </nav>
  );
};

export default Header;
