import "./Sidebar.css";
import { FiHome } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState("#home");
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => setIsActive("#home")}
            className={isActive === "#home" ? "active" : ""}
          >
            <div className="items">
              <FiHome style={{ height: "25px", width: "25px" }} />
              <span>Home</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#about-me"
            onClick={() => setIsActive("#about-me")}
            className={isActive === "#about-me" ? "active" : ""}
          >
            <div className="items">
              <FaRegUser style={{ height: "22px", width: "25px" }} />
              <span>About Me</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={() => setIsActive("#services")}
            className={isActive === "#services" ? "active" : ""}
          >
            <div className="items">
              <RiServiceLine style={{ height: "28px", width: "30px" }} />
              <span>Services</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setIsActive("#projects")}
            className={isActive === "#projects" ? "active" : ""}
          >
            <div className="items">
              <HiOutlineClipboardDocumentList
                style={{ height: "25px", width: "25px" }}
              />
              <span>Projects</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setIsActive("#contact")}
            className={isActive === "#contact" ? "active" : ""}
          >
            <div className="items">
              <MdOutlineContactMail style={{ height: "25px", width: "25px" }} />
              <span>Contact</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
