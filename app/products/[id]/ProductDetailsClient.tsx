'use client';

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  reviews: number;
}

export default function ProductDetailsClient({ product }: { product: Product }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingIndex = cartItems.findIndex((item: any) => item.id === product.id);

    if (existingIndex > -1) {
      cartItems[existingIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">${product.price}</p>
          <p className="mb-4 text-gray-600">Category: {product.category}</p>
          <p className="mb-4 text-yellow-500">Rating: {product.rating} ★</p>
          <button onClick={handleAddToCart} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
<br></br>
      <a href="/products" className="text-2xl font-bold text-Green-500">← Back to All Products</a>

      {showPopup && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
          ✅ Product added to cart!
        </div>
      )}
    </div>
  );
}
