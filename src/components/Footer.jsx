import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo/q.webp" alt="Logo" className="footer-img-logo" />
          <p className="footer-tagline">Your tagline or company slogan here</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@yourdomain.com"><i className="fas fa-envelope"></i> Email: contact@yourdomain.com</a></li>
            <li><a href="tel:+1234567890"><i className="fas fa-phone-alt"></i> Phone: +123 456 7890</a></li>
            <li><i className="fas fa-map-marker-alt"></i> Address: Your address here</li>
        </ul>

        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i> /zawod</a>
            <a href="https://twitter.com" className="social-icon"><i className="fab fa-twitter"></i> /zawod</a>
            <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i> /zawod</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
