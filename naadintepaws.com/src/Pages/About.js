import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { motion, useInView } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './About.css'; // Import the CSS file for styling
import Footer from '../Components/Footer/Footer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const teamMembers = [
  {
    name: 'Rahul R',
    role: 'Founder & CEO',
    bio: 'Rahul has been passionate about animal welfare for over a decade. He founded NaadintePaws to provide a loving home for every dog.',
    photo: require('../Assets/Images/Breads Gallery/me.jpg'),
  },
  {
    name: 'John Smith',
    role: 'Operations Manager',
    bio: 'John oversees the day-to-day operations and ensures that all rescued dogs receive the best care possible.',
    photo: require('../Assets/Images/Breads Gallery/coming-soon.jpg'),
  },
  {
    name: 'Emily Johnson',
    role: 'Volunteer Coordinator',
    bio: 'Emily coordinates our amazing team of volunteers and organizes events to raise awareness about dog adoption.',
    photo: require('../Assets/Images/Breads Gallery/coming-soon.jpg'),
  },
  // Add more team members as needed
];

const growthData = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Adopted Dogs Count',
      data: [12, 30, 2, 10, 40], // Example data, replace with actual counts
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const growthOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Growth of Adopted Dogs (2020-2024)',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const GrowthChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      className="chart-container"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 2.5, ease: 'easeInOut' }}
    >
      <h2 className="chart-title">Adoption Rates of Dogs (2020-2024)</h2>
      <Line data={growthData} options={growthOptions} />
    </motion.div>
  );
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="team-container" ref={ref}>
      <h1 className="section-title">Our Team</h1>
      <motion.div
        className="team-members"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2 className="team-name">{member.name}</h2>
            <h3 className="team-role">{member.role}</h3>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  const missionImageRef = useRef(null);
  const storyImageRef = useRef(null);

  const missionImageInView = useInView(missionImageRef, { once: true });
  const storyImageInView = useInView(storyImageRef, { once: true });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);

  return (
    <>
      <div className="about-container">
        <h1 className="website-name">About Us</h1>
        <div className="about-content">
          <motion.img
            ref={missionImageRef}
            src={require('../Assets/Images/Breads Gallery/7.jpeg')}
            alt="Logo"
            className="mission-jpg"
            initial={{ opacity: 0, x: -100 }}
            animate={missionImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <div className="mission-statement">
            <h1 className="section-title">Mission Statement</h1>
            <p>
              At NaadintePaws, our mission is to provide a loving and safe environment for dogs in need of homes.
              We are committed to rescuing, rehabilitating, and rehoming dogs from various backgrounds.
              Our team works tirelessly to ensure that every dog receives the care and attention they deserve.
              We believe in the power of community and strive to educate the public on responsible pet ownership.
              Together, we can make a difference in the lives of these wonderful animals.
            </p>
            <span className="mission-logo">🐾 Happy Paws!</span>
          </div>
        </div>
        <div className="story-content">
          <motion.img
            ref={storyImageRef}
            src={require('../Assets/Images/Breads Gallery/5.jpg')}
            alt="Logo"
            className="story-image"
            initial={{ opacity: 0, x: -100 }}
            animate={storyImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <div className="story-contents">
            <h1 className="section-title">Our Story</h1>
            <p>
              NaadintePaws began with a simple idea: every dog deserves a chance at a happy life. Our founders, Rahul and John Doe, started this journey in 2020 after rescuing their first dog, Buddy, from a local shelter.
              Since then, we've grown into a dedicated team of volunteers and animal lovers, all working together to rescue, rehabilitate, and rehome dogs in need.
            </p>
            <p>
              Over the years, we've faced many challenges, but the joy of seeing a dog find their forever home makes it all worthwhile. We've built a community of supporters who share our passion and commitment to making a difference in the lives of these animals.
            </p>
            <p>
              Our story is one of hope, resilience, and love. We believe that every dog has a story worth telling, and we are here to help them write their next chapter. Join us in our mission to provide a better future for dogs everywhere.
            </p>
          </div>
        </div>
        <Team />
        <GrowthChart />
      </div>
      <Footer />
    </>
  );
};

export default About;
