import React from 'react';
import { useLocation } from 'react-router-dom';
import './AdoptPayment.css'; // Import the CSS file for styling

const AdoptPayment = () => {
  const location = useLocation();
  const { name, description, photo } = location.state;

  return (
    <div className="adopt-payment-container">
      <div className="adopt-wrapper">
        <div className="dog-content">
          <img src={photo} alt={name} className="dog-picture" />
          <h2 className="dog-names">{name}</h2>
          <p className="furry-descriptions">{description}</p>
        </div>
        <div className="adopt-payment">
          <form className="payment-form">
            <h1>Payment Methods</h1>
            <div className="payment-options">
              <label>
                <input type="radio" name="paymentMethod" value="card" required />
                <img src={require('../../Assets/Images/mastercard.png')} alt="Card Logo" className="payment-logo"/>
                <p>Debit or Credit Card</p>
              </label>
              <label>
                <input type="radio" name="paymentMethod" value="razorpay" required />
                <img src={require('../../Assets/Images/razorpay.png')} alt="Razorpay Logo" className="payment-logo"/>
                <p>Razorpay</p>
              </label>
            </div>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Credit Card Number" required />
            <input type="text" placeholder="CVV" required />
            <input type="text" placeholder="Card Expiry (MM/YY)" required />
            <button type="submit" className="submit-btn">Submit Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptPayment;
