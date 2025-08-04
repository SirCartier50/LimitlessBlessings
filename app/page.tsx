'use client'

import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">LB</span>
              </div>
              <span className="ml-3 text-xl font-bold text-black uppercase tracking-wider">
                Limitless
              </span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight uppercase tracking-tight mb-6">
              Limitless
              <br />
              <span className="text-gray-300">Style</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Premium hoodies, t-shirts, hats, and sweats designed for comfort and style. 
              Quality materials, timeless designs.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-8">
            All Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Simple Product Cards */}
            <div className="bg-white border border-gray-200 p-4">
              <div className="aspect-square bg-gray-100 mb-4"></div>
              <h3 className="font-semibold text-black mb-2">Premium Cotton Hoodie</h3>
              <p className="text-xl font-bold text-black">$89.99</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-4">
              <div className="aspect-square bg-gray-100 mb-4"></div>
              <h3 className="font-semibold text-black mb-2">Classic Cotton T-Shirt</h3>
              <p className="text-xl font-bold text-black">$29.99</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-4">
              <div className="aspect-square bg-gray-100 mb-4"></div>
              <h3 className="font-semibold text-black mb-2">Athletic Performance Hat</h3>
              <p className="text-xl font-bold text-black">$24.50</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-4">
              <div className="aspect-square bg-gray-100 mb-4"></div>
              <h3 className="font-semibold text-black mb-2">Comfort Fit Sweatpants</h3>
              <p className="text-xl font-bold text-black">$64.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 