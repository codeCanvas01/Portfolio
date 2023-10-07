import "./Header.css";
import pic from "../../img/pic.png";
import dots from "../../img/Dot.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <section className="main-header" id="home">
        <motion.img
          whileInView={{ rotate: 180 }}
          transition={{
            repeat: 1,
            repeatType: "reverse",
            duration: 2,
          }}
          src={dots}
          alt="dts"
          className="dots"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="info-header"
        >
          <h3>Hello I Am</h3>
          <h1>MUHAMMAD USAMA</h1>
          <h3>FullStack Developer</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="image-header"
        >
          <div className="image-div">
            <img src={pic} alt="profile-image" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Header;
