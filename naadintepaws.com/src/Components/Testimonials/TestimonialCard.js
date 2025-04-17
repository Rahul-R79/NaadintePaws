import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Testimonial.css';

const TestimonialCard = ({ image, name, review, isVisible }) => {
  const props = useSpring({
    from: { opacity: 0.5, transform: 'rotate(20deg)' },
    to: async (next, cancel) => {
      if (isVisible) {
        while (1) {
          await next({ opacity: 1, transform: 'scale(1)' });
          await next({ opacity: 0.8, transform: 'scale(0.95)' });
        }
      } else {
        await next({ opacity: 0.8, transform: 'rotate(20deg)' });
      }
    },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={props} className="testimonial-card">
      <img src={image} alt={name} className="rounded-image" />
      <h3>{name}</h3>
      <p>{review}</p>
    </animated.div>
  );
};

export default TestimonialCard;
