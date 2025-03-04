// src/components/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          NarrativeLive
        </Link>
        {/* Десктопное меню */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-500">Главная</Link>
          <Link href="/about" className="hover:text-blue-500">Обо мне</Link>
          <Link href="/blog" className="hover:text-blue-500">Блог</Link>
          <Link href="/books" className="hover:text-blue-500">Книги</Link>
          <Link href="/contact" className="hover:text-blue-500">Контакты</Link>
        </div>
        {/* Мобильное меню (бургер) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Мобильное выпадающее меню */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-200">Главная</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-gray-200">Обо мне</Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md hover:bg-gray-200">Блог</Link>
            <Link href="/books" className="block px-3 py-2 rounded-md hover:bg-gray-200">Книги</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-200">Контакты</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
