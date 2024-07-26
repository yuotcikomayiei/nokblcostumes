import React from 'react';
import './footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Nok B&L Costumes is dedicated to providing high-quality costumes for all events and occasions.</p>
          <p>Our mission is to bring your imagination to life with our extensive collection of costumes and accessories.</p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Costume Rentals</li>
            <li>Custom Designs</li>
            <li>Accessories</li>
            <li>Event Planning</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Costume Rentals</li>
            <li>Custom Designs</li>
            <li>Accessories</li>
            <li>Event Planning</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: contact@nokblcostumes.com</p>
          <p>Phone: (211) 9123-99506</p>
          <p>Address: 123 Nok Tower, Juba, South Sudan</p>
          <p>Follow Us: 
            <a href="https://www.facebook.com">Facebook</a> | 
            <a href="https://www.twitter.com">Twitter</a> | 
            <a href="https://www.instagram.com">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
