'use client';

export default function AboutHero() {
  const heroImageUrl = "https://readdy.ai/api/search-image?query=Sophisticated%20fashion%20boutique%20interior%20with%20elegant%20clothing%20displays%2C%20modern%20retail%20space%20design%2C%20premium%20fashion%20store%20atmosphere%2C%20contemporary%20clothing%20racks%2C%20natural%20lighting%2C%20luxurious%20shopping%20environment&width=1200&height=600&seq=hero-fashion-new&orientation=landscape";

  return (
    <section 
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('${heroImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Beautiful Spaces Since 1985
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We are passionate about creating exceptional furniture that transforms houses into homes. Our commitment to quality, design, and craftsmanship has made us a trusted name in the industry for nearly four decades.
            </p>
            <div className="flex items-center space-x-8 text-white">
              <div>
                <div className="text-3xl font-bold">40+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-white/80">Furniture Pieces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}