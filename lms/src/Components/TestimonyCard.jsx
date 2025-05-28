import React from 'react';
import './TestimonyCard.css';

const TestimonyCard = ({ name, designation, image, testimonial }) => {
  return (
    <div className='t-card-box'>
      <div className="t-card-top">
        <div className="t-card-img">
          <img src={image} alt={name} />
        </div>
        <div className="t-card-top-content">
          <div className="t-card-name">
            <h3>{name}</h3>
          </div>
          <div className="t-card-description">
            <p>{designation}</p>
          </div>
        </div>
      </div>
      <div className="t-card-bottom">
        <div className="t-card-content">
          <p>{testimonial}</p>
        </div>
        <a href="#">Read more</a>
      </div>
    </div>
  );
};

export default TestimonyCard;
