
'use client';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function ProductFilters({ 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange, 
  sortBy, 
  setSortBy 
}: ProductFiltersProps) {
  const categories = [
    { id: 'all', name: 'All Categories', count: 120 },
    { id: 'tops', name: 'Tops', count: 45 },
    { id: 'dresses', name: 'Dresses', count: 32 },
    { id: 'bottoms', name: 'Bottoms', count: 28 },
    { id: 'shoes', name: 'Shoes', count: 35 },
    { id: 'outerwear', name: 'Outerwear', count: 25 },
    { id: 'accessories', name: 'Accessories', count: 40 }
  ];

  const priceRanges = [
    { min: 0, max: 50, label: 'Under $50' },
    { min: 50, max: 100, label: '$50 - $100' },
    { min: 100, max: 200, label: '$100 - $200' },
    { min: 200, max: 500, label: '$200 - $500' },
    { min: 500, max: 1000, label: 'Over $500' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const handleRatingFilter = (rating: number) => {
    alert(`Filter by ${rating}+ star rating applied!\n\nShowing products with rating ${rating} stars and above.`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h4>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 pr-8 cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Categories</h4>
          <div className="space-y-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h4>
          <div className="space-y-2">
            {priceRanges.map(range => (
              <button
                key={`${range.min}-${range.max}`}
                onClick={() => setPriceRange([range.min, range.max])}
                className={`w-full flex items-center p-3 rounded-lg transition-colors cursor-pointer ${
                  priceRange[0] === range.min && priceRange[1] === range.max
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <i className={`w-4 h-4 flex items-center justify-center mr-3 ${
                  priceRange[0] === range.min && priceRange[1] === range.max
                    ? 'ri-checkbox-circle-fill text-blue-600'
                    : 'ri-checkbox-blank-circle-line text-gray-400'
                }`}></i>
                <span className="font-medium">{range.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Rating</h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                onClick={() => handleRatingFilter(rating)}
                className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center mr-3">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`ri-star-fill text-sm ${
                        i < rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    ></i>
                  ))}
                </div>
                <span className="text-gray-700">& Up</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Size</h4>
          <div className="grid grid-cols-3 gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button
                key={size}
                onClick={() => alert(`Size ${size} filter applied!`)}
                className="p-2 text-center border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
