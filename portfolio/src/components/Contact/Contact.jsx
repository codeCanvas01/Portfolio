import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sbhrerp",
      "template_qad4nle",
      form.current,
      "zQ1Pr_fqhCL08Ga-0"
    );
    toast.success("Message Sent Successfully");
    e.target.reset();
  };
  return (
    <section id="contact" className="sec">
      <h1>Contact</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="container contact-container"
      >
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>mu4877@gmail.com</h5>
            <a href="mailto:mu4877@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Muhammad Usama</h5>
            <a
              href="https://m.me/muhammad_usama"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+923455152512</h5>
            <a
              href="https://whatsapp.com/send?phone+923455152512"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className=" m-btn">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
