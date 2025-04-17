import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import './DogGallery.css';

import dogImage1 from '../../Assets/Images/Breads Gallery/13.jpg';
import dogImage2 from '../../Assets/Images/Breads Gallery/14.jpg';
import dogImage3 from '../../Assets/Images/Breads Gallery/15.jpg';

const dogs = [
  {
    id: 1,
    name: 'Special Needs Canines',
    description: "Discover the resilience and spirit of Kerala's disabled dogs, who have triumphed over life-changing accidents. These courageous canines, despite their physical challenges, offer unwavering love and loyalty. Each disabled dog brings a unique story of survival and determination. By adopting one of these special dogs, you provide them a second chance at a happy life. Embrace the opportunity to bring home a true testament of strength and compassion.",
    image: dogImage1
  },
  {
    id: 2,
    name: 'Street Dogs Seeking Sanctuary',
    description: "where tails wag with tales of resilience and hope. These street-smart canines, once roaming the bustling streets of Kerala, now seek the warmth of a loving home. Despite their humble beginnings, these dogs overflow with affection and loyalty. Adopt a street dog and witness the transformation of a survivor into a cherished companion. Open your heart and home to a street dog, and together, rewrite their story with love and care.",
    image: dogImage2
  },
  {
    id: 3,
    name: 'Newborn Puppies: Blank Slates of Love',
    description: "Embark on a journey of pure innocence and boundless joy with our newborn puppies. These tiny bundles of fur, just beginning their adventure in the world, are brimming with curiosity and affection. Experience the magic of nurturing a new life as you watch them grow and explore their surroundings. Adopt a newborn puppy and become their guiding light as they take their first steps into the world. Open your heart to these precious beings and create memories that will last a lifetime.",
    image: dogImage3
  }
];

const DogGallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const trail = useTrail(dogs.length, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    delay: 500,
  });

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

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <img src={require('../../Assets/Images/Breads Gallery/Logo.png')} alt="Loading Logo" className="logo-spin" />
        </div>
      )}
      {!loading && (
        <>
          <div className="dog-gallery">
              {trail.map((props, index) => (
                <animated.div key={dogs[index].id} style={props} className="dog-card">
                  <div className="dog-image-container">
                    <img src={dogs[index].image} alt={dogs[index].name} className="dog-image" />
                  </div>
                  <div className="dog-info">
                    <h2 className="dog-name">{dogs[index].name}</h2>
                    <p className="dog-description">{dogs[index].description}</p>
                    <button
                      className="learn-more-button"
                      onClick={handleFramesClick}
                    >
                      Learn More
                    </button>
                  </div>
                </animated.div>
              ))}
              </div><div className="wave">
          </div>
        </>
      )}
    </>
  );
};

export default DogGallery;
