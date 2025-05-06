import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [today, setToday] = useState(new Date().toDateString());
  const [loginsToday, setLoginsToday] = useState(0);
  const [bookingsToday, setBookingsToday] = useState(0);

  // Simulated login and booking fetch from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('adminStats')) || {};
    if (storedData.date === today) {
      setLoginsToday(storedData.logins || 0);
      setBookingsToday(storedData.bookings || 0);
    } else {
      // New day – reset
      localStorage.setItem('adminStats', JSON.stringify({ date: today, logins: 0, bookings: 0 }));
    }
  }, [today]);

  const resetStats = () => {
    localStorage.setItem('adminStats', JSON.stringify({ date: today, logins: 0, bookings: 0 }));
    setLoginsToday(0);
    setBookingsToday(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Dashboard</h1>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>👥 Logins Today</h3>
          <p style={styles.count}>{loginsToday}</p>
        </div>
        <div style={styles.card}>
          <h3>📦 Bookings Today</h3>
          <p style={styles.count}>{bookingsToday}</p>
        </div>
      </div>
      <button style={styles.button} onClick={resetStats}>Reset Stats</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  header: {
    fontSize: '36px',
    marginBottom: '30px'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginBottom: '30px'
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    minWidth: '200px'
  },
  count: {
    fontSize: '30px',
    color: '#3f51b5',
    fontWeight: 'bold'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default AdminDashboard;
