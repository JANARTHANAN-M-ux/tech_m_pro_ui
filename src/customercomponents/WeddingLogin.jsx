// WeddingLogin.js
import React from 'react';
import './WeddingLogin.css';
import { useNavigate } from 'react-router-dom';

function WeddingLogin() {
  const navigate = useNavigate();

  // track logins/bookings in localStorage
  const updateAdminStats = (type) => {
    const today = new Date().toDateString();
    let stats = JSON.parse(localStorage.getItem('adminStats')) || { date: today, logins: 0, bookings: 0 };
    if (stats.date !== today) {
      stats = { date: today, logins: 0, bookings: 0 };
    }
    stats[type] += 1;
    localStorage.setItem('adminStats', JSON.stringify(stats));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // increment today's login count
    updateAdminStats('logins');
    // normally you'd do real auth here...
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <h1 id="h1">AAHA KALYANAM</h1>
      <div className="form">
        <form onSubmit={handleLogin}>
          <input 
            required 
            type="text" 
            placeholder="Username" 
            id="button" 
          /><br />
          <input 
            required 
            type="password" 
            placeholder="Password" 
            id="button" 
          /><br />
          <button id="button" type="submit">
            Login
          </button><br />
        </form>
      </div>
    </div>
  );
}

export default WeddingLogin;
