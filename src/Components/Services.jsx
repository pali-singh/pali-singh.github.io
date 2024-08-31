import React from 'react';
import './Services.css';

const Service = () => {
  return (
    <section className="services">
      <h2>My Skills</h2>
      <div className="services-list">
        <div className="service-item">
          <i className="fas fa-code"></i>
          <h3>Web Development</h3>
          <p>Creating responsive and dynamic websites using the latest technologies.</p>
        </div>
        <div className="service-item">
          <i className="fas fa-mobile-alt"></i>
          <h3>Mobile Development</h3>
          <p>Developing mobile applications for both iOS and Android platforms.</p>
        </div>
        <div className="service-item">
          <i className="fas fa-paint-brush"></i>
          <h3>UI/UX Design</h3>
          <p>Designing user-friendly and visually appealing interfaces.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
