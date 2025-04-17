import React, { useEffect } from 'react';
import './MissionVision.css';

const MissionVision = () => {
    useEffect(() => {
      const counters = document.querySelectorAll('.counter');
  
      if (counters.length === 0) {
        return;
      }
  
      const updateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 50; // Adjust this value to control the speed of the count
  
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(() => updateCounter(counter), 30);
        } else {
          counter.innerText = target;
        }
      };
  
      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            counter.innerText = '0';
            updateCounter(counter);
            observer.unobserve(counter); // Stop observing once the counter is done
          }
        });
      };
  
      const observerOptions = {
        threshold: 0.1 // Adjust this value to trigger the animation earlier or later
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      counters.forEach(counter => observer.observe(counter));
  
      return () => {
        observer.disconnect();
      };
}, []);
  
  return (
    <div className='bg'>
    <section className="mission-vision">
      <div className="counters">
        <div className="counter-item">
          <h3>Dogs Sterilized</h3>
          <p className="counter" data-target="1238">0</p>
        </div>
        <div className="counter-item">
          <h3>Dogs Rescued</h3>
          <p className="counter" data-target="240">0</p>
        </div>
        <div className="counter-item">
          <h3>Rabies Vaccinations</h3>
          <p className="counter" data-target="2790">0</p>
        </div>
        <div className="counter-item">
          <h3>Adoptions</h3>
          <p className="counter" data-target="94">0</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default MissionVision;
