// PhotographyServices.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import WeddingNavbar from './Navbar';

const photographyServices = [
  {
    name: 'Candid Moments Studio',
    image: 'https://i.pinimg.com/736x/fb/9f/e4/fb9fe4e7a00b987411fb5bf8f33c646c.jpg',
    location: 'Chennai',
    type: 'Candid Photography',
    price: 45000,
  },
  {
    name: 'Golden Frame Creatives',
    image: 'https://www.hockwoldhallnorfolk.com/wp-content/uploads/2017/02/wedding-photographer.jpg',
    location: 'Coimbatore',
    type: 'Traditional + Candid Combo',
    price: 60000,
  },
  {
    name: 'Timeless Tales Studio',
    image: 'https://www.findabusinessthat.com/blog/wp-content/uploads/2018/07/wedding-photographer.jpeg',
    location: 'Madurai',
    type: 'Traditional Photography',
    price: 35000,
  },
  {
    name: 'Royal Clicks Photography',
    image: 'https://www.njwedding.com/pictures/profile/cropped-jon-santos-brick-nj-526.png',
    location: 'Trichy',
    type: 'Cinematic Wedding Film',
    price: 70000,
  },
  {
    name: 'Elegant Lens Art',
    image: 'https://i.pinimg.com/originals/b4/bb/5f/b4bb5fa2727e5d7698b297ddd0a52ce5.jpg',
    location: 'Salem',
    type: 'Pre-Wedding + Wedding',
    price: 80000,
  },
];

export default function PhotographyServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!selectedService) return;
    addToCart(selectedService);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/cart');
  };

  return (
    <>
    <WeddingNavbar/>
    <div
      style={{
        textAlign: 'center',
        padding: '40px',
        minHeight: '100vh',
        backgroundImage:
          'url(https://wallpaperbat.com/img/381562-wedding-picture-wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <h2 style={{
  fontFamily: '"Playfair Display", serif',
  fontSize: '48px',
  textAlign: 'center',
  background: 'linear-gradient(90deg,rgb(3, 3, 3),rgb(228, 135, 82))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  marginTop: '-10px',           
  marginBottom: '10px',  
  animation: 'fadeZoom 2s ease-in-out'
}}>
  SELECT THE LENS THAT CAPTURE YOUR BEAUTY
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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {photographyServices.map((service) => (
          <label
            key={service.name}
            style={{
              width: '250px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '12px',
              padding: '15px',
              cursor: 'pointer',
              border:
                selectedService?.name === service.name
                  ? '3px solid #ffd700'
                  : 'none',
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          >
            <img
              src={service.image}
              alt={service.name}
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
                name="photography"
                onChange={() => setSelectedService(service)}
              />{' '}
              <strong>{service.name}</strong>
              <p style={{ margin: '5px 0' }}>{service.location}</p>
              <p style={{ margin: '5px 0' }}>{service.type}</p>
              <p style={{ fontWeight: 'bold', color: '#ffd700' }}>
                ₹{service.price.toLocaleString()}
              </p>
            </div>
          </label>
        ))}
      </div>

      {selectedService && (
        <div
          style={{
            marginTop: '40px',
            backgroundColor: 'rgba(12,1,1,0.9)',
            padding: '20px',
            borderRadius: '12px',
            maxWidth: '500px',
            margin: 'auto',
          }}
        >
          <h3 className="blinking-text">
            You selected: {selectedService.name}
          </h3>
          <p>
            <strong>Location:</strong> {selectedService.location}
          </p>
          <p>
            <strong>Type:</strong> {selectedService.type}
          </p>
          <p>
            <strong>Total Price:</strong> ₹
            {selectedService.price.toLocaleString()}
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
           Add To Cart
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
          <span><strong>{selectedService.name}</strong> has been booked successfully!</span>
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
    </>
  );
}
