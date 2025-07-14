
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Designer T-Shirt",
      price: "$49",
      category: "Tops",
      rating: 4.8,
      reviews: 124,
      image: "https://readdy.ai/api/search-image?query=Premium%20designer%20t-shirt%20in%20soft%20heather%20gray%20with%20modern%20minimalist%20design%2C%20high-quality%20organic%20cotton%20fabric%20with%20perfect%20fit%2C%20contemporary%20casual%20wear%20with%20subtle%20logo%20detail%2C%20professional%20fashion%20photography%20with%20clean%20white%20background&width=400&height=400&seq=featured-tshirt-refresh&orientation=squarish"
    },
    {
      id: 2,
      name: "Elegant Dress",
      price: "$129",
      category: "Dresses",
      rating: 4.9,
      reviews: 89,
      image: "https://readdy.ai/api/search-image?query=Sophisticated%20wrap%20dress%20in%20deep%20forest%20green%20with%20flowing%20fabric%20and%20elegant%20drape%2C%20modern%20feminine%20silhouette%20with%20three-quarter%20sleeves%2C%20premium%20quality%20materials%20with%20beautiful%20texture%2C%20studio%20fashion%20photography%20with%20soft%20natural%20lighting&width=400&height=400&seq=featured-dress-refresh&orientation=squarish"
    },
    {
      id: 3,
      name: "Classic Jeans",
      price: "$89",
      category: "Bottoms",
      rating: 4.7,
      reviews: 156,
      image: "https://readdy.ai/api/search-image?query=Premium%20indigo%20denim%20jeans%20with%20authentic%20vintage%20wash%20and%20perfect%20straight%20leg%20fit%2C%20high-quality%20selvedge%20denim%20with%20classic%20five-pocket%20styling%2C%20timeless%20casual%20wear%20with%20subtle%20fading%20details%2C%20professional%20product%20photography%20with%20clean%20background&width=400&height=400&seq=featured-jeans-refresh&orientation=squarish"
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: "$99",
      category: "Shoes",
      rating: 4.6,
      reviews: 92,
      image: "https://readdy.ai/api/search-image?query=Modern%20lifestyle%20sneakers%20in%20crisp%20white%20with%20subtle%20gray%20accents%2C%20premium%20leather%20and%20mesh%20construction%20for%20comfort%20and%20style%2C%20contemporary%20athletic-inspired%20design%20with%20clean%20lines%2C%20professional%20footwear%20photography%20with%20soft%20shadows&width=400&height=400&seq=featured-sneakers-refresh&orientation=squarish"
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: "$299",
      category: "Outerwear",
      rating: 4.8,
      reviews: 73,
      image: "https://readdy.ai/api/search-image?query=Classic%20leather%20moto%20jacket%20in%20rich%20cognac%20brown%20with%20vintage-inspired%20details%2C%20premium%20full-grain%20leather%20with%20beautiful%20patina%2C%20modern%20tailored%20fit%20with%20asymmetrical%20zipper%2C%20sophisticated%20outerwear%20with%20quality%20craftsmanship%20and%20timeless%20style&width=400&height=400&seq=featured-jacket-refresh&orientation=squarish"
    },
    {
      id: 6,
      name: "Designer Handbag",
      price: "$199",
      category: "Accessories",
      rating: 4.5,
      reviews: 167,
      image: "https://readdy.ai/api/search-image?query=Luxury%20structured%20handbag%20in%20smooth%20black%20leather%20with%20gold-tone%20hardware%2C%20modern%20minimalist%20design%20with%20clean%20lines%20and%20quality%20craftsmanship%2C%20premium%20fashion%20accessory%20with%20elegant%20proportions%2C%20professional%20product%20photography%20with%20soft%20lighting&width=400&height=400&seq=featured-handbag-refresh&orientation=squarish"
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: any) => {
    alert(`Added "${product.name}" to cart!\n\nSize: Please select size in product details\nPrice: ${product.price}\n\nView cart to complete purchase.`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium fashion pieces designed to elevate your style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-md hover:bg-white cursor-pointer"
                  >
                    <i className={`${favorites.includes(product.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-black/80 hover:bg-black text-white py-2 px-4 rounded-lg font-semibold transition-colors opacity-0 group-hover:opacity-100 whitespace-nowrap"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`ri-star-fill text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                <Link 
                  href={`/products/${product.id}`}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-center whitespace-nowrap"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-block whitespace-nowrap"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
