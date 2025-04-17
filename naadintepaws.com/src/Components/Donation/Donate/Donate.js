import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faPaw, faSmile } from '@fortawesome/free-solid-svg-icons';
import './Donate.css';
import Footer from '../../Footer/Footer';

const Donate = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleDonateClick = (e, option) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(`/donate-payment?option=${option}`);
        }, 2000);
    };

    const handleFramesClick = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/Furry-Frames');
        }, 2000);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    return (
        <>
            {loading && (
                <div className="loading-overlay">
                    <img src={require('../../../Assets/Images/Breads Gallery/Logo.png')} alt="Loading Logo" className="logo-spin" />
                </div>
            )}
            {!loading && (
                <div className="donate-page">
                    <section className="intro-section">
                        <div className="intro-text">
                            <h1>
                                <span className="black-text">Contribute to Aid</span>
                                <span className="orange-text"> Dogs in Need</span>
                            </h1>
                            <p>Your generosity ensures that abandoned dogs receive the nourishment, shelter, and medical attention they desperately require. With your help, we can give these homeless dogs a second chance at life and a loving home. Every donation makes a significant impact, providing essential resources and support for their well-being. Join us in our mission to create a safer and happier world for these deserving animals.</p>
                        </div>
                        <div className="intro-image">
                            <img src={require('../../../Assets/Images/Breads Gallery/donate-png.png')} alt="dog" />
                        </div>
                    </section>

                    <section className="save-dogs-section">
                        <h2>Save Homeless Dogs</h2>
                        <p>Your donation can make a huge difference in the lives of these animals.</p>
                    </section>

                    <section className="cards-section">
                        <div className="card" onClick={(e) => handleDonateClick(e, 'one-time-food')}>
                            <img src={require('../../../Assets/Images/Breads Gallery/food-dnt.jpg')} alt="food" />
                            <p>Donate a one-time meal to a homeless dog.</p>
                            <button>Donate Now</button>
                        </div>
                        <div className="card" onClick={(e) => handleDonateClick(e, 'monthly-cash')}>
                            <img src={require('../../../Assets/Images/Breads Gallery/Comparison.jpg')} alt="cash" />
                            <p>Subscribe to monthly donations for dog care.</p>
                            <button>Donate Now</button>
                        </div>
                        <div className="card" onClick={(e) => handleFramesClick(e, 'adopt')}>
                            <img src={require('../../../Assets/Images/Breads Gallery/15.jpg')} alt="adopt" />
                            <p>Adopt a dog and change a life forever.</p>
                            <button>Adopt Now</button>
                        </div>
                    </section>

                    <div className="boxes-section">
                        <div className="box">
                            <div className='icon-bg'>
                                <FontAwesomeIcon icon={faHandHoldingHeart} size="4x" className="box-logo" />
                            </div>
                            <hr className="separator" />
                            <h3>Donate</h3>
                        </div>
                        <div className="box">
                            <div className='icon-bg'>
                                <FontAwesomeIcon icon={faPaw} size="4x" className="box-logo" />
                            </div>
                            <hr className="separator" />
                            <h3>Creating a New Life</h3>
                        </div>
                        <div className="box">
                            <div className='icon-bg'>
                                <FontAwesomeIcon icon={faSmile} size="4x" className="box-logo" />
                            </div>
                            <h3>Empowerment Initiatives</h3>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Donate;
