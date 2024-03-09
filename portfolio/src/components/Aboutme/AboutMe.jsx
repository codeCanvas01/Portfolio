import "./AboutMe.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import cv from "../../img/M Usama.pdf";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <>
      <section id="about-me" className="main-about">
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}  className="left-about">
          <motion.h1
            // initial={{ x: 0 }}
            // whileInView={{ x: 10 }}
            // transition={{ duration: 3, type: "spring" }}
          >
            About Me
          </motion.h1>
          <motion.p
            // initial={{ x: 0 }}
            // whileInView={{ x: 10 }}
            // transition={{ duration: 3.4, type: "spring" }}
          >
            Passionate Shopify developer and designer crafting seamless web experiences
            with customise theme and liquid template expertise.
          </motion.p>
          <motion.div
            // initial={{ x: 0 }}
            // whileInView={{ x: 10 }}
            // transition={{ duration: 3.7, type: "spring" }}
            className="btn"
          >
             <a href={cv} download className="d-btn">Download CV</a>
            <a href="#contact" className="c-btn">
              Lets Talk
            </a>
          </motion.div>
          <motion.div
            // initial={{ x: 0 }}
            // whileInView={{ x: 10 }}
            // transition={{ duration: 4, type: "spring" }}
            className="socials"
          >
            <a
              href="http://www.facebook.com/mohammad-usama-547 "
              target="blank"
            >
              <FaFacebook style={{ height: "40px", width: "40px" }} />
            </a>
            <a href="http://www.instagram.com/muhammadusama_01" target="blank">
              <BsInstagram style={{ height: "40px", width: "40px" }} />
            </a>
            <a href="http://www.github.com/codeCanvas01" target="blank">
              <BsGithub style={{ height: "40px", width: "40px" }} />
            </a>
          </motion.div>
        </motion.div>
        <div className="right-about">
          <div className="main-card">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="about-card"
            >
              <GiGiftOfKnowledge />
              <h5>Education</h5>
              <small>Bs Computer Science</small>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
              className="about-card"
            >
              <BsFillAwardFill />
              <h5>Experience</h5>
              <small>3+ years</small>
            </motion.div>
            <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01],
             }}
              className="about-card"
            >
              <FaTasks />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
