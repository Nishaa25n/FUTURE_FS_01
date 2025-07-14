'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const product = {
    id: parseInt(productId),
    name: "Elegant Wrap Dress",
    price: 129,
    originalPrice: 159,
    rating: 4.8,
    reviews: 124,
    category: "Dresses",
    inStock: true,
    description: "Experience effortless elegance with our signature wrap dress...",
    features: [
      "Premium flowing fabric with beautiful drape",
      "Flattering wrap silhouette for all body types",
      "Three-quarter sleeves with elegant proportions",
      "Midi length for versatile styling",
      "Machine washable for easy care"
    ],
    specifications: {
      "Size Range": "XS - XXL available",
      "Length": "Midi (approximately 42 inches)",
      "Material": "95% Polyester, 5% Elastane",
      "Care": "Machine wash cold, hang dry",
      "Fit": "True to size with wrap styling"
    },
    images: [
      "https://readdy.ai/api/search-image?query=Elegant%20wrap%20dress%20in%20deep%20forest%20green...",
      "https://readdy.ai/api/search-image?query=Side%20view%20of%20elegant%20wrap%20dress...",
      "https://readdy.ai/api/search-image?query=Back%20view%20of%20wrap%20dress...",
      "https://readdy.ai/api/search-image?query=Close-up%20detail%20of%20wrap%20dress..."
    ]
  };

  const relatedProducts = [
    {
      id: 3,
      name: "Classic Denim Jeans",
      price: 89,
      image: "https://readdy.ai/api/search-image?query=Premium%20straight-leg%20denim%20jeans..."
    },
    {
      id: 4,
      name: "Casual White Sneakers",
      price: 99,
      image: "https://readdy.ai/api/search-image?query=Modern%20white%20leather%20sneakers..."
    },
    {
      id: 5,
      name: "Leather Crossbody Bag",
      price: 149,
      image: "https://readdy.ai/api/search-image?query=Elegant%20leather%20crossbody%20bag..."
    }
  ];

  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 👇 All your existing product JSX code goes here... */}
      {/* You already wrote a detailed and working UI code for images, price, tabs, etc. */}
      {/* Use the same UI code inside this return */}
      
      <Footer />
    </div>
  );
}
