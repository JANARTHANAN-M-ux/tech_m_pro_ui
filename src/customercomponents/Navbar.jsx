import React from 'react';
import { useNavigate } from 'react-router-dom';

function WeddingNavbar() {
  const navigate = useNavigate();

  const serviceItems = [
    { name: 'About Us', path:'/about-us' },
    { name: 'Wedding Halls', path: '/wedding-halls' },
    { name: 'Photography', path: '/photography' },
    { name: 'Decor', path: '/decor' },
    { name: 'Catering', path: '/catering' },
  ];

  const cartAdminItems = [
    { name: '🛒 Cart', path: '/cart' },
    //{ name: 'Admin', path: '/admin' },
  ];

  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #fff5e6, #ffd1a4)',
    backgroundColor: '#fff',
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const logoImgStyle = {
    height: '50px',
    width: 'auto',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const navItemStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    transition: 'color 0.3s, transform 0.2s',
  };

  const navItemHoverStyle = {
    color: '#e91e63',
    transform: 'scale(1.05)',
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, navItemHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, { color: '#333', transform: 'scale(1)' });
  };

  const handleLogout = () => {
    // Clear user session data
    localStorage.clear(); // or localStorage.removeItem('token')
    navigate('/login'); // redirect to login page
  };

  return (
    <div style={navbarStyle}>
      {/* Left: Logo + Services */}
      <div style={leftSectionStyle}>
        <img
          src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/2770/1738140262770-t"
          alt="Logo"
          style={logoImgStyle}
          onClick={() => navigate('/dashboard')}
        />
        {serviceItems.map((item, index) => (
          <div
            key={index}
            style={navItemStyle}
            onClick={() => navigate(item.path)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Right: Cart, Admin, Logout */}
      <div style={rightSectionStyle}>
        {cartAdminItems.map((item, index) => (
          <div
            key={index}
            style={navItemStyle}
            onClick={() => navigate(item.path)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
          </div>
        ))}
        {/* Logout Button */}
        <div
          style={navItemStyle}
          onClick={handleLogout}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
           Logout
        </div>
      </div>
    </div>
  );
}

export default WeddingNavbar;
