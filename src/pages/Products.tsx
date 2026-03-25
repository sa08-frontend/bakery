import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../types';
import { Search, Filter } from 'lucide-react';
import React from 'react';

export function Products() {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');

  const filteredProducts = PRODUCTS.filter(p => 
    (category === 'All' || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ['All', 'Cookies', 'Sticks'];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white font-serif">Our Collection</h1>
            <p className="text-gray-400">Explore our handcrafted artisanal treats.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-amber-500 transition-colors" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-white focus:outline-none focus:border-amber-500/50 transition-all w-full sm:w-64"
              />
            </div>
            
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-2xl p-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${
                    category === cat 
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-xl text-gray-500">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
