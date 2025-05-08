import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import WeddingNavbar from './Navbar';

const weddingHalls = [
  {
    name: 'Royal Palace Hall',
    image: 'https://peshawarservicesclub.com/assets/img/halls/banquet/hall_3.jpg',
    location: 'Chennai',
    capacity: '500 Guests',
    price: 150000,
  },
  {
    name: 'Grand Imperial Banquet',
    image: 'https://media.weddingz.in/images/98f04ba5781017a6989957cb75971c2e/banquet-halls-in-howrah-to-help-you-plan-the-most-special-day-of-your-life.jpg',
    location: 'Coimbatore',
    capacity: '350 Guests',
    price: 125000,
  },
  {
    name: 'Heritage Garden Venue',
    image: 'https://i.pinimg.com/originals/a4/c3/6d/a4c36d8798b4dc04d64aad1b8edf2743.jpg',
    location: 'Madurai',
    capacity: '600 Guests',
    price: 175000,
  },
  {
    name: 'Elegant Blossoms Hall',
    image: 'https://oaktreemanor.net/wp-content/uploads/2019/09/otm-reception.jpg',
    location: 'Trichy',
    capacity: '250 Guests',
    price: 90000,
  },
  {
    name: 'Skyview Marriage Mahal',
    image: 'https://i1.wp.com/www.theweddingvowsg.com/wp-content/uploads/2020/04/sankalana-wedding-venues-sri-lanka.jpg?w=900&ssl=1',
    location: 'Salem',
    capacity: '400 Guests',
    price: 110000,
  },
];

function WeddingHalls() {
  const [selectedHall, setSelectedHall] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedHall) {
      addToCart({
        ...selectedHall,
        // normalize property names to match your cart context (e.g. name & price)
        name: selectedHall.name,
        price: selectedHall.price,
      });
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/cart');
  };

  return (
    <>
    <WeddingNavbar />
    <div style={{
      textAlign: 'center',
      padding: '40px',
      minHeight: '100vh',
      backgroundImage: `url('https://valura.in/wp-content/uploads/2024/11/Things-to-Check-Before-Booking-a-Wedding-Hall-in-Bangalore.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
    }}>
      <h2 style={{
  fontFamily: '"Playfair Display", serif',
  fontSize: '60px',
  textAlign: 'center',
  background: 'linear-gradient(90deg,rgb(244, 77, 77),rgb(228, 135, 82))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  marginTop: '-10px',           
  marginBottom: '10px',  
  animation: 'fadeZoom 2s ease-in-out'
}}>
  CHOOSE YOUR WEDDING HALL
</h2>

<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  @keyframes fadeZoom {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`}</style>


      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '30px'
      }}>
        {weddingHalls.map(hall => (
          <label
            key={hall.name}
            style={{
              width: '250px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '12px',
              padding: '15px',
              cursor: 'pointer',
              border: selectedHall?.name === hall.name ? '3px solid #ffd700' : 'none',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={hall.image}
              alt={hall.name}
              style={{
                width: '100%',
                height: '160px',
                borderRadius: '10px',
                objectFit: 'cover'
              }}
            />
            <div style={{ marginTop: '10px' }}>
              <input
                type="radio"
                name="weddingHall"
                onChange={() => setSelectedHall(hall)}
              />{' '}
              <strong>{hall.name}</strong>
              <p style={{ margin: '5px 0' }}>{hall.location}</p>
              <p style={{ margin: '5px 0' }}>{hall.capacity}</p>
              <p style={{ fontWeight: 'bold', color: '#ffd700' }}>
                ₹{hall.price.toLocaleString()}
              </p>
            </div>
          </label>
        ))}
      </div>

      {selectedHall && (
        <div style={{
          marginTop: '40px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: '20px',
          borderRadius: '12px',
          maxWidth: '500px',
          margin: 'auto'
        }}>
          <h3 className="blinking-text">You selected: {selectedHall.name}</h3>
          <p><strong>Location:</strong> {selectedHall.location}</p>
          <p><strong>Capacity:</strong> {selectedHall.capacity}</p>
          <p><strong>Total Price:</strong> ₹{selectedHall.price.toLocaleString()}</p>
          <button
            onClick={handleSubmit}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#ff6347',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Add To Cart
          </button>
        </div>
      )}

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
          animation: 'fadeIn 1s'
        }}>
          <span><strong>{selectedHall.name}</strong> has been added to cart!</span>
          <button
            onClick={closePopup}
            style={{
              backgroundColor: '#fff',
              color: 'green',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Go to Cart
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .blinking-text {
          animation: blinker 1s linear infinite;
          color: #f9d342;
        }
        @keyframes blinker {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
    </>
  );
}

export default WeddingHalls;
