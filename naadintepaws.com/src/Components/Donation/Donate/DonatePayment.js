import React, { useState, useEffect } from 'react';
import './DonatePayment.css';
import { useLocation } from 'react-router-dom';

const DonatePayment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const option = queryParams.get('option');

    const [donationType, setDonationType] = useState(option === 'monthly-cash' ? 'monthly' : 'one-time');
    const [monthlyAmount, setMonthlyAmount] = useState('100');
    const [oneTimeAmount, setOneTimeAmount] = useState('1000');

    const handleDonationTypeChange = (e) => {
        setDonationType(e.target.value);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    return (
        <div className='donate-pagebg'>
            <div className="donate-page-payment">
                <div className='dnt-option'>
                    <div className="donation-section">
                        <img src={require('../../../Assets/Images/Breads Gallery/meal.jpg')} alt="One-time donation" />
                        <h1>Donate a One-time Meal to a Homeless Dog</h1>
                        <label>
                            <input
                                type="radio"
                                value="one-time"
                                checked={donationType === 'one-time'}
                                onChange={handleDonationTypeChange}
                            />
                            One-time Meal Donation
                        </label>
                        {donationType === 'one-time' && (
                            <div className='select-option'>
                                <label>One-time Amount</label>
                                <select value={oneTimeAmount} onChange={(e) => setOneTimeAmount(e.target.value)}>
                                    <option value="1000">1000</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                        )}
                    </div>
                    <div className="donation-section">
                        <img src={require('../../../Assets/Images/Breads Gallery/dog-care.webp')} alt="Monthly donation" />
                        <h1>Subscribe to Monthly Donations for Dog Care</h1>
                        <label>
                            <input
                                type="radio"
                                value="monthly"
                                checked={donationType === 'monthly'}
                                onChange={handleDonationTypeChange}
                            />
                            Subscribe to Monthly Donation
                        </label>
                        {donationType === 'monthly' && (
                            <div className='select-option'>
                                <label>Monthly Amount</label>
                                <select value={monthlyAmount} onChange={(e) => setMonthlyAmount(e.target.value)}>
                                    <option value="1000">1000</option>
                                    <option value="2000">2000</option>
                                    <option value="3000">3000</option>
                                </select>
                            </div>
                        )}
                    </div>
                </div>
                <div className="donate-payment">
                    <div className="left-side">
                        <img src={require('../../../Assets/Images/Breads Gallery/3.png')} alt="Donation" />
                        <p>Your contribution can make a huge difference in the lives of homeless dogs. By making a donation, you help provide essential food, shelter, and medical care for these animals in need. Together, we can give them a second chance at life.<br/><br/>
                            <b>Donate Today and Be a Hero for Homeless Dogs</b></p>
                    </div>
                    <div className="right-side">
                        <form>
                            <h1>Payment Methods</h1>
                            <div className="payment-donate">
                                <label>
                                    <input type="radio" name="paymentMethod" value="card" required />
                                    <img src={require('../../../Assets/Images/mastercard.png')} alt="Card Logo" className="payment-icon"/>
                                    <p>Debit or Credit Card</p>
                                </label>
                                <label>
                                    <input type="radio" name="paymentMethod" value="razorpay" required />
                                    <img src={require('../../../Assets/Images/razorpay.png')} alt="Razorpay Logo" className="payment-icon"/>
                                    <p>Razorpay</p>
                                </label>
                            </div>
                            <div className='input-fields'>
                                <input type="text" placeholder="First Name" required />
                                <input type="text" placeholder="Last Name" required />
                                <input type="email" placeholder="Email" required />
                                <input type="text" placeholder="Credit Card Number" required />
                                <input type="text" placeholder="CVV" required />
                                <input type="text" placeholder="Card Expiry (MM/YY)" required />
                            </div>
                            <button type="submit" className='submit-btn'>Donate Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatePayment;
