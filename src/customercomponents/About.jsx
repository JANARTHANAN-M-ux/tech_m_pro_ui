import React, { useEffect, useState } from 'react';
import WeddingNavbar from './Navbar';

function AboutUsPage() {
  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      color: '#4B2E2E',
      backgroundColor: '#FFF8F0',
      padding: '40px 20px',
      lineHeight: 1.8,
    },
    heroSection: {
      backgroundImage: 'url("https://matrimony.home.blog/wp-content/uploads/2021/09/tamil-wedding.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '100px 20px',
      textAlign: 'center',
      color: '#fff',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '20px',
      borderRadius: '10px',
    },
    heroTitle: {
      fontSize: '3em',
      marginBottom: '20px',
    },
    heroText: {
      fontSize: '1.2em',
    },
    testimonialSection: {
      backgroundColor: '#FFE5B4',
      padding: '60px 20px',
      textAlign: 'center',
    },
    blockquote: {
      fontStyle: 'italic',
      fontSize: '1.5em',
      margin: '0 auto 20px',
      maxWidth: '800px',
    },
    locationsSection: {
      padding: '40px 20px',
      textAlign: 'center',
    },
    locationTitle: {
      fontSize: '2em',
      marginBottom: '10px',
    },
    footer: {
      backgroundColor: '#4B2E2E',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
    },
    footerLink: {
      color: '#FFD700',
      textDecoration: 'none',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '40px',
    },
    serviceCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    servicesSection: {
      marginTop: '60px',
      textAlign: 'center',
    }
  };

  const initialServices = [
    { title: 'Wedding Halls', description: 'Elegant and spacious venues across Tamil Nadu.', icon: '🏰' },
    { title: 'Photography', description: 'Capturing your most beautiful moments.', icon: '📷' },
    { title: 'Catering', description: 'Traditional and modern cuisine for every taste.', icon: '🍽️' },
    { title: 'Decoration', description: 'Stunning floral and thematic decor setups.', icon: '🌸' },
  ];

  const [services, setServices] = useState(initialServices);

  // Shuffle the services every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setServices((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      <WeddingNavbar />

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>We Craft Heartfelt Weddings</h1>
          <p style={styles.heroText}>
            We are a crew of passionate wedding planners and creative prodigies who find joy in curating unforgettable moments,
            blending tradition with elegance to make your special day timeless.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section style={styles.testimonialSection}>
        <blockquote style={styles.blockquote}>
        At Aaha Kalyanam, we don’t just plan weddings; we curate magical experiences that bring your dreams to life.
          We are a dedicated team of wedding experts who believe that every couple deserves a wedding that is as extraordinary and unique as their love story.
          From the grandest wedding halls to the smallest details of decor, catering, and photography, we specialize in transforming every moment into a celebration of love.
          Our mission is to ensure that your wedding day is stress-free, memorable, and filled with joy.
          With attention to every detail, creativity in every corner, and love in every gesture, Aaha Kalyanam turns your wedding day into an enchanting celebration that lasts a lifetime.
        </blockquote>
      </section>

      {/* Services Section (Dynamic Boxes) */}
      <section style={styles.servicesSection}>
        <h2 style={{ fontSize: '2em' }}>Our Services</h2>
        <div style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div key={idx} style={styles.serviceCard}>
              <div style={{ fontSize: '2em' }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section style={styles.locationsSection}>
        <h2 style={styles.locationTitle}>📍 Our Presence</h2>
        <p>Salem | Madurai | Chennai | Coimbatore | Trichy</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Aaha Kalyanam & Celebrations. All Rights Reserved.</p>
        <p>
          Contact:{' '}
          <a href="mailto:janarthanan03072004@gmail.com" style={styles.footerLink}>
            janarthanan03072004@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default AboutUsPage;
