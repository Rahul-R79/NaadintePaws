import React, { useRef, useState} from 'react';
import './Donation.css';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Donation = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDonateClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/donate');
    }, 2000);
};

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "1950%"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [1, 0, 0, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const cardRotateY = useTransform(scrollYProgress, [0, 1], ["0deg", "20deg"]);
  const cardRotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const XBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const YBg = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <>
    {loading && (
      <div className="loading-overlay">
        <img src={require('../../Assets/Images/Breads Gallery/Logo.png')} alt="Loading Logo" className="logo-spin" />
      </div>
      )}
    {!loading && (
    <div className='Slider' ref={ref}>
      <motion.h1 style={{ y: textY, opacity: textOpacity }}>What We Do?</motion.h1>
      <motion.div
        className="donation-card"
        style={{ y: cardY, rotateY: cardRotateY, rotateX: cardRotateX }}
        transition={{ type: 'spring', stiffness: 300 }}>
        <h2>Empower Our Cause</h2>
        <p>Your generous donation helps us to rescue, rehabilitate, and rehome pets in need. Together, we can make a difference in the lives of many animals.</p>
        <p>With your support, we can provide necessary medical care, vaccinations, food, shelter, and loving homes to abandoned and neglected pets.</p>
        <button className="donate2-button" onClick={handleDonateClick}>Donate</button>
      </motion.div>
      <motion.div className='dog-1' style={{ x: XBg }}></motion.div>
      <motion.div className='dog-2' style={{ x: YBg }}></motion.div>
    </div>
    )}
    </>
  );
};

export default Donation;
