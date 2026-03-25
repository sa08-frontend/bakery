import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BakeryScene } from '../components/3d/BakeryScene';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../types';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';

export function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <BakeryScene />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-amber-500 uppercase bg-amber-500/10 border border-amber-500/20 rounded-full">
              Artisanal & Handcrafted
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif tracking-tight">
              The Art of <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Fine Baking
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the luxury of premium cookies and sticks, crafted with the finest ingredients and a touch of magic.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full flex items-center space-x-2 transition-all hover:scale-105 shadow-xl shadow-amber-900/20"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Star, title: "Premium Quality", desc: "Only the finest organic ingredients sourced globally." },
              { icon: ShieldCheck, title: "Freshly Baked", desc: "Every order is baked fresh to ensure maximum flavor." },
              { icon: Truck, title: "Express Delivery", desc: "Safe and fast delivery to your doorstep in 24 hours." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 font-serif">Featured Delights</h2>
              <p className="text-gray-400">Our most loved artisanal creations.</p>
            </div>
            <Link to="/products" className="text-amber-500 font-bold flex items-center space-x-2 hover:text-amber-400 transition-colors">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
