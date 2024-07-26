import React from 'react';
import './hero.css'; 
import heroImage from '../../assets/images/image.jpg';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Nok B&L Costumes</h1>
          <p>Discover the finest costumes for every occasion. Explore our wide range and find your perfect fit today!</p>
          <a href="/service" className="cta-button">Explore Our Services</a>
        </div>
      </section>

      <section className="intro">
        <h2>About Us</h2>
        <p>
          At Nok B&L Costumes, we are passionate about providing high-quality costumes for all events and occasions. 
          From historical attire to fantasy outfits, we have something for everyone. Explore our collections and let 
          your imagination come to life!
        </p>
      </section>

      <section className="features">
        <h2>Featured Services</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Historical Costumes</h3>
            <p>Rent high-quality costumes for any event or occasion.</p>
          </div>
          <div className="feature-card">
            <h3>Cultural Costumes</h3>
            <p>Design and create custom costumes tailored to your specifications.</p>
          </div>
          <div className="feature-card">
            <h3>Fantasy Costumes</h3>
            <p>Find all the accessories you need to complete your costume.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
