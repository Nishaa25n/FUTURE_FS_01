
'use client';

import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      description: "Dresses, tops, and elegant pieces",
      itemCount: "200+ items",
      image: "https://readdy.ai/api/search-image?query=Luxury%20womens%20fashion%20boutique%20interior%20with%20elegant%20dresses%20and%20blouses%20displayed%20on%20modern%20racks%2C%20sophisticated%20retail%20environment%20with%20premium%20clothing%20collections%2C%20contemporary%20fashion%20store%20design%20with%20beautiful%20lighting%20and%20clean%20displays&width=500&height=300&seq=cat-women-refresh&orientation=landscape"
    },
    {
      id: 2,
      name: "Men's Fashion",
      description: "Shirts, pants, and accessories",
      itemCount: "180+ items",
      image: "https://readdy.ai/api/search-image?query=Premium%20mens%20fashion%20store%20interior%20with%20tailored%20suits%20and%20casual%20wear%20displayed%20elegantly%2C%20modern%20menswear%20boutique%20with%20sophisticated%20clothing%20racks%2C%20contemporary%20retail%20space%20with%20professional%20presentation%20and%20quality%20garments&width=500&height=300&seq=cat-men-refresh&orientation=landscape"
    },
    {
      id: 3,
      name: "Footwear",
      description: "Shoes for every occasion",
      itemCount: "120+ items",
      image: "https://readdy.ai/api/search-image?query=Elegant%20shoe%20boutique%20interior%20with%20premium%20footwear%20collection%20displayed%20on%20modern%20shelving%2C%20luxury%20sneakers%20and%20dress%20shoes%20showcase%2C%20contemporary%20footwear%20store%20design%20with%20sophisticated%20retail%20presentation%20and%20quality%20lighting&width=500&height=300&seq=cat-shoes-refresh&orientation=landscape"
    },
    {
      id: 4,
      name: "Accessories",
      description: "Bags, jewelry, and more",
      itemCount: "150+ items",
      image: "https://readdy.ai/api/search-image?query=Luxury%20fashion%20accessories%20boutique%20with%20premium%20handbags%20and%20jewelry%20displayed%20elegantly%2C%20sophisticated%20accessories%20store%20interior%20with%20beautiful%20showcases%2C%20contemporary%20retail%20design%20featuring%20quality%20leather%20goods%20and%20fashion%20accessories&width=500&height=300&seq=cat-accessories-refresh&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our carefully curated collections for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/products`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[5/3] relative">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{category.name}</h3>
                <p className="text-lg text-white/90 mb-2">{category.description}</p>
                <p className="text-sm text-white/80">{category.itemCount}</p>
                
                <div className="flex items-center mt-4 text-white group-hover:text-blue-300 transition-colors">
                  <span className="font-semibold">Explore Collection</span>
                  <i className="ri-arrow-right-line ml-2 text-lg"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
