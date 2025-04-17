import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import './Testimonial.css';

const Testimonial = () => {
  const missionImageRef = useRef(null);
  const missiontextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef(null);

  const missionImageInView = useInView(missionImageRef, { once: true });
  const missiontextInView = useInView(missiontextRef, { once: true });


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      image: require('../../Assets/Images/Clients Gallery/2.jpg'),
      name: 'Emma S & Emi Raj',
      review: "Adopting Max was the best decision I ever made. From the moment I brought him home, he filled my life with joy and unconditional love. The adoption process was smooth and the support from the organization was incredible. Max is not just a pet, he's family!",
    },
    {
      id: 2,
      image: require('../../Assets/Images/Clients Gallery/3.webp'),
      name: 'Sophie L & Philipe',
      review: "Adopting Bella was a dream come true. The organization took great care in matching us with the perfect dog, and Bella has been a source of endless love and companionship. We're grateful for the wonderful experience and for bringing Bella into our lives",
    },
    {
        id: 3,
        image: require('../../Assets/Images/Clients Gallery/5.webp'),
        name: 'Jane Smith',
        review: "From the moment I met Charlie, I knew he was the one. The adoption process was seamless and the team provided excellent support. Charlie has brought so much joy and laughter into my life. I can't imagine my days without him!",
    },
    {
        id: 4,
        image: require('../../Assets/Images/Clients Gallery/9.jpg'),
        name: 'Laura K & Lisa J',
        review: "Rosie has brought so much happiness into our home. Her playful energy and loving nature have been a perfect addition to our family. The adoption team was professional and caring, making sure Rosie found her perfect forever home. We couldn't be happier!",
    },
    {
        id: 5,
        image: require('../../Assets/Images/Clients Gallery/7.jpg'),
        name: 'Olivia M',
        review: "Adopting Luna was an incredible journey. From the first moment we met her, we knew she was meant to be part of our family. The adoption team was fantastic, guiding us every step of the way. Luna's cheerful personality and loving nature have made our house feel more like home. We are forever grateful!",
    },
    {
        id: 6,
        image: require('../../Assets/Images/Clients Gallery/8.jpeg'),
        name: 'Ramesh & Suresh D',
        review: "Adopting Rocky and Rani has been a heartwarming experience for both of us. The adoption team ensured the process was smooth and hassle-free, and we are grateful for their support. Rocky's playful antics and Rani's gentle nature have filled our home with laughter and love. It's wonderful to have such loyal companions by our side.",
    },
  ];

  return (
      <div ref={testimonialRef} className="testimonial-section">
        <motion.img src={require('../../Assets/Images/Breads Gallery/dog-test.png')} alt="Logo" className="test-png"
        ref={missionImageRef}
        initial={{ opacity: 0, x: -50 }}
        animate={missionImageInView ? { opacity: 0.7, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        /> 
        <motion.h1 className="testimonial"
        ref={missiontextRef}
        initial={{ opacity: 0, x: 100 }}
        animate={missiontextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}>
          Heartwarming Stories from Our Happy Tails: Testimonials from Adoptive Families
        </motion.h1>
        <div className='hr-line'></div>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            image={testimonial.image}
            name={testimonial.name}
            review={testimonial.review}
            isVisible={isVisible}
          />
        ))}
      </div>
  );
};

export default Testimonial;
