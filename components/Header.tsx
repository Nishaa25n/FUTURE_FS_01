// ✅ Updated Header.tsx - Cart icon navigates to cart page
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleUserMenuAction = (action: string) => {
    setShowUserMenu(false);
    const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('user');

    switch (action) {
      case 'account':
        if (isLoggedIn) {
          router.push('/account');
        } else {
          router.push('/auth');
        }
        break;
      case 'wishlist':
        router.push('/wishlist');
        break;
      case 'orders':
        router.push('/orders');
        break;
      case 'signout':
        localStorage.removeItem('user');
        alert('You have been signed out successfully');
        window.location.reload();
        break;
    }
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Pacifico, serif' }}>
            StyleHub
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/products" className="text-gray-900 hover:text-blue-600 font-medium">Products</Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => setShowSearch(!showSearch)} className="hover:text-blue-600">
              <i className="ri-search-line text-xl text-gray-700"></i>
            </button>

            <div className="relative">
              <button onClick={() => setShowUserMenu(!showUserMenu)} className="hover:text-blue-600">
                {user ? <span className="text-sm font-medium text-gray-800">Hi, {user.name}</span> : <i className="ri-user-line text-xl text-gray-700"></i>}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button onClick={() => handleUserMenuAction('account')} className="w-full text-left px-4 py-2 hover:bg-gray-50">
                    <i className="ri-user-line mr-2"></i> My Account
                  </button>
                  {/* <button onClick={() => handleUserMenuAction('wishlist')} className="w-full text-left px-4 py-2 hover:bg-gray-50">
                    <i className="ri-heart-line mr-2"></i> Wishlist
                  </button>
                  <button onClick={() => handleUserMenuAction('orders')} className="w-full text-left px-4 py-2 hover:bg-gray-50">
                    <i className="ri-shopping-bag-line mr-2"></i> Orders
                  </button> */}
                  <hr className="my-2" />
                  <button onClick={() => handleUserMenuAction('signout')} className="w-full text-left px-4 py-2 hover:bg-gray-50">
                    <i className="ri-logout-box-line mr-2"></i> Sign Out
                  </button>
                </div>
              )}
            </div>

            <Link href="/cart" className="relative hover:text-blue-600">
              <i className="ri-shopping-cart-line text-xl text-gray-700"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-gray-700`}></i>
          </button>
        </div>

        {showSearch && (
          <div className="py-4 border-t border-gray-200">
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for clothing..."
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </form>
          </div>
        )}

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/products" className="text-gray-900 hover:text-blue-600 font-medium">Products</Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">Contact</Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button onClick={() => handleUserMenuAction('account')} className="text-gray-700 hover:text-blue-600">
                  <i className="ri-user-line mr-2"></i> Account
                </button>
                <Link href="/cart" className="text-gray-700 hover:text-blue-600">
                  <i className="ri-shopping-cart-line mr-2"></i> Cart ({cartCount})
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}