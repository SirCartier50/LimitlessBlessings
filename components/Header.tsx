'use client'

import { useState } from 'react'
import { 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  UserIcon, 
  Bars3Icon,
  XMarkIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">LB</span>
              </div>
              <span className="ml-3 text-xl font-bold text-black uppercase tracking-wider">
                Limitless
              </span>
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
              <HeartIcon className="h-6 w-6" />
            </button>
            
            <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200 relative">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
              <UserIcon className="h-6 w-6" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="#hoodies"
                className="nav-link block px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hoodies
              </Link>
              <Link
                href="#t-shirts"
                className="nav-link block px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                T-Shirts
              </Link>
              <Link
                href="#hats"
                className="nav-link block px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hats
              </Link>
              <Link
                href="#sweats"
                className="nav-link block px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sweats
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 