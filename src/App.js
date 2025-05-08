import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './customercomponents/CartContext';

import WeddingLogin from './customercomponents/WeddingLogin';
import WeddingDashboard from './customercomponents/WeddingDashboard';
import WeddingHallsList from './customercomponents/WeddingHallsList';
import PhotographyServicesList from './customercomponents/PhotographyServicesList';
import DecorServicesList from './customercomponents/DecorServicesList';
import CateringServicesList from './customercomponents/CateringServicesList';
import CartPage from './customercomponents/CartPage';
import AdminDashboard from './AdminDashboard'; 
import Navbar from './customercomponents/Navbar';
import AboutUsPage from './customercomponents/About'; // Import AboutUsPage

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WeddingLogin />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/dashboard" element={<WeddingDashboard />} />
          <Route path="/wedding-halls" element={<WeddingHallsList />} />
          <Route path="/photography" element={<PhotographyServicesList />} />
          <Route path="/decor" element={<DecorServicesList />} />
          <Route path="/catering" element={<CateringServicesList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminDashboard />} /> 
          <Route path="/login" element={<WeddingLogin />} />
          <Route path="/about-us" element={<AboutUsPage />} /> {/* Add About Us route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
