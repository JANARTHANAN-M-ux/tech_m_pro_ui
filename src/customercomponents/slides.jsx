import React, { useState, useEffect } from 'react';

function WeddingImageCarousel() {
  const images = [
    'https://i.pinimg.com/736x/9d/cd/fb/9dcdfb09eee39cedba8bb80227bcd191.jpg',
    'https://i.pinimg.com/736x/41/91/c9/4191c936c76f89b5a0ac137a8f8d2a92.jpg',
    'https://i.pinimg.com/736x/57/37/2b/57372b31e4ffb45aa7a08de951619237.jpg',
    'https://i.pinimg.com/736x/85/bc/7e/85bc7ee83ef61306fdcbe9eede83bdf8.jpg',
    'https://media.istockphoto.com/id/1186214696/photo/hindu-wedding-ritual-wherein-bride-and-groom-hand.jpg?s=612x612&w=0&k=20&c=fTlNejRdY7dkvk742auNgI3j6Ve9UqqWSnb3QJ-D2gw=',
    'https://www.theknot.com/tk-media/images/354958f7-9d64-46d5-90ca-8f7847253ba3.jpg',
    'https://vizagpellipoolajada.com/wp-content/uploads/2024/06/5-2.webp',
    'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKaq06thsCQvMxVHZLJIt-jSX-6atRiTz3MfgAMepsWrf2tM43A&s=10&ec=72940544',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0rf_UJC9YKBrHyaOz9PcALGVoa8LlNIJx0UGZywgW5hAePOytA&s=10&ec=72940544',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzY8_NS1-Hr_kS-3LlOhkaRfWfldzPXI5hi2NPzGLJmnApLCJdXw&s=10&ec=72940544',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300);
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  const goToImage = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 300);
  };

  const carouselContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#fff6e6', // light orange
    borderRadius: '20px',
  };

  const carouselStyle = {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  };

  const carouselImageStyle = {
    width: '800px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    opacity: fade ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '24px',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    borderRadius: '50%',
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: '10px',
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '10px',
  };

  const dotContainerStyle = {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
  };

  const dotStyle = (index) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: index === currentIndex ? '#ff6600' : '#ccc',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  });

  return (
    <div style={carouselContainerStyle}>
      <div style={carouselStyle}>
        <button style={prevButtonStyle} onClick={prevImage}>
          ❮
        </button>
        <img
          src={images[currentIndex]}
          alt={`Wedding ${currentIndex + 1}`}
          style={carouselImageStyle}
        />
        <button style={nextButtonStyle} onClick={nextImage}>
          ❯
        </button>
      </div>
      <div style={dotContainerStyle}>
        {images.map((_, index) => (
          <div
            key={index}
            style={dotStyle(index)}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default WeddingImageCarousel;
