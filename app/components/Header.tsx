'use client'

import { MoreHorizontal, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-gray-200 py-4 px-6 flex items-center justify-between relative">
      <div className="flex items-center">
        <svg
          className="w-8 h-8 text-blue-600 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
        <span className="text-2xl font-bold text-gray-800">VISION</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/ogonlaser" className="text-gray-700 hover:text-gray-900">
          Ögonlaser
        </Link>
        <Link
          href="/linsoperation"
          className="text-gray-700 hover:text-gray-900"
        >
          Linsoperation
        </Link>
        <Link
          href="/modern-teknologi"
          className="text-gray-700 hover:text-gray-900"
        >
          Modern teknologi
        </Link>
        <button className="text-gray-700 hover:text-gray-900">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </nav>
      <button
        className="md:hidden text-gray-700 hover:text-gray-900"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-gray-200 w-64 p-6 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          <X className="w-6 h-6" />
        </button>
        <nav className="flex flex-col space-y-4 mt-12">
          <Link
            href="/ogonlaser"
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Ögonlaser
          </Link>
          <Link
            href="/linsoperation"
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Linsoperation
          </Link>
          <Link
            href="/modern-teknologi"
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Modern teknologi
          </Link>
          <button className="text-gray-700 hover:text-gray-900 flex items-center">
            <MoreHorizontal className="w-6 h-6 mr-2" /> More options
          </button>
        </nav>
      </div>
    </header>
  )
}
