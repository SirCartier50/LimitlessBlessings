'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { 
  FunnelIcon, 
  Squares2X2Icon,
  ListBulletIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

import { useState } from 'react'

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
    rating: 1.5,
    reviewCount: 94,
    category: 'Men'
  },
  {
    id: '6',
    name: 'Performance Sports Bra',
    price: 52.00,
    originalPrice: 65.00,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    rating: 2.9,
    reviewCount: 178,
    category: 'Women',
    isSale: true
  },
  {
    id: '7',
    name: 'Training Joggers',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    rating: 3.4,
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
  'Men',
  'Women',
  'Kids',
  'Accessories'
]

const prices = [
  'Under $50',
  '$50 - $100',
  '$100 - $200',
  'Over $200'
]

const ratings = [
  '4+ Stars',
  '3+ Stars',
  '2+ Stars',
  '1+ Stars'
]

const sortOptions = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
  'Best Rated'
]

export default function ShopPage() {
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const prices_helper = (price: number) => {
    let res = true
    if (selectedPrices.length != 0){
      if (price < 50.00){
        res = selectedPrices.includes(prices[0])
      }else if(price < 100.00){
        res = selectedPrices.includes(prices[1])
      }else if(price < 200.00){
        res = selectedPrices.includes(prices[2])
      }else if(price == 100.00){
        res = (selectedPrices.includes(prices[1]) || selectedPrices.includes(prices[2]))
      }else if(price == 200.00){
        res = (selectedPrices.includes(prices[2]) || selectedPrices.includes(prices[3]))
      }else{
        res = selectedPrices.includes(prices[3])
      }
    }
    return res
  }

  const categories_helper = (category: string) => {
    let res = true
    if (selectedCategories.length != 0){
      res = selectedCategories.includes(category)
    }
    return res
  }

  const ratings_helper = (rating: number) => {
    let res = true
    if (selectedRatings.length != 0){
      if(rating >= 4.0){
        res = selectedRatings.includes(ratings[0])
      }else if(rating >= 3.0){
        res = selectedRatings.includes(ratings[1])
      }else if(rating >= 2.0){
        res = selectedRatings.includes(ratings[2])
      }else{
        res = selectedRatings.includes(ratings[3])
      }
    }
    return res
  }

  const filteredProducts = products.filter(product => {
    return(categories_helper(product.category) && prices_helper(product.price) && ratings_helper(product.rating))
  })
  
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
                        checked={selectedCategories.includes(category)}
                        className="rounded border-gray-300 text-black focus:ring-black"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          }
                        }}
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
                  {prices.map((price) => (
                    <label key={price} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedPrices.includes(price)}
                        className="rounded border-gray-300 text-black focus:ring-black"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedPrices([...selectedPrices, price]);
                          } else {
                            setSelectedPrices(selectedPrices.filter(c => c !== price));
                          }
                        }}
                      />
                      <span className="ml-2 text-gray-700 text-sm">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">Rating</h4>
                <div className="space-y-2">
                  {ratings.map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        className="rounded border-gray-300 text-black focus:ring-black"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRatings([...selectedRatings, rating]);
                          } else {
                            setSelectedRatings(selectedRatings.filter(c => c !== rating));
                          }
                        }}
                      />
                      <span className="ml-2 text-gray-700 text-sm">{rating}</span>
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
                  <span className="text-gray-600 text-sm">Showing {filteredProducts.length} products</span>
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
              {filteredProducts.map((product) => (
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