
'use client';

export default function ContactInfo() {
  const locations = [
    {
      city: "New York",
      address: "123 Furniture Ave, Manhattan, NY 10001",
      phone: "+1 (212) 555-0123",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
      image: "https://readdy.ai/api/search-image?query=Modern%20furniture%20showroom%20in%20New%20York%20City%2C%20elegant%20retail%20space%2C%20contemporary%20furniture%20displays%2C%20professional%20showroom%20interior%2C%20urban%20furniture%20store%2C%20sophisticated%20retail%20environment&width=400&height=300&seq=location-ny&orientation=landscape"
    },
    {
      city: "Los Angeles",
      address: "456 Design Blvd, Beverly Hills, CA 90210",
      phone: "+1 (310) 555-0456",
      hours: "Mon-Sat: 10AM-9PM, Sun: 12PM-7PM",
      image: "https://readdy.ai/api/search-image?query=Luxury%20furniture%20showroom%20in%20Los%20Angeles%2C%20upscale%20retail%20space%2C%20premium%20furniture%20displays%2C%20California%20modern%20design%2C%20elegant%20showroom%20interior%2C%20west%20coast%20furniture%20store&width=400&height=300&seq=location-la&orientation=landscape"
    },
    {
      city: "Chicago",
      address: "789 Home St, Downtown, IL 60601",
      phone: "+1 (312) 555-0789",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
      image: "https://readdy.ai/api/search-image?query=Contemporary%20furniture%20showroom%20in%20Chicago%2C%20modern%20retail%20space%2C%20midwestern%20furniture%20store%2C%20professional%20showroom%20design%2C%20urban%20furniture%20displays%2C%20sophisticated%20retail%20interior&width=400&height=300&seq=location-chicago&orientation=landscape"
    }
  ];

  const handleGetDirections = (address: string) => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
  };

  const handleContactMethod = (type: string, value: string) => {
    switch(type) {
      case 'phone':
        window.location.href = `tel:${value.replace(/[^\d+]/g, '')}`;
        break;
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'chat':
        alert('Live chat feature coming soon! For immediate assistance, please call us at +1 (555) 123-4567');
        break;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our Showrooms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our furniture collections in person at one of our beautiful showroom locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={location.image}
                alt={`${location.city} showroom`}
                className="w-full h-48 object-cover object-top"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.city}</h3>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleGetDirections(location.address)}
                    className="flex items-start w-full text-left hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-map-pin-line text-blue-600 mt-1 mr-3 text-lg"></i>
                    <span className="text-gray-700">{location.address}</span>
                  </button>
                  
                  <button 
                    onClick={() => handleContactMethod('phone', location.phone)}
                    className="flex items-center w-full text-left hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-phone-line text-blue-600 mr-3 text-lg"></i>
                    <span className="text-gray-700">{location.phone}</span>
                  </button>
                  
                  <div className="flex items-start">
                    <i className="ri-time-line text-blue-600 mt-1 mr-3 text-lg"></i>
                    <span className="text-gray-700">{location.hours}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleGetDirections(location.address)}
                  className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our furniture or need design assistance? Our team is here to help you create the perfect space.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => handleContactMethod('email', 'hello@furniture.com')}
                  className="flex items-center w-full text-left hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-mail-line text-blue-600 mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">hello@furniture.com</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => handleContactMethod('phone', '+1 (555) 123-4567')}
                  className="flex items-center w-full text-left hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-phone-line text-blue-600 mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => handleContactMethod('chat', '')}
                  className="flex items-center w-full text-left hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-chat-3-line text-blue-600 mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Live Chat</div>
                    <div className="text-gray-600">Available 9AM-6PM EST</div>
                  </div>
                </button>
              </div>
            </div>
            
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1642678995739!5m2!1sen!2sus"
                width="100%"
                height="300"
                className="rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
