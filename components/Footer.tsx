
'use client';

import Link from 'next/link';

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com/stylehub',
      twitter: 'https://twitter.com/stylehub',
      instagram: 'https://instagram.com/stylehub',
      pinterest: 'https://pinterest.com/stylehub'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const handleContactClick = (type: string, value: string) => {
    switch(type) {
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'address':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, '_blank');
        break;
    }
  };

  const handlePolicyClick = (policy: string) => {
    const policies = {
      privacy: 'Privacy Policy:\n\n• We protect your personal information\n• Secure payment processing\n• No sharing with third parties\n• Cookie usage for better experience',
      terms: 'Terms of Service:\n\n• 30-day return policy\n• Free shipping over $100\n• Size exchange available\n• Quality guarantee',
      cookies: 'Cookie Policy:\n\n• Essential cookies for functionality\n• Analytics for site improvement\n• Personalization features\n• You can manage cookie preferences'
    };
    alert(policies[policy as keyof typeof policies]);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-3xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
              StyleHub
            </Link>
            <p className="text-gray-400 max-w-xs">
              Express your unique style with our curated collection of premium fashion pieces. Quality, style, and comfort in every piece.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-twitter-fill text-lg"></i>
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-instagram-fill text-lg"></i>
              </button>
              <button 
                onClick={() => handleSocialClick('pinterest')}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-pinterest-fill text-lg"></i>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/women's-fashion" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="/categories/men's-fashion" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/categories/footwear" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/categories/accessories" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleContactClick('address', '123 Fashion Ave, Style City, SC 12345')}
                className="flex items-center text-left hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-map-pin-line text-blue-400 mr-3 text-lg"></i>
                <span className="text-gray-400">123 Fashion Ave, Style City, SC 12345</span>
              </button>
              <button 
                onClick={() => handleContactClick('phone', '+1 (555) 123-4567')}
                className="flex items-center text-left hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-blue-400 mr-3 text-lg"></i>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </button>
              <button 
                onClick={() => handleContactClick('email', 'hello@stylehub.com')}
                className="flex items-center text-left hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-blue-400 mr-3 text-lg"></i>
                <span className="text-gray-400">hello@stylehub.com</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 StyleHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => handlePolicyClick('privacy')}
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handlePolicyClick('terms')}
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handlePolicyClick('cookies')}
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
