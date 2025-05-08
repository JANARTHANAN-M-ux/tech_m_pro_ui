import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WeddingNavbar from './customercomponents/Navbar';

function AdminDashboard() {
  const [loginsToday, setLoginsToday] = useState(0);
  const [bookingsToday, setBookingsToday] = useState(0);
  const [cancellationsToday, setCancellationsToday] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [loginUsers, setLoginUsers] = useState([]);
  const [bookedUsers, setBookedUsers] = useState([]);
  const [cancellationUsers, setCancellationUsers] = useState([]);
  const [showLoginUsers, setShowLoginUsers] = useState(false);
  const [showBookedUsers, setShowBookedUsers] = useState(false);
  const [showCancellationUsers, setShowCancellationUsers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Example of data fetching or mock data
    const todayStats = {
      logins: 120,
      bookings: 30,
      cancellations: 2,
    };

    const loggedInUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const bookedUsersList = ['Alice', 'Bob', 'Charlie'];
    const cancelledUsersList = ['David', 'Eve'];

    setLoginsToday(todayStats.logins);
    setBookingsToday(todayStats.bookings);
    setCancellationsToday(todayStats.cancellations);
    setLoginUsers(loggedInUsers);
    setBookedUsers(bookedUsersList);
    setCancellationUsers(cancelledUsersList);
  }, []);

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/dashboard');
  };

  const handleLoginCardClick = () => {
    setShowLoginUsers(!showLoginUsers);
  };

  const handleBookingsCardClick = () => {
    setShowBookedUsers(!showBookedUsers);
  };

  const handleCancellationsCardClick = () => {
    setShowCancellationUsers(!showCancellationUsers);
  };

  return (
    <>
    <WeddingNavbar/>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      minHeight: '100vh',
      backgroundImage: `url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlZGRpbmclMjBwbGFubmVyfGVufDB8fDB8fHww')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
    }}>
      <h2 style={{
        fontFamily: 'timesnewroman',
        fontSize: '50px',
        color: 'orange',
      }}>
        ADMIN DASHBOARD
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '30px',
      }}>
        <div style={{
          width: '250px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: '12px',
          padding: '20px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} onClick={handleLoginCardClick}>
          <h3>👥 Logins Today</h3>
          <p style={{
            fontSize: '30px',
            fontWeight: '600',
            color: '#ffd700',
          }}>{loginsToday}</p>
        </div>

        <div style={{
          width: '250px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: '12px',
          padding: '20px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} onClick={handleBookingsCardClick}>
          <h3>📦 Bookings Today</h3>
          <p style={{
            fontSize: '30px',
            fontWeight: '600',
            color: '#ffd700',
          }}>{bookingsToday}</p>
        </div>

        <div style={{
          width: '250px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: '12px',
          padding: '20px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} onClick={handleCancellationsCardClick}>
          <h3>❌ Cancellations Today</h3>
          <p style={{
            fontSize: '30px',
            fontWeight: '600',
            color: '#ff5252',
          }}>{cancellationsToday}</p>
        </div>
      </div>

      {/* Login Users List */}
      {showLoginUsers && (
        <div style={{
          marginTop: '30px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: '12px',
          padding: '20px',
          color: 'white',
        }}>
          <h3>Users Who Logged In Today</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {loginUsers.map((user, index) => (
              <li key={index} style={{ fontSize: '18px', margin: '5px 0' }}>{user}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Booked Users List */}
      {showBookedUsers && (
        <div style={{
          marginTop: '30px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: '12px',
          padding: '20px',
          color: 'white',
        }}>
          <h3>Users Who Booked Today</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {bookedUsers.map((user, index) => (
              <li key={index} style={{ fontSize: '18px', margin: '5px 0' }}>{user}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Canceled Users List */}
      {showCancellationUsers && (
        <div style={{
          marginTop: '30px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: '12px',
          padding: '20px',
          color: 'white',
        }}>
          <h3>Users Who Canceled Today</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cancellationUsers.map((user, index) => (
              <li key={index} style={{ fontSize: '18px', margin: '5px 0' }}>{user}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleSubmit} style={{
        marginTop: '40px',
        padding: '15px 30px',
        fontSize: '18px',
        backgroundColor: '#ff6347',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}>
        Refresh Status
      </button>

      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,128,0,0.8)',
          color: 'white',
          padding: '20px',
          borderRadius: '5px',
          fontSize: '18px',
          zIndex: 1000,
          animation: 'fadeIn 1s',
        }}>
          <span>Booking Status Refreshed!</span>
          <button onClick={closePopup} style={{
            
              backgroundColor: '#fff',
              color: 'green',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
          }}>
            Close
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
    </>
  );
}

export default AdminDashboard;
