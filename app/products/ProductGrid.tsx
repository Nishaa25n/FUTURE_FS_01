
'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ProductGridProps {
  selectedCategory: string;
  priceRange: number[];
  sortBy: string;
}

export default function ProductGrid({ selectedCategory, priceRange, sortBy }: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const allProducts = [
    {
      id: 1,
      name: "Designer T-Shirt",
      price: 49,
      category: "tops",
      rating: 4.8,
      reviews: 124,
      image: "https://readdy.ai/api/search-image?query=Premium%20designer%20t-shirt%20in%20soft%20heather%20gray%20with%20modern%20minimalist%20design%2C%20high-quality%20organic%20cotton%20fabric%20with%20perfect%20fit%2C%20contemporary%20casual%20wear%20with%20subtle%20logo%20detail%2C%20professional%20fashion%20photography%20with%20clean%20white%20background&width=400&height=400&seq=grid-tshirt-refresh&orientation=squarish"
    },
    {
      id: 2,
      name: "Elegant Dress",
      price: 129,
      category: "dresses",
      rating: 4.9,
      reviews: 89,
      image: "https://readdy.ai/api/search-image?query=Sophisticated%20wrap%20dress%20in%20deep%20forest%20green%20with%20flowing%20fabric%20and%20elegant%20drape%2C%20modern%20feminine%20silhouette%20with%20three-quarter%20sleeves%2C%20premium%20quality%20materials%20with%20beautiful%20texture%2C%20studio%20fashion%20photography%20with%20soft%20natural%20lighting&width=400&height=400&seq=grid-dress-refresh&orientation=squarish"
    },
    {
      id: 3,
      name: "Classic Jeans",
      price: 89,
      category: "bottoms",
      rating: 4.7,
      reviews: 156,
      image: "https://readdy.ai/api/search-image?query=Premium%20indigo%20denim%20jeans%20with%20authentic%20vintage%20wash%20and%20perfect%20straight%20leg%20fit%2C%20high-quality%20selvedge%20denim%20with%20classic%20five-pocket%20styling%2C%20timeless%20casual%20wear%20with%20subtle%20fading%20details%2C%20professional%20product%20photography%20with%20clean%20background&width=400&height=400&seq=grid-jeans-refresh&orientation=squarish"
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: 99,
      category: "shoes",
      rating: 4.6,
      reviews: 92,
      image: "https://readdy.ai/api/search-image?query=Modern%20lifestyle%20sneakers%20in%20crisp%20white%20with%20subtle%20gray%20accents%2C%20premium%20leather%20and%20mesh%20construction%20for%20comfort%20and%20style%2C%20contemporary%20athletic-inspired%20design%20with%20clean%20lines%2C%20professional%20footwear%20photography%20with%20soft%20shadows&width=400&height=400&seq=grid-sneakers-refresh&orientation=squarish"
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: 299,
      category: "outerwear",
      rating: 4.8,
      reviews: 73,
      image: "https://readdy.ai/api/search-image?query=Classic%20leather%20moto%20jacket%20in%20rich%20cognac%20brown%20with%20vintage-inspired%20details%2C%20premium%20full-grain%20leather%20with%20beautiful%20patina%2C%20modern%20tailored%20fit%20with%20asymmetrical%20zipper%2C%20sophisticated%20outerwear%20with%20quality%20craftsmanship%20and%20timeless%20style&width=400&height=400&seq=grid-jacket-refresh&orientation=squarish"
    },
    {
      id: 6,
      name: "Designer Handbag",
      price: 199,
      category: "accessories",
      rating: 4.5,
      reviews: 167,
      image: "https://readdy.ai/api/search-image?query=Luxury%20structured%20handbag%20in%20smooth%20black%20leather%20with%20gold-tone%20hardware%2C%20modern%20minimalist%20design%20with%20clean%20lines%20and%20quality%20craftsmanship%2C%20premium%20fashion%20accessory%20with%20elegant%20proportions%2C%20professional%20product%20photography%20with%20soft%20lighting&width=400&height=400&seq=grid-handbag-refresh&orientation=squarish"
    },
    {
      id: 7,
      name: "Formal Shirt",
      price: 79,
      category: "tops",
      rating: 4.7,
      reviews: 45,
      image: "https://readdy.ai/api/search-image?query=Crisp%20white%20cotton%20dress%20shirt%20with%20perfect%20collar%20and%20cuffs%2C%20premium%20non-iron%20fabric%20with%20modern%20tailored%20fit%2C%20professional%20business%20attire%20with%20subtle%20texture%2C%20clean%20product%20photography%20with%20elegant%20presentation%20and%20quality%20details&width=400&height=400&seq=grid-shirt-refresh&orientation=squarish"
    },
    {
      id: 8,
      name: "Summer Blouse",
      price: 69,
      category: "tops",
      rating: 4.6,
      reviews: 98,
      image: "https://readdy.ai/api/search-image?query=Flowing%20chiffon%20blouse%20in%20soft%20blush%20pink%20with%20delicate%20floral%20print%2C%20lightweight%20summer%20fabric%20with%20elegant%20drape%2C%20feminine%20design%20with%20subtle%20ruffle%20details%2C%20natural%20lighting%20photography%20showcasing%20the%20beautiful%20texture%20and%20movement&width=400&height=400&seq=grid-blouse-refresh&orientation=squarish"
    },
    {
      id: 9,
      name: "Evening Gown",
      price: 399,
      category: "dresses",
      rating: 4.9,
      reviews: 134,
      image: "https://readdy.ai/api/search-image?query=Stunning%20floor-length%20evening%20gown%20in%20midnight%20navy%20with%20subtle%20shimmer%2C%20elegant%20A-line%20silhouette%20with%20sophisticated%20draping%2C%20luxurious%20fabric%20with%20beautiful%20movement%2C%20formal%20occasion%20dress%20with%20timeless%20elegance%20and%20modern%20refinement&width=400&height=400&seq=grid-gown-refresh&orientation=squarish"
    },
    {
      id: 10,
      name: "Dress Shoes",
      price: 149,
      category: "shoes",
      rating: 4.8,
      reviews: 67,
      image: "https://readdy.ai/api/search-image?query=Classic%20oxford%20dress%20shoes%20in%20polished%20black%20leather%20with%20traditional%20broguing%20details%2C%20premium%20quality%20construction%20with%20leather%20sole%2C%20timeless%20formal%20footwear%20with%20elegant%20silhouette%2C%20professional%20product%20photography%20with%20refined%20presentation&width=400&height=400&seq=grid-oxford-refresh&orientation=squarish"
    },
    {
      id: 11,
      name: "Casual Hoodie",
      price: 89,
      category: "outerwear",
      rating: 4.7,
      reviews: 201,
      image: "https://readdy.ai/api/search-image?query=Comfortable%20cotton%20fleece%20hoodie%20in%20warm%20charcoal%20gray%2C%20relaxed%20fit%20with%20modern%20streetwear%20styling%2C%20soft%20brushed%20interior%20for%20warmth%2C%20contemporary%20casual%20wear%20with%20drawstring%20hood%20and%20kangaroo%20pocket%2C%20clean%20product%20photography&width=400&height=400&seq=grid-hoodie-refresh&orientation=squarish"
    },
    {
      id: 12,
      name: "Silk Scarf",
      price: 59,
      category: "accessories",
      rating: 4.6,
      reviews: 89,
      image: "https://readdy.ai/api/search-image?query=Luxurious%20silk%20scarf%20with%20abstract%20geometric%20pattern%20in%20soft%20blue%20and%20cream%20tones%2C%20premium%20quality%20silk%20with%20beautiful%20drape%20and%20sheen%2C%20elegant%20fashion%20accessory%20with%20hand-rolled%20edges%2C%20artistic%20product%20photography%20highlighting%20the%20fabric%20texture&width=400&height=400&seq=grid-scarf-refresh&orientation=squarish"
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleQuickAdd = (product: any) => {
    alert(`Quick Add: "${product.name}"\n\nPrice: $${product.price}\nRating: ${product.rating}/5 (${product.reviews} reviews)\n\nPlease visit product page to select size and complete purchase.`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">
          Showing {sortedProducts.length} of {allProducts.length} products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
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
                  onClick={() => handleQuickAdd(product)}
                  className="w-full bg-black/80 hover:bg-black text-white py-2 px-4 rounded-lg font-semibold transition-colors opacity-0 group-hover:opacity-100 whitespace-nowrap"
                >
                  Quick Add
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 font-medium capitalize">{product.category}</span>
                <div className="flex items-center">
                  <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>

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

      {sortedProducts.length === 0 && (
        <div className="text-center py-16">
          <i className="ri-search-line text-4xl text-gray-400 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results</p>
        </div>
      )}
    </div>
  );
}
