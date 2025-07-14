
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

interface CategoryPageProps {
  categorySlug: string;
}

export default function CategoryPage({ categorySlug }: CategoryPageProps) {
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categoryData = {
    'living-room': {
      name: 'Living Room',
      description: 'Create the perfect gathering space with our comfortable and stylish living room furniture',
      heroImage: "https://readdy.ai/api/search-image?query=Modern%20living%20room%20furniture%20collection%2C%20comfortable%20sofas%20and%20chairs%2C%20coffee%20tables%2C%20elegant%20interior%20design%2C%20contemporary%20home%20decor%2C%20cozy%20seating%20area%2C%20neutral%20colors%2C%20clean%20and%20spacious&width=1200&height=400&seq=living-hero&orientation=landscape",
      products: [
        {
          id: 1,
          name: "Modern Lounge Chair",
          price: 899,
          rating: 4.8,
          reviews: 124,
          image: "https://readdy.ai/api/search-image?query=Modern%20luxury%20lounge%20chair%20with%20elegant%20upholstery%2C%20contemporary%20design%2C%20comfortable%20seating%2C%20premium%20furniture%20piece%2C%20clean%20studio%20photography%2C%20neutral%20background%2C%20sophisticated%20style%2C%20high-quality%20craftsmanship&width=400&height=400&seq=living-chair-1&orientation=squarish"
        },
        {
          id: 3,
          name: "Designer Sofa",
          price: 2499,
          rating: 4.7,
          reviews: 156,
          image: "https://readdy.ai/api/search-image?query=Luxury%20designer%20sofa%20with%20modern%20upholstery%2C%20comfortable%20cushions%2C%20elegant%20design%2C%20premium%20furniture%2C%20clean%20studio%20photography%2C%20neutral%20background%2C%20sophisticated%20living%20room%20piece&width=400&height=400&seq=living-sofa-1&orientation=squarish"
        },
        {
          id: 9,
          name: "Velvet Sectional",
          price: 3299,
          rating: 4.9,
          reviews: 134,
          image: "https://readdy.ai/api/search-image?query=Luxury%20velvet%20sectional%20sofa%20with%20elegant%20upholstery%2C%20comfortable%20seating%2C%20premium%20furniture%20piece%2C%20sophisticated%20living%20room%20design%2C%20studio%20photography%2C%20neutral%20background%2C%20high-end%20home%20decor&width=400&height=400&seq=living-sectional-1&orientation=squarish"
        },
        {
          id: 2,
          name: "Wooden Coffee Table",
          price: 1299,
          rating: 4.9,
          reviews: 89,
          image: "https://readdy.ai/api/search-image?query=Elegant%20wooden%20coffee%20table%20with%20natural%20wood%20grain%2C%20modern%20minimalist%20design%2C%20clean%20lines%2C%20premium%20craftsmanship%2C%20studio%20photography%2C%20neutral%20background%2C%20contemporary%20furniture%20piece&width=400&height=400&seq=living-table-1&orientation=squarish"
        },
        {
          id: 10,
          name: "Marble Side Table",
          price: 699,
          rating: 4.8,
          reviews: 67,
          image: "https://readdy.ai/api/search-image?query=Elegant%20marble%20side%20table%20with%20modern%20design%2C%20premium%20materials%2C%20contemporary%20furniture%20piece%2C%20sophisticated%20home%20accessory%2C%20studio%20photography%2C%20neutral%20background%2C%20luxury%20living%20room%20furniture&width=400&height=400&seq=living-marble-1&orientation=squarish"
        },
        {
          id: 4,
          name: "Accent Armchair",
          price: 749,
          rating: 4.6,
          reviews: 92,
          image: "https://readdy.ai/api/search-image?query=Stylish%20accent%20armchair%20with%20unique%20design%2C%20comfortable%20seating%2C%20modern%20furniture%20piece%2C%20premium%20upholstery%2C%20studio%20photography%2C%20clean%20background%2C%20contemporary%20home%20decor&width=400&height=400&seq=living-accent-1&orientation=squarish"
        }
      ]
    },
    'womens-fashion': {
      name: "Women's Fashion",
      description: 'Discover elegant and contemporary pieces for the modern woman',
      heroImage: "https://readdy.ai/api/search-image?query=Elegant%20womens%20fashion%20boutique%20interior%20with%20sophisticated%20clothing%20displays%2C%20premium%20dresses%20and%20blouses%20on%20modern%20racks%2C%20contemporary%20retail%20environment%20with%20beautiful%20lighting%20and%20luxury%20presentation&width=1200&height=400&seq=womens-hero-refresh&orientation=landscape",
      products: [
        {
          id: 1,
          name: "Designer T-Shirt",
          price: 49,
          rating: 4.8,
          reviews: 124,
          image: "https://readdy.ai/api/search-image?query=Premium%20designer%20t-shirt%20in%20soft%20heather%20gray%20with%20modern%20minimalist%20design%2C%20high-quality%20organic%20cotton%20fabric%20with%20perfect%20fit%2C%20contemporary%20casual%20wear%20with%20subtle%20logo%20detail%2C%20professional%20fashion%20photography%20with%20clean%20white%20background&width=400&height=400&seq=womens-tshirt-refresh&orientation=squarish"
        },
        {
          id: 2,
          name: "Elegant Dress",
          price: 129,
          rating: 4.9,
          reviews: 89,
          image: "https://readdy.ai/api/search-image?query=Sophisticated%20wrap%20dress%20in%20deep%20forest%20green%20with%20flowing%20fabric%20and%20elegant%20drape%2C%20modern%20feminine%20silhouette%20with%20three-quarter%20sleeves%2C%20premium%20quality%20materials%20with%20beautiful%20texture%2C%20studio%20fashion%20photography%20with%20soft%20natural%20lighting&width=400&height=400&seq=womens-dress-refresh&orientation=squarish"
        },
        {
          id: 8,
          name: "Summer Blouse",
          price: 69,
          rating: 4.6,
          reviews: 98,
          image: "https://readdy.ai/api/search-image?query=Flowing%20chiffon%20blouse%20in%20soft%20blush%20pink%20with%20delicate%20floral%20print%2C%20lightweight%20summer%20fabric%20with%20elegant%20drape%2C%20feminine%20design%20with%20subtle%20ruffle%20details%2C%20natural%20lighting%20photography%20showcasing%20the%20beautiful%20texture%20and%20movement&width=400&height=400&seq=womens-blouse-refresh&orientation=squarish"
        },
        {
          id: 9,
          name: "Evening Gown",
          price: 399,
          rating: 4.9,
          reviews: 134,
          image: "https://readdy.ai/api/search-image?query=Stunning%20floor-length%20evening%20gown%20in%20midnight%20navy%20with%20subtle%20shimmer%2C%20elegant%20A-line%20silhouette%20with%20sophisticated%20draping%2C%20luxurious%20fabric%20with%20beautiful%20movement%2C%20formal%20occasion%20dress%20with%20timeless%20elegance%20and%20modern%20refinement&width=400&height=400&seq=womens-gown-refresh&orientation=squarish"
        }
      ]
    },
    'mens-fashion': {
      name: "Men's Fashion",
      description: 'Sophisticated clothing for the modern gentleman',
      heroImage: "https://readdy.ai/api/search-image?query=Premium%20mens%20fashion%20store%20interior%20with%20tailored%20suits%20and%20casual%20wear%20displayed%20elegantly%2C%20modern%20menswear%20boutique%20with%20sophisticated%20clothing%20racks%2C%20contemporary%20retail%20space%20with%20professional%20presentation&width=1200&height=400&seq=mens-hero-refresh&orientation=landscape",
      products: [
        {
          id: 7,
          name: "Formal Shirt",
          price: 79,
          rating: 4.7,
          reviews: 45,
          image: "https://readdy.ai/api/search-image?query=Crisp%20white%20cotton%20dress%20shirt%20with%20perfect%20collar%20and%20cuffs%2C%20premium%20non-iron%20fabric%20with%20modern%20tailored%20fit%2C%20professional%20business%20attire%20with%20subtle%20texture%2C%20clean%20product%20photography%20with%20elegant%20presentation%20and%20quality%20details&width=400&height=400&seq=mens-shirt-refresh&orientation=squarish"
        },
        {
          id: 11,
          name: "Casual Hoodie",
          price: 89,
          rating: 4.7,
          reviews: 201,
          image: "https://readdy.ai/api/search-image?query=Comfortable%20cotton%20fleece%20hoodie%20in%20warm%20charcoal%20gray%2C%20relaxed%20fit%20with%20modern%20streetwear%20styling%2C%20soft%20brushed%20interior%20for%20warmth%2C%20contemporary%20casual%20wear%20with%20drawstring%20hood%20and%20kangaroo%20pocket%2C%20clean%20product%20photography&width=400&height=400&seq=mens-hoodie-refresh&orientation=squarish"
        },
        {
          id: 5,
          name: "Leather Jacket",
          price: 299,
          rating: 4.8,
          reviews: 73,
          image: "https://readdy.ai/api/search-image?query=Classic%20leather%20moto%20jacket%20in%20rich%20cognac%20brown%20with%20vintage-inspired%20details%2C%20premium%20full-grain%20leather%20with%20beautiful%20patina%2C%20modern%20tailored%20fit%20with%20asymmetrical%20zipper%2C%20sophisticated%20outerwear%20with%20quality%20craftsmanship%20and%20timeless%20style&width=400&height=400&seq=mens-jacket-refresh&orientation=squarish"
        }
      ]
    },
    'footwear': {
      name: 'Footwear',
      description: 'Step out in style with our premium shoe collection',
      heroImage: "https://readdy.ai/api/search-image?query=Elegant%20shoe%20boutique%20interior%20with%20premium%20footwear%20collection%20displayed%20on%20modern%20shelving%2C%20luxury%20sneakers%20and%20dress%20shoes%20showcase%2C%20contemporary%20footwear%20store%20design%20with%20sophisticated%20retail%20presentation&width=1200&height=400&seq=footwear-hero-refresh&orientation=landscape",
      products: [
        {
          id: 4,
          name: "Casual Sneakers",
          price: 99,
          rating: 4.6,
          reviews: 92,
          image: "https://readdy.ai/api/search-image?query=Modern%20lifestyle%20sneakers%20in%20crisp%20white%20with%20subtle%20gray%20accents%2C%20premium%20leather%20and%20mesh%20construction%20for%20comfort%20and%20style%2C%20contemporary%20athletic-inspired%20design%20with%20clean%20lines%2C%20professional%20footwear%20photography%20with%20soft%20shadows&width=400&height=400&seq=footwear-sneakers-refresh&orientation=squarish"
        },
        {
          id: 10,
          name: "Dress Shoes",
          price: 149,
          rating: 4.8,
          reviews: 67,
          image: "https://readdy.ai/api/search-image?query=Classic%20oxford%20dress%20shoes%20in%20polished%20black%20leather%20with%20traditional%20broguing%20details%2C%20premium%20quality%20construction%20with%20leather%20sole%2C%20timeless%20formal%20footwear%20with%20elegant%20silhouette%2C%20professional%20product%20photography%20with%20refined%20presentation&width=400&height=400&seq=footwear-oxford-refresh&orientation=squarish"
        }
      ]
    },
    'accessories': {
      name: 'Accessories',
      description: 'Complete your look with our curated accessory collection',
      heroImage: "https://readdy.ai/api/search-image?query=Luxury%20fashion%20accessories%20boutique%20with%20premium%20handbags%20and%20jewelry%20displayed%20elegantly%2C%20sophisticated%20accessories%20store%20interior%20with%20beautiful%20showcases%2C%20contemporary%20retail%20design%20featuring%20quality%20leather%20goods&width=1200&height=400&seq=accessories-hero-refresh&orientation=landscape",
      products: [
        {
          id: 6,
          name: "Designer Handbag",
          price: 199,
          rating: 4.5,
          reviews: 167,
          image: "https://readdy.ai/api/search-image?query=Luxury%20structured%20handbag%20in%20smooth%20black%20leather%20with%20gold-tone%20hardware%2C%20modern%20minimalist%20design%20with%20clean%20lines%20and%20quality%20craftsmanship%2C%20premium%20fashion%20accessory%20with%20elegant%20proportions%2C%20professional%20product%20photography%20with%20soft%20lighting&width=400&height=400&seq=accessories-handbag-refresh&orientation=squarish"
        },
        {
          id: 12,
          name: "Silk Scarf",
          price: 59,
          rating: 4.6,
          reviews: 89,
          image: "https://readdy.ai/api/search-image?query=Luxurious%20silk%20scarf%20with%20abstract%20geometric%20pattern%20in%20soft%20blue%20and%20cream%20tones%2C%20premium%20quality%20silk%20with%20beautiful%20drape%20and%20sheen%2C%20elegant%20fashion%20accessory%20with%20hand-rolled%20edges%2C%20artistic%20product%20photography%20highlighting%20the%20fabric%20texture&width=400&height=400&seq=accessories-scarf-refresh&orientation=squarish"
        }
      ]
    },
    'bedroom': {
      name: 'Bedroom',
      description: 'Transform your bedroom into a peaceful retreat with our comfortable and elegant furniture',
      heroImage: "https://readdy.ai/api/search-image?query=Elegant%20bedroom%20furniture%20set%2C%20comfortable%20bed%20with%20quality%20bedding%2C%20nightstands%2C%20dresser%2C%20modern%20bedroom%20design%2C%20peaceful%20sleeping%20area%2C%20neutral%20tones%2C%20sophisticated%20decor&width=1200&height=400&seq=bedroom-hero&orientation=landscape",
      products: [
        {
          id: 12,
          name: "Platform Bed Frame",
          price: 1799,
          rating: 4.6,
          reviews: 89,
          image: "https://readdy.ai/api/search-image?query=Modern%20platform%20bed%20frame%20with%20clean%20lines%2C%20premium%20wood%20construction%2C%20contemporary%20bedroom%20furniture%2C%20minimalist%20design%2C%20studio%20photography%2C%20neutral%20background%2C%20sophisticated%20sleeping%20furniture&width=400&height=400&seq=bedroom-bed-1&orientation=squarish"
        }
      ]
    },
    'dining-room': {
      name: 'Dining Room',
      description: 'Create memorable dining experiences with our elegant tables and seating solutions',
      heroImage: "https://readdy.ai/api/search-image?query=Beautiful%20dining%20room%20furniture%2C%20elegant%20dining%20table%20with%20chairs%2C%20modern%20dining%20set%2C%20stylish%20tableware%2C%20sophisticated%20dining%20area%2C%20warm%20lighting%2C%20contemporary%20design&width=1200&height=400&seq=dining-hero&orientation=landscape",
      products: [
        {
          id: 5,
          name: "Dining Table Set",
          price: 1899,
          rating: 4.8,
          reviews: 73,
          image: "https://readdy.ai/api/search-image?query=Modern%20dining%20table%20with%20clean%20lines%2C%20premium%20wood%20finish%2C%20contemporary%20design%2C%20elegant%20furniture%20piece%2C%20studio%20photography%2C%20neutral%20background%2C%20sophisticated%20dining%20room%20furniture&width=400&height=400&seq=dining-table-1&orientation=squarish"
        }
      ]
    },
    'office': {
      name: 'Office',
      description: 'Design a productive workspace with our ergonomic and stylish office furniture',
      heroImage: "https://readdy.ai/api/search-image?query=Modern%20office%20furniture%20collection%2C%20ergonomic%20desk%20chair%2C%20clean%20workspace%20setup%2C%20professional%20office%20design%2C%20productivity-focused%20environment%2C%20contemporary%20office%20decor%2C%20organized%20and%20efficient&width=1200&height=400&seq=office-hero&orientation=landscape",
      products: [
        {
          id: 7,
          name: "Executive Desk",
          price: 1599,
          rating: 4.7,
          reviews: 45,
          image: "https://readdy.ai/api/search-image?query=Modern%20executive%20desk%20with%20clean%20design%2C%20premium%20wood%20finish%2C%20contemporary%20office%20furniture%2C%20professional%20workspace%2C%20studio%20photography%2C%20neutral%20background%2C%20sophisticated%20business%20furniture&width=400&height=400&seq=office-desk-1&orientation=squarish"
        },
        {
          id: 11,
          name: "Ergonomic Office Chair",
          price: 1199,
          rating: 4.7,
          reviews: 201,
          image: "https://readdy.ai/api/search-image?query=Modern%20ergonomic%20office%20chair%20with%20premium%20materials%2C%20comfortable%20design%2C%20professional%20workspace%20furniture%2C%20contemporary%20office%20seating%2C%20studio%20photography%2C%20neutral%20background%2C%20high-quality%20business%20furniture&width=400&height=400&seq=office-chair-1&orientation=squarish"
        }
      ]
    }
  };

  const category = categoryData[categorySlug as keyof typeof categoryData] || categoryData['living-room'];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const sortedProducts = [...category.products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url('${category.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-white/80 mb-4">
              <Link href="/" className="hover:text-white cursor-pointer">Home</Link>
              <i className="ri-arrow-right-s-line"></i>
              <Link href="/categories" className="hover:text-white cursor-pointer">Categories</Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-white">{category.name}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <p className="text-gray-600">
                Showing {sortedProducts.length} products in {category.name}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium">Sort by:</label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 pr-8 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
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
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{category.name}</span>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                      <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toLocaleString()}</p>

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
              <i className="ri-inbox-line text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Check back soon for new additions to this category</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-block whitespace-nowrap"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
