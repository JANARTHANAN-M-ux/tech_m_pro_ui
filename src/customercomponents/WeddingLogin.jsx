import React, { useState } from 'react';
import './WeddingLogin.css';
import { useNavigate } from 'react-router-dom';

function WeddingLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminEmail = 'admin@aaha.com';

  const updateAdminStats = (type) => {
    const today = new Date().toDateString();
    let stats = JSON.parse(localStorage.getItem('adminStats')) || {
      date: today,
      logins: 0,
      bookings: 0,
    };

    if (stats.date !== today) {
      stats = { date: today, logins: 0, bookings: 0 };
    }

    stats[type] += 1;
    localStorage.setItem('adminStats', JSON.stringify(stats));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    updateAdminStats('logins');

    if (email.trim().toLowerCase() === adminEmail.toLowerCase()) {
      navigate('/admin'); // Admin dashboard
    } else {
      navigate('/dashboard'); // Customer dashboard
    }
  };

  return (
    <div className="login">
      <h1 id="h1">AAHA KALYANAM</h1>
      <div className="form">
        <form onSubmit={handleLogin}>
          <input
            required
            type="email"
            placeholder="Enter Your Email"
            id="button"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <input
            required
            type="password"
            placeholder="Password"
            id="button"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button id="button" type="submit"><b>Login</b></button><br />
        </form>
      </div>
    </div>
  );
}

export default WeddingLogin;
