import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'; 
import ProductDetails from './components/ProductDetails/ProductDetails'; 
import HelpCenter from './components/HelpCenter/HelpCenter';  
import Faq from './components/HelpCenter/Faq'; 
import Contact from './components/HelpCenter/Contact';  
import NavbarComponent from './components/Navbar/NavbarComponent';  
import Footer from './components/Footer/Footer';  
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/help/faq" element={<Faq />} />
        <Route path="/help/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
