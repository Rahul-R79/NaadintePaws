import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-about">
                    <img src={require('../../Assets/Images/Breads Gallery/Logo.png')} alt="Logo" className="footer-logo"/>
                    <p>Dedicated to finding loving homes for dogs in need. Join our mission to rescue, rehabilitate, and rehome pets. Together, we can give these animals the second chance they deserve.</p>
                </div>
                <div className="footer-section services">
                    <h2>Explore</h2>
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><a href='/Furry-Frames'>Adopt</a></li>
                        <li><a href='/donate'>Donate</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <ul>
                        <li>Email: <a href="mailto:info@naadintepaws.com">info@naadintepaws.com</a></li>
                        <li>Phone: <a href="tel: 7994611582">+91 7994611582</a></li>
                        <li>Address: 123 Pet Street, Pet City, PC 12345</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 NaadintePaws. All rights reserved.</p>
                <div className="socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
