import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SuccessScene } from '../components/3d/SuccessScene';

export function Success() {
  React.useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 text-center"
      >
        <SuccessScene />
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4 font-serif">Order Success!</h1>
        <p className="text-gray-400 mb-10">
          Thank you for choosing Premium Bakery. Your artisanal treats are being prepared and will be with you shortly.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-2xl transition-all"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="block w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center space-x-2"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="mt-12 text-[10px] text-gray-600 uppercase tracking-widest">
          A confirmation email has been sent to your inbox.
        </p>
      </motion.div>
    </div>
  );
}
