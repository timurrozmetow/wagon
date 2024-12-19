import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo/q.webp" alt="Logo" className="footer-img-logo" />
          <p className="footer-tagline">Grand Millennium</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@yourdomain.com"><i className="fas fa-envelope"></i>info@grand-millennium.ae</a></li>
            <li><a href="mailto:contact@yourdomain.com"><i className="fas fa-envelope"></i>sales@grand-millennium.ae</a></li>
            <li><a href="tel:+1234567890"><i className="fas fa-phone-alt"></i>+ 971 509724457</a></li>
            <li><i className="fas fa-map-marker-alt"></i> Dubai Silicon Oasis, DDP, A2 Building Dubai</li>
        </ul>

        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Grand Millennium. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
