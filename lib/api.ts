
// API configuration and backend utilities
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.furniture-store.com' 
  : 'http://localhost:3001';

// Form submission endpoint
export const FORM_ENDPOINT = 'https://readdy.ai/api/submit-form';

// Product data management
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description?: string;
  inStock?: boolean;
}

// Cart management
export interface CartItem extends Product {
  quantity: number;
}

// Local storage keys
export const STORAGE_KEYS = {
  CART: 'furniture_cart',
  WISHLIST: 'furniture_wishlist',
  USER_PREFERENCES: 'user_preferences'
};

// Sample products data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Modern Sectional Sofa",
    price: 1299,
    category: "living-room",
    rating: 4.8,
    reviews: 156,
    image: "https://readdy.ai/api/search-image?query=modern%20grey%20sectional%20sofa%20in%20minimalist%20living%20room%20with%20clean%20white%20background%2C%20professional%20furniture%20photography%2C%20bright%20lighting&width=400&height=300&seq=sofa1&orientation=landscape",
    description: "Comfortable 3-piece sectional sofa with premium fabric upholstery",
    inStock: true
  },
  {
    id: 2,
    name: "Oak Dining Table",
    price: 899,
    category: "dining-room",
    rating: 4.9,
    reviews: 89,
    image: "https://readdy.ai/api/search-image?query=elegant%20solid%20oak%20wooden%20dining%20table%20with%20clean%20modern%20design%2C%20minimalist%20white%20background%2C%20professional%20furniture%20photography&width=400&height=300&seq=table1&orientation=landscape",
    description: "Solid oak dining table seats 6 people comfortably",
    inStock: true
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 549,
    category: "office",
    rating: 4.7,
    reviews: 203,
    image: "https://readdy.ai/api/search-image?query=modern%20black%20ergonomic%20office%20chair%20with%20mesh%20back%2C%20adjustable%20height%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=400&height=300&seq=chair1&orientation=landscape",
    description: "Premium ergonomic office chair with lumbar support",
    inStock: true
  }
];

// Cart operations
export const CartAPI = {
  getCart: (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem(STORAGE_KEYS.CART);
    return cart ? JSON.parse(cart) : [];
  },

  addToCart: (product: Product, quantity: number = 1) => {
    const cart = CartAPI.getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    return cart;
  },

  removeFromCart: (productId: number) => {
    const cart = CartAPI.getCart().filter(item => item.id !== productId);
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    return cart;
  },

  updateQuantity: (productId: number, quantity: number) => {
    const cart = CartAPI.getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        return CartAPI.removeFromCart(productId);
      }
      item.quantity = quantity;
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    }
    
    return cart;
  },

  clearCart: () => {
    localStorage.removeItem(STORAGE_KEYS.CART);
    return [];
  },

  getCartTotal: (): number => {
    return CartAPI.getCart().reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartCount: (): number => {
    return CartAPI.getCart().reduce((count, item) => count + item.quantity, 0);
  }
};

// Wishlist operations
export const WishlistAPI = {
  getWishlist: (): Product[] => {
    if (typeof window === 'undefined') return [];
    const wishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    return wishlist ? JSON.parse(wishlist) : [];
  },

  addToWishlist: (product: Product) => {
    const wishlist = WishlistAPI.getWishlist();
    const exists = wishlist.find(item => item.id === product.id);
    
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    }
    
    return wishlist;
  },

  removeFromWishlist: (productId: number) => {
    const wishlist = WishlistAPI.getWishlist().filter(item => item.id !== productId);
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    return wishlist;
  },

  isInWishlist: (productId: number): boolean => {
    return WishlistAPI.getWishlist().some(item => item.id === productId);
  }
};

// Form submission
export const submitForm = async (formData: Record<string, string>) => {
  try {
    const formDataToSend = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataToSend
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: 'Failed to submit form' };
  }
};

// Newsletter subscription
export const subscribeNewsletter = async (email: string) => {
  return submitForm({ 
    type: 'newsletter', 
    email,
    timestamp: new Date().toISOString()
  });
};

// Contact form submission
export const submitContactForm = async (contactData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) => {
  return submitForm({
    type: 'contact',
    ...contactData,
    timestamp: new Date().toISOString()
  });
};

// Product search and filtering
export const ProductAPI = {
  search: async (query: string, filters?: {
    category?: string;
    priceRange?: [number, number];
    sortBy?: string;
  }) => {
    // Use sample products data instead of importing JSON file
    let filteredProducts = sampleProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    if (filters?.category && filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }

    if (filters?.priceRange) {
      const [min, max] = filters.priceRange;
      filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
    }

    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    return filteredProducts;
  }
};
