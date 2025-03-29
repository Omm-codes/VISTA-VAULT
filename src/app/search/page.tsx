'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Montserrat, Poppins } from 'next/font/google';

// Configure fonts
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/results/${searchQuery}`);
    }
  }

  return (
    <div className={`container mx-auto px-4 py-6 sm:py-12 ${montserrat.variable} ${poppins.variable}`}>
      {/* Header */}
      <div className="mb-8 flex items-center">
        <Link href="/" className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold font-montserrat">Search Images</h1>
      </div>
      
      {/* Search Bar */}
      <div className="mb-8">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for images..."
            className="w-full p-4 pr-12 border border-gray-300 rounded-lg shadow-sm font-poppins focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
      
      {/* Popular Searches */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 font-montserrat">Popular Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['Nature', 'Architecture', 'Travel', 'Food', 'Animals', 'Technology'].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-poppins hover:bg-gray-200"
              onClick={() => {
                setSearchQuery(tag);
                setTimeout(() => handleSubmit(), 0);
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      {/* Results placeholder */}
      <div className="mt-8">
        <p className="text-center text-gray-500 font-poppins">
          {searchQuery ? 
            'Enter your search and press the search button' : 
            'Type something in the search bar to find images'
          }
        </p>
      </div>
    </div>
  );
}