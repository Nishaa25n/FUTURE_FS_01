
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductGrid from './ProductGrid';
import ProductFilters from './ProductFilters';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Fashion Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium fashion pieces designed to express your unique style
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <ProductFilters 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
            
            <div className="lg:w-3/4">
              <ProductGrid 
                selectedCategory={selectedCategory}
                priceRange={priceRange}
                sortBy={sortBy}
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
