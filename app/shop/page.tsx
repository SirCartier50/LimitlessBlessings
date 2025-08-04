import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { 
  FunnelIcon, 
  Squares2X2Icon,
  ListBulletIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

// Sample clothing product data
const products = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 127,
    category: 'Men',
    isSale: true
  },
  {
    id: '2',
    name: 'Athletic Performance Hoodie',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 89,
    category: 'Women',
    isNew: true
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    price: 129.50,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 156,
    category: 'Men'
  },
  {
    id: '4',
    name: 'Sport Performance Leggings',
    price: 64.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 203,
    category: 'Women',
    isSale: true
  },
  {
    id: '5',
    name: 'Premium Athletic Shorts',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 94,
    category: 'Men'
  },
  {
    id: '6',
    name: 'Performance Sports Bra',
    price: 52.00,
    originalPrice: 65.00,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 178,
    category: 'Women',
    isSale: true
  },
  {
    id: '7',
    name: 'Training Joggers',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    rating: 4.4,
    reviewCount: 112,
    category: 'Men'
  },
  {
    id: '8',
    name: 'Athletic Tank Top',
    price: 34.50,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 89,
    category: 'Women',
    isNew: true
  }
]

const categories = [
  'All Categories',
  'Men',
  'Women',
  'Kids',
  'Accessories'
]

const sortOptions = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
  'Best Rated'
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-black mb-2 uppercase tracking-tight">
            Shop All Products
          </h1>
          <p className="text-gray-600">
            Discover our premium athletic wear collection designed for performance and style
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center uppercase tracking-wide">
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="ml-2 text-gray-700 text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700 text-sm">Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700 text-sm">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700 text-sm">$100 - $200</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700 text-sm">Over $200</span>
                  </label>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="ml-2 text-gray-700 text-sm">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <h4 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">Availability</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700 text-sm">In Stock</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700 text-sm">On Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700 text-sm">New Arrivals</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 text-sm">Showing {products.length} products</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* View Toggle */}
                  <div className="flex items-center border border-gray-300">
                    <button className="p-2 bg-black text-white">
                      <Squares2X2Icon className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-black">
                      <ListBulletIcon className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm">
                      {sortOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 text-sm">
                  Previous
                </button>
                <button className="px-3 py-2 bg-black text-white font-bold">1</button>
                <button className="px-3 py-2 text-gray-700 hover:text-black text-sm">2</button>
                <button className="px-3 py-2 text-gray-700 hover:text-black text-sm">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 text-sm">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 