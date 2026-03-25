import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { GlobalBackground } from './components/3d/GlobalBackground';
import { FooterScene } from './components/3d/FooterScene';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30 selection:text-amber-200">
        <GlobalBackground />
        <ScrollToTop />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        
        <footer className="bg-black border-t border-white/5 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <FooterScene />
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent font-serif italic">
                Premium Bakery
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
              Crafting artisanal delights with passion and precision since 2010. 
              Experience the luxury of fine baking.
            </p>
            <div className="flex justify-center space-x-8 text-xs uppercase tracking-widest text-gray-600 font-bold">
              <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Twitter</a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 text-[10px] text-gray-700 uppercase tracking-widest">
              © 2026 Premium 3D Bakery Store. All rights reserved.
            </div>
          </div>
        </footer>

        <Toaster position="bottom-right" theme="dark" closeButton />
      </div>
    </Router>
  );
}
