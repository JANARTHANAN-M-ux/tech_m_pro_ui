import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WeddingLogin.css';
import WeddingNavbar from './Navbar';
import WeddingFooter from './WeddingFooter';
import WeddingImageCarousel from './slides';


function WeddingDashboard() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
    <div className="dashboard">
    <WeddingNavbar />
    <WeddingImageCarousel /><br/>
      <h2 id='h2'>To love and be loved is to feel the sun from both sides.</h2><br/>
      <div className="cards-container">
        <div className="card" onClick={() => handleCardClick('/wedding-halls')}>
          <h3>Wedding Halls</h3>
        </div>
        <div className="card" onClick={() => handleCardClick('/photography')}>
          <h3>Photography Services</h3>
        </div>
        <div className="card" onClick={() => handleCardClick('/decor')}>
          <h3>Decor Services</h3>
        </div>
        <div className="card" onClick={() => handleCardClick('/catering')}>
          <h3>Catering Services</h3>
        </div>
        <div className="card" onClick={() => handleCardClick('/cart')}>
          <h3>🛒 View Cart</h3>
        </div>
        <div className="card" onClick={() => handleCardClick('/admin')}>
          <h3>Admin Panel</h3>
        </div>
      </div>
    </div><br/><br/><br/><br/><br/><br/>
    <WeddingFooter />
    </>
  );
}

export default WeddingDashboard;