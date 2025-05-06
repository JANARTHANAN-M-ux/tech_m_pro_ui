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

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WeddingLogin />} />
          <Route path="/dashboard" element={<WeddingDashboard />} />
          <Route path="/wedding-halls" element={<WeddingHallsList />} />
          <Route path="/photography" element={<PhotographyServicesList />} />
          <Route path="/decor" element={<DecorServicesList />} />
          <Route path="/catering" element={<CateringServicesList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
