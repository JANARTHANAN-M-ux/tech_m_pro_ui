import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function WeddingFooter() {
  const footerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #fff5e6, #ffd1a4)',
    borderTop: '1px solid #ddd',
    marginTop: '40px',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '10px',
  };

  const iconStyle = {
    fontSize: '24px',
    color: '#555',
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  const iconHoverStyle = {
    color: '#e91e63',
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, iconHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, { color: '#555' });
  };

  return (
    <div style={footerStyle}>
      <div style={iconContainerStyle}>
        <FaLinkedin
          id="linkedin"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <FaFacebook
          id="facebook"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <FaInstagram
          id="instagram"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div style={{ fontSize: '14px', color: '#777' }}>
        © 2025 All rights reserved
      </div>
    </div>
  );
}

export default WeddingFooter;