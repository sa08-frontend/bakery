import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { CookieModel, StickModel } from './3d/Models';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { motion } from 'motion/react';
import { ShoppingCart, Plus, Minus, Rotate3d } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart!`, {
      style: {
        background: '#1a1a1a',
        color: '#f59e0b',
        border: '1px solid #333',
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-amber-500/30"
    >
      <div className="h-64 relative cursor-grab active:cursor-grabbing">
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
            <Rotate3d className="w-4 h-4 text-amber-500 animate-pulse" />
          </div>
        </div>
        
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          
          <group rotation={[0.2, 0, 0]}>
            {product.modelType === 'cookie' ? (
              <CookieModel 
                color={product.color} 
                hover={hovered} 
                scale={1.2} 
                name={product.name}
              />
            ) : (
              <StickModel color={product.color} hover={hovered} scale={0.8} />
            )}
          </group>
          
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            makeDefault 
            autoRotate={!hovered}
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-500">
            ₹{product.price}
          </span>
          
          <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/5">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 hover:text-amber-500 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 hover:text-amber-500 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-lg shadow-amber-900/20"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}
