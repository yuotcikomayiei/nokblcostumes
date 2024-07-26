import React from 'react';
import './about.css'; // Create a CSS file for styling
import aboutImage from '../../assets/images/mission.png'; // Import images
import missionImage from '../../assets/images/about-us.png';
import visionImage from '../../assets/images/vision.png';

const aboutData = [
  {
    Title: 'About Us',
    Desc: 'Nok B&L Costumes is dedicated to providing high-quality costumes for all events and occasions. From historical attire to fantasy outfits, we have something for everyone. Our mission is to bring your imagination to life with our extensive collection of costumes and accessories.'
  }
]
const About = () => {
  return (
    <div className="about">
      {aboutData.map((about, index) => (
      <section className="about-us" key={index}>
        <img src={missionImage} alt="About Us" className="about-image" />
        <div className="about-content">
          <h2>{about.Title}</h2>
          <p>{about.Desc}</p>
        </div>
      </section>
      ))}
      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to offer a diverse range of costumes and accessories that inspire creativity 
            and bring joy to our customers. We aim to be the go-to source for all costume needs, providing 
            exceptional service and quality products.
          </p>
        </div>
        <img src={aboutImage} alt="Mission" className="mission-image" />
      </section>
      <section className="vision">
        <img src={visionImage} alt="Vision" className="vision-image" />
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the leading costume provider, known for our innovation, quality, and 
            customer satisfaction. We strive to expand our offerings and reach more customers, making 
            costumes accessible and enjoyable for everyone.
          </p>
        </div>
      </section>
      <section className="core-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Creativity: We believe in the power of imagination and encourage our customers to express themselves.</li>
          <li>Quality: We are committed to providing the highest quality products and services.</li>
          <li>Customer Satisfaction: Our customers are our top priority, and we strive to exceed their expectations.</li>
          <li>Integrity: We conduct our business with honesty and integrity.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
