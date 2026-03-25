import { motion } from 'motion/react';
import { useCartStore } from '../store/useCartStore';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-12 h-12 text-gray-600" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Your cart is empty</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Looks like you haven't added any of our artisanal treats yet. 
          Explore our collection and find something delicious!
        </p>
        <Link
          to="/products"
          className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12 font-serif">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="w-24 h-24 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍪</span>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                  <p className="text-amber-500 font-bold">₹{item.price}</p>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/5">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:text-amber-500 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:text-amber-500 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-3 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sticky top-32">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-amber-500">₹{total}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all shadow-xl shadow-amber-900/20"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <p className="text-center text-[10px] text-gray-500 mt-6 uppercase tracking-widest">
                Secure Payment Powered by Razorpay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
