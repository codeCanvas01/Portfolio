import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">
        M USAMA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com/mohammad-usama-547" target="blank">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/muhammadusama_01" target="blank">
          <BsInstagram />
        </a>
        <a href="https://github.com/codeCanvas01" target="blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; M.USAMA. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
