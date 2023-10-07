import "./Navbar.css";
import menu from "../../img/menu.svg";

import { useState } from "react";

import Sidebar from "./Sidebar";
import cross from "../../img/cross.svg";
const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isActive, setIsActive] = useState("#home");

  const toggleSidebar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <>
      <div className="main-nav">
        <div className="nav-left">
          <div className="menu">
            {openSideBar ? (
              <img src={cross} alt="close" onClick={toggleSidebar} />
            ) : (
              <img src={menu} alt="menu-btn" onClick={toggleSidebar} />
            )}

            <h3>Muhammad Usama</h3>
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => setIsActive("#home")}
                className={isActive === "#home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={() => setIsActive("#about-me")}
                className={isActive === "#about-me" ? "active" : ""}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsActive("#services")}
                className={isActive === "#services" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsActive("#projects")}
                className={isActive === "#projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsActive("#contact")}
                className={isActive === "#contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {openSideBar && <Sidebar />}
    </>
  );
};

export default Navbar;
