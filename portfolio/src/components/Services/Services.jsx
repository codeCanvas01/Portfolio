import "./Services.css";

import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <section id="services" className="main-services">
        <div className="services-left">
          <h1>Services</h1>
          <p>
            I provide comprehensive MERN stack development services, excelling
            in frontend design and backend development, with a strong focus on
            UI/UX, API integration, and database optimization to deliver
            top-tier digital solutions.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 250, damping: 5 }}
          className="services-center"
        >
          <h1>Frontend Services</h1>

          <div className="s-items">
            <RiJavascriptFill />
            JavaScript
          </div>

          <div className="s-items">
            <RiReactjsLine />
            React JS
          </div>

          <div className="s-items">
            <SiTailwindcss />
            Tailwind CSS
          </div>

          <div className="s-items">
            <AiOutlineAntDesign />
            Ant Design
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 250, damping: 5 }}
          className="services-right"
        >
          <h1>Backend Services</h1>

          <div className="s-items">
            <FaNodeJs />
            Node Js
          </div>

          <div className="s-items">
            <SiExpress />
            Express
          </div>

          <div className="s-items">
            <SiMongodb />
            Mongo DB
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
