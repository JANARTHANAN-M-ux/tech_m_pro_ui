import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import WeddingNavbar from './Navbar';

const cateringServices = [
  {
    name: 'Delicious Delights Catering',
    image: 'https://cdn0.weddingwire.in/vendor/9105/3_2/1280/jpg/caterers-royal-spoon-caterers-catering-setup-1_15_399105-164796636429883.jpeg',
    location: 'Chennai',
    type: 'Traditional South Indian',
    price: 25000,
  },
  {
    name: 'Royal Feast Catering',
    image: 'https://4.imimg.com/data4/BC/QW/MY-3983588/wedding-reception-catering-services-500x500.jpg',
    location: 'Coimbatore',
    type: 'North Indian + Continental',
    price: 35000,
  },
  {
    name: 'Taste of Elegance',
    image: 'https://images.squarespace-cdn.com/content/v1/58599c50f7e0ab8eb8d446db/1529608082256-YEAAGAS249SHTKO35T5O/AdobeStock_83765933.jpeg',
    location: 'Madurai',
    type: 'Wedding Special Menu',
    price: 40000,
  },
  {
    name: 'Lavish Plates Catering',
    image: 'https://www.pandianshospitality.com/images/resources/outdoor.jpg',
    location: 'Trichy',
    type: 'Luxury Banquet Style',
    price: 55000,
  },
  {
    name: 'Gourmet Feast Catering',
    image: 'https://www.nsbcatering.com/wp-content/uploads/2019/02/indianlunch-1024x683.jpg',
    location: 'Salem',
    type: 'Fusion Food + Desserts',
    price: 60000,
  },
];

function CateringServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!selectedService) return;
    addToCart({
      name: selectedService.name,
      price: selectedService.price,
      // you can include other fields if your cart needs them
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/cart');
  };

  return (
    <>
    <WeddingNavbar/>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      minHeight: '100vh',
      backgroundImage: `url('https://handheldcatering.com/wp-content/uploads/2019/01/HandHeld-Catering_4-Awesome-Ideas-for-Organizing-a-Perfect-Private-Event_IMAGE1.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
    }}>
      <h2 style={{
  fontFamily: '"Playfair Display", serif',
  fontSize: '50px',
  textAlign: 'center',
  background: 'linear-gradient(90deg,rgb(5, 161, 133),rgb(3, 70, 44))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  marginTop: '-10px',           
  marginBottom: '10px',  
  animation: 'fadeZoom 2s ease-in-out'
}}>
  INDULGE IN EXQUISITE CATERING SERVICES
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
        {cateringServices.map(service => (
          <label
            key={service.name}
            style={{
              width: '250px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '12px',
              padding: '15px',
              cursor: 'pointer',
              border: selectedService?.name === service.name ? '3px solid #ffd700' : 'none',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={service.image}
              alt={service.name}
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
                name="catering"
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
        <div style={{
          marginTop: '40px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: '20px',
          borderRadius: '12px',
          maxWidth: '500px',
          margin: 'auto'
        }}>
          <h3 className="blinking-text">You selected: {selectedService.name}</h3>
          <p><strong>Location:</strong> {selectedService.location}</p>
          <p><strong>Type:</strong> {selectedService.type}</p>
          <p><strong>Total Price:</strong> ₹{selectedService.price.toLocaleString()}</p>
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
              fontSize: '16px'
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

export default CateringServices;
