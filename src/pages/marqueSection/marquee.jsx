import React from 'react';
import './marquee.css'; // Create a CSS file for styling
import partner1 from '../../assets/images/vi.png';
import partner2 from '../../assets/images/mtn.png';
import partner3 from '../../assets/images/zain.png';
import partner4 from '../../assets/images/jio.png';
import partner5 from '../../assets/images/kkt.png';
import partner6 from '../../assets/images/airbnb.png';
import partner7 from '../../assets/images/amazon.png';
import partner8 from '../../assets/images/alibaba.png';
import partner9 from '../../assets/images/bmw.jpg'
import partner10 from '../../assets/images/digitel.png'
const Marquee = () => {
  return (
    <section className="marquee">
     <h2>Our Partners</h2>
      <div className="marquee-content">
        <img src={partner1} alt="Partner 1" />
        <img src={partner2} alt="Partner 2" />
        <img src={partner3} alt="Partner 3" />
        <img src={partner4} alt="Partner 4" />
        <img src={partner5} alt="Partner 5" />
        <img src={partner6} alt="Partner 5" />
        <img src={partner7} alt="Partner 5" />
        <img src={partner8} alt="Partner 5" />
        <img src={partner9} alt="Partner 5" />
        <img src={partner10} alt="Partner 5" />
      </div>
    </section>
  );
}

export default Marquee;
