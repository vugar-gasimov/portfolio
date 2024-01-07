import { motion } from "framer-motion";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>vuqar5qasimov@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Street Henerala Tupykova, 31,Kyiv, Kyiv City, Ukraine</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+(380)63-684-02-29</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input className="orange" type="email" required placeholder="email" />
          <textarea rows={7} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
