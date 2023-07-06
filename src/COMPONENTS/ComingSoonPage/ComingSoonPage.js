import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ComingSoonPage.css'; // Import the CSS file for styling

const ComingSoonPage = () => {
  return (
    <div className="container">
      <div className="card_coming_soon">
        <div className="title">Coming Soon</div>
        <div className="subtitle">UNDER CONSTRUCTION</div>
        <Link to='/'><Button variant="outline-primary" size="lg">BACK TO HOME</Button></Link>
      </div>
    </div>
  );
};

export default ComingSoonPage;