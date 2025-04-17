import React, { useState, useEffect } from 'react';
import './Spotlight.css';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'


const textVariants = {
    initial:{
        x:-500, 
        opacity: 0,
    },
    animate:{
        x: 0, 
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}

const Spotlight = () => {
    const [typedText, setTypedText] = useState("");
    const text = "Dog Adoption Hub";

    useEffect(() => {
        const typeNextCharacter = (currentIndex) => {
            if (currentIndex < text.length) {
                setTimeout(() => {
                setTypedText((prevText) => prevText + text[currentIndex]);
                typeNextCharacter(currentIndex + 1);
                }, 200); 
            }
        };
        typeNextCharacter(0);
        return () => {
            setTypedText(""); // Clear typed text on unmount
        };
    }, [text]);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  
    const handleFramesClick = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/Furry-Frames');
      }, 2000);
    };

    const handleDonateClick = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate('/donate');
        }, 2000);
    };

  return (
    <>
        {loading && (
        <div className="loading-overlay">
          <img src={require('../../Assets/Images/Breads Gallery/Logo.png')} alt="Loading Logo" className="logo-spin" />
        </div>
        )}
        {!loading && (
        <>
            <div className="spotlight">
                <motion.div className="spotlight-content" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Paws for a Cause: <span className="typed-text">{typedText}</span></motion.h2>
                    <motion.p variants={textVariants}>Welcome to Paws for a Cause, where every adoption changes a life. Our platform is dedicated to connecting loving homes with dogs in need of a second chance. Whether you're searching for a playful pup or a loyal companion, our curated selection of adoptable dogs features a variety of breeds, sizes, and personalities. With detailed profiles and photos, finding your perfect match has never been easier. Join our community of compassionate adopters and make a difference in the lives of dogs awaiting their forever homes. Start your journey with Paws for a Cause today!</motion.p>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} className="adopt-button" onClick={handleFramesClick}>Adopt →</motion.button>
                        <motion.button variants={textVariants} className="donate-button" onClick={handleDonateClick}>Donate →</motion.button>
                    </motion.div>
                </motion.div>
                <motion.div className="spotlight-image" variants={textVariants} initial="initial" animate="animate">
                    <motion.img src={require('../../Assets/Images/Breads Gallery/4.jpg')} alt="Logo" />
                </motion.div>
            </div>
            <div className="paw">
                <img src={require('../../Assets/Images/Breads Gallery/12.png')} alt="Logo" className="running-paw" />
            </div>
        </>
        )}
    </>
    );
};

export default Spotlight;
