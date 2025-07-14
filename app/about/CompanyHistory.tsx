'use client';

export default function CompanyHistory() {
  const milestones = [
    {
      year: "1985",
      title: "Company Founded",
      description: "Started as a small family business with a passion for quality craftsmanship and timeless design.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=812,h=376,fit=crop/A0xw7epzawUWGyyg/westside-noida-sector-50-kid-s-collection-mxB4lwzBwEiGZVRd.jpg"
    },
    {
      year: "1995",
      title: "First Showroom",
      description: "Opened our first flagship showroom, showcasing our growing collection of premium furniture pieces.",
      image: "https://www.morungexpress.com/uploads/2024/09/74588033_1726336008_a.webp"
    },
    {
      year: "2005",
      title: "National Expansion",
      description: "Expanded nationwide with multiple locations, bringing our furniture to customers across the country.",
      image: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/Commercial_Shop_180120201-2048x1861-1.jpg"
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Launched our online platform, combining traditional craftsmanship with modern shopping convenience.",
      image: "https://b3604670.smushcdn.com/3604670/wp-content/uploads/2023/10/Tvc-2023-10-04T111813.440.jpg?lossy=2&strip=1&webp=1"
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description: "Leading the industry with eco-friendly practices and sustainable furniture manufacturing processes.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/8/439505119/KY/HU/SI/48652327/retail-interior-designing-services-500x500.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to industry leadership, discover the milestones that shaped our story
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    
                    <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-6 items-center`}>
                      <div className={index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                      </div>
                      
                      <div className={index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'}>
                        <img 
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-48 object-cover object-top rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}