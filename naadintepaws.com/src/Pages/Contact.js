// Contact.js
import React, {useEffect} from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';
import Footer from '../Components/Footer/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);
  return (
    <>
    <div className='about-bg'>
      <div className="container">
        <h1 className="contact-h1">Contact Us</h1>
        <div className="icons-container">
          <div className="icon-item">
            <FaPhone size={40} />
            <a href="tel: 7994611582">+91 7994611582</a>          
          </div>
          <div className="icon-item">
            <FaEnvelope size={40} />
            <a href="mailto:info@naadintepaws.com">info@naadintepaws.com</a>          
          </div>
          <div className="icon-item">
            <FaMapMarkerAlt size={40} />
            <a href="#">123 Pet Street, Pet City, PC 12345</a>          
          </div>
        </div>
        <form className="form">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <textarea placeholder="Message" className="textarea"></textarea>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
