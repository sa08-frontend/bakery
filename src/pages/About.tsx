import { motion } from 'motion/react';
import { Cookie, Heart, Users, Coffee } from 'lucide-react';
import { AboutScene } from '../components/3d/AboutScene';

export function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-6 font-serif"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From a small kitchen in Pune to a premium artisanal bakery, our journey has been fueled by a passion for perfection and the love for traditional baking.
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white font-serif">The Artisanal Touch</h2>
            <p className="text-gray-400 leading-relaxed">
              We believe that baking is an art form. Every cookie and stick we create is handcrafted with precision, using recipes passed down through generations, enhanced with modern culinary techniques.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our ingredients are sourced from the finest producers around the world—from premium Belgian chocolate to hand-picked California walnuts. No preservatives, no artificial flavors—just pure, honest goodness.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-amber-500">15+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Years of Craft</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-amber-500">50k+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-transparent rounded-[60px] border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full bg-black/40 rounded-[40px] border border-white/5">
                <AboutScene />
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-amber-600 text-white p-6 rounded-3xl shadow-2xl rotate-12">
              <Heart className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl -rotate-12">
              <Users className="w-8 h-8 text-amber-500" />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Coffee, title: "Perfect Pairing", desc: "Our treats are designed to be the perfect companion to your morning coffee or evening tea." },
            { icon: Cookie, title: "Traditional Roots", desc: "We stay true to the authentic flavors that made us famous, while innovating for the modern palate." },
            { icon: Heart, title: "Baked with Love", desc: "Every batch is made with the same care and attention as if it were for our own family." }
          ].map((value, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] text-center space-y-4 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white">{value.title}</h3>
              <p className="text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
