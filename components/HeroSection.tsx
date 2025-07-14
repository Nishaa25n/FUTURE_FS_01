
'use client';

import Link from 'next/link';

export default function HeroSection() {
  const heroImageUrl = "https://readdy.ai/api/search-image?query=Sophisticated%20fashion%20boutique%20interior%20with%20elegant%20clothing%20displays%2C%20modern%20retail%20space%20design%2C%20premium%20fashion%20store%20atmosphere%2C%20contemporary%20clothing%20racks%2C%20natural%20lighting%2C%20luxurious%20shopping%20environment&width=1200&height=600&seq=hero-fashion-new&orientation=landscape";

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('${heroImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Express Your Style
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Discover the latest fashion trends and timeless pieces. From casual wear to formal attire, find your perfect look with our curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-block text-center whitespace-nowrap"
              >
                Shop Collection
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all cursor-pointer inline-block text-center whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
