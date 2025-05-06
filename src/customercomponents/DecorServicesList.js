// DecorServices.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const decorServices = [
  {
    name: 'Royal Theme Decor',
    image: 'https://roowedding.com/wp-content/uploads/2017/04/15403488_105652709932599_3003916688216293376_n.jpg',
    location: 'Chennai',
    style: 'Traditional + Royal Setup',
    price: 60000,
  },
  {
    name: 'Floral Fantasy',
    image: 'https://www.shaadidukaan.com/editor-img/image/decoration/stage-decoration/floral-strings.jpg',
    location: 'Coimbatore',
    style: 'Flower-Based Theme',
    price: 45000,
  },
  {
    name: 'Elegant Lights & Drapes',
    image: 'https://matrimonialgurus.com/wp-content/uploads/2021/07/decorate-wedding-mandap-flowers-beautiful-flower-decoration-ideas-wedding-day-1.jpeg',
    location: 'Madurai',
    style: 'Indoor Light & Fabric',
    price: 40000,
  },
  {
    name: 'Garden Dreamscape',
    image: 'https://i.pinimg.com/originals/12/e9/cf/12e9cf1798b11924b1eec0bd6fe3d117.png',
    location: 'Trichy',
    style: 'Outdoor Garden Decor',
    price: 55000,
  },
  {
    name: 'Minimalistic Modern Touch',
    image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2023/8/Heaven_4_0_1200.jpg',
    location: 'Salem',
    style: 'Modern Minimal Theme',
    price: 35000,
  },
];

export default function DecorServices() {
  const [selectedDecor, setSelectedDecor] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!selectedDecor) return;
    addToCart(selectedDecor);
    setShowPopup(true);

    // after 1.5s, hide popup and go to cart
    setTimeout(() => {
      setShowPopup(false);
      navigate('/cart');
    }, 1500);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px',
        minHeight: '100vh',
        backgroundImage:
          'url(http://i.pinimg.com/originals/3d/6c/95/3d6c95ba4baa025bbed3d6927f8f6a01.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <h2
        style={{
          fontFamily: 'timesnewroman',
          fontSize: '50px',
          color: 'black',
          marginBottom: '30px',
        }}
      >
        ENJOY WITH YOUR FAVOURITE DECOR
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {decorServices.map((decor) => (
          <label
            key={decor.name}
            style={{
              width: '250px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '12px',
              padding: '15px',
              cursor: 'pointer',
              border:
                selectedDecor?.name === decor.name
                  ? '3px solid #ffd700'
                  : 'none',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={decor.image}
              alt={decor.name}
              style={{
                width: '100%',
                height: '160px',
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
            <div style={{ marginTop: '10px' }}>
              <input
                type="radio"
                name="decor"
                onChange={() => setSelectedDecor(decor)}
              />{' '}
              <strong>{decor.name}</strong>
              <p style={{ margin: '5px 0' }}>{decor.location}</p>
              <p style={{ margin: '5px 0' }}>{decor.style}</p>
              <p style={{ fontWeight: 'bold', color: '#ffd700' }}>
                ₹{decor.price.toLocaleString()}
              </p>
            </div>
          </label>
        ))}
      </div>

      {selectedDecor && (
        <div
          style={{
            marginTop: '40px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '20px',
            borderRadius: '12px',
            maxWidth: '500px',
            margin: 'auto',
          }}
        >
          <h3 className="blinking-text">
            You selected: {selectedDecor.name}
          </h3>
          <p>
            <strong>Location:</strong> {selectedDecor.location}
          </p>
          <p>
            <strong>Theme:</strong> {selectedDecor.style}
          </p>
          <p>
            <strong>Total Price:</strong> ₹
            {selectedDecor.price.toLocaleString()}
          </p>
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
              fontSize: '16px',
            }}
          >
            Submit
          </button>
        </div>
      )}

      {showPopup && (
        <div
          style={{
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
          }}
        >
          <span>Your decor service has been added to cart!</span>
          <button
            onClick={closePopup}
            style={{
              marginLeft: '20px',
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            ✖
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        .blinking-text {
          animation: blinker 1s linear infinite;
          color: #f9d342;
        }
        @keyframes blinker {
          50% {opacity: 0;}
        }
      `}</style>
    </div>
  );
}
