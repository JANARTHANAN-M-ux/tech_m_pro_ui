import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import WeddingNavbar from './Navbar';

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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiatUVlzML2DVt3liAU_tvwwm9ZJC875MRkfYAlm6TmedU5YNGQg&s=10&ec=72940544',
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
    <WeddingNavbar />
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
      <h2 style={{
  fontFamily: '"Playfair Display", serif',
  fontSize: '49px',
  textAlign: 'center',
  background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(139, 38, 92))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(246, 243, 243, 0.3)',
  marginTop: '-10px',           
  marginBottom: '10px',  
  animation: 'fadeZoom 2s ease-in-out'
}}>
  DESIGN YOUR PERFECT WEDDING AMBIENCE
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
        {decorServices.map((service) => (
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
                name="decor"
                onChange={() => setSelectedService(service)}
              />{' '}
              <strong>{service.name}</strong>
              <p style={{ margin: '5px 0' }}>{service.location}</p>
              <p style={{ margin: '5px 0' }}>{service.style}</p>
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
            backgroundColor: 'rgba(0,0,0,0.8)',
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
            <strong>Style:</strong> {selectedService.style}
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
          <span> <strong>{selectedService.name}</strong> has been booked successfully!</span>
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
