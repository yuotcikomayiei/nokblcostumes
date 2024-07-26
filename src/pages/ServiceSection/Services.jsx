import React from 'react';
import './Services.css'; // Create a CSS file for styling

const servicesData = [
  {
    title: 'Seasonal Costumes',
    description: 'Rent high-quality costumes for any event or occasion. Choose from a wide range of options to fit your needs and budget.',
  },
  {
    title: 'Custom Costumes',
    description: 'Design and create custom costumes tailored to your specifications. Perfect for unique themes and special requirements.',
  },
  {
    title: 'Costume Accessories',
    description: 'Find all the accessories you need to complete your costume, including hats, masks, and props.',
  },
  {
    title: 'Cultural Costumes',
    description: 'Organize themed parties with our exclusive costume packages. We provide costumes, decorations, and party planning services.',
  },
  {
    title: 'Fantasy Costumes',
    description: 'Organize themed parties with our exclusive costume packages. We provide costumes, decorations, and party planning services.',
  },
  {
    title: 'Historical Costumes',
    description: 'Organize themed parties with our exclusive costume packages. We provide costumes, decorations, and party planning services.',
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-header">{service.title}</h3>
            <p className="service-content">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
