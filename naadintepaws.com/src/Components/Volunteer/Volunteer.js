import React, { useState, useEffect, useMemo, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';
import shuffle from 'lodash.shuffle';
import { motion, useInView } from 'framer-motion';
import './Volunteer.css';

const volunteerPartners = [
    {
        name: "Pedigree",
        description: "Providing high-quality food and support for our pets.",
        image: require("../../Assets/Images/Breads Gallery/Pedigree.jpeg")
    },
    {
        name: "Veterinary Doctors",
        description: "Offering essential medical care and advice.",
        image: require("../../Assets/Images/Breads Gallery/Comparison.jpg")
    },
    {
        name: "Municipal Corporation",
        description: "Supporting infrastructure and rescue operations.",
        image: require("../../Assets/Images/Breads Gallery/corporation.jpg")
    },
    {
        name: "College Students",
        description: "Volunteering time and energy to help the animals.",
        image: require("../../Assets/Images/Breads Gallery/clg-students.jpg")
    },
    {
        name: "Campaign Students",
        description: "Raising awareness and organizing events.",
        image: require("../../Assets/Images/Breads Gallery/campign.jpg")
    },
    {
        name: "Local Animal Shelters",
        description: "Collaborating with us to rescue and shelter homeless animals.",
        image: require("../../Assets/Images/Breads Gallery/do-shelter.jpg")
    },
    {
        name: "Brototype - Sponsor",
        description: "Businesses supporting our mission through donations and sponsorships.",
        image: require("../../Assets/Images/Breads Gallery/coorporate-sponser.jpg")
    },
    {
        name: "Veterinary Clinics",
        description: "Offering medical care and health check-ups for rescued animals.",
        image: require("../../Assets/Images/Breads Gallery/animal-hos.jpg")
    },
    {
        name: "School Programs",
        description: "Educating students about animal welfare and involving them in rescue activities.",
        image: require("../../Assets/Images/Breads Gallery/school-stu.webp")
    },
    {
        name: "Animal Trainers",
        description: "Providing training and rehabilitation for rescued animals to help them find homes.",
        image: require("../../Assets/Images/Breads Gallery/Animal-Trainer.jpg")
    },
    {
        name: "Animal Lovers Clubs",
        description: "Groups of animal enthusiasts organizing events and fundraisers.",
        image: require("../../Assets/Images/Breads Gallery/animal-club.jpg")
    },
    {
        name: "Healing Paws Therapy",
        description: "Dedicated volunteers providing therapeutic support through dog-assisted therapy programs in hospitals, schools, and care facilities.",
        image: require("../../Assets/Images/Breads Gallery/thrpy.jpg")
    },
];

const Masonry = ({ items }) => {
    const [ref, { width }] = useMeasure();
    const [shuffledItems, setShuffledItems] = useState(items);

    const columns = useMemo(() => {
        if (width > 900) return 3;
        if (width > 600) return 2;
        return 1;
    }, [width]);

    const gap = 20;

    useEffect(() => {
        const interval = setInterval(() => setShuffledItems(shuffle(items)), 4000);
        return () => clearInterval(interval);
    }, [items]);

    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0);
        let gridItems = shuffledItems.map((item, i) => {
            const column = i % columns;
            const x = (width / columns) * column + gap * column;
            const y = heights[column];
            heights[column] += 500;
            return { ...item, x, y, width: (width - gap * (columns - 1)) / columns, height: 450 };
        });
        return [heights, gridItems];
    }, [columns, shuffledItems, width]);

    const transitions = useTransition(gridItems, {
        key: (item) => item.name,
        from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
        enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 1000, friction: 200 },
        trail: 25,
    });

    return (
        <div ref={ref} className="masonry-grid" style={{ height: Math.max(...heights) }}>
            {transitions((style, item) => (
                <a.div style={style} className="volunteer-card">
                    <img src={item.image} alt={item.name} />
                    <div className="volunteer-info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                </a.div>
            ))}
        </div>
    );
};

const Volunteer = () => {
    const volunterRightRef = useRef(null);
    const volunterLeftRef = useRef(null);
    const volunterRightInView = useInView(volunterRightRef, { once: true });
    const volunterLeftInView = useInView(volunterLeftRef, { once: true });

    return (
        <div className="volunteer-section">
            <motion.h1
                ref={volunterRightRef}
                initial={{ opacity: 0, x: -300 }}
                animate={volunterRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 400 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Volunteer with Us...
            </motion.h1>
            <div className="volunteer-form">
                <motion.div className='social-wrk' initial={{ opacity: 1 }} whileInView={{ opacity: 0, zIndex: -1 }} transition={{ delay: 2, duration: 2 }}>
                    <img src={require('../../Assets/Images/Breads Gallery/vlnter.png')} alt="social" className="social" />
                </motion.div>
                <motion.div className='form-cd' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2, duration: 0 }}>
                    <h2>Sign Up to Volunteer</h2>
                    <form>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Phone Number" required />
                        <textarea placeholder="Why do you want to volunteer?" required></textarea>
                        <button type="submit">Join Us</button>
                    </form>
                </motion.div>
            </div>
            <motion.h1
                ref={volunterLeftRef}
                initial={{ opacity: 0, x: -300 }}
                animate={volunterLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -400 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
            >
                OUR INSPIRING VOLUNTEER POWERHOUSE...
            </motion.h1>
            <Masonry items={volunteerPartners} />
        </div>
    );
};

export default Volunteer;
