import Gallery from "./components/Gallery";
import CategorySection from "./components/CategorySection";
import { Inter, Poppins, Montserrat } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

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

export default function Home() {
  return (
    <div className={`container mx-auto px-4 py-6 sm:py-12 ${montserrat.variable} ${poppins.variable}`}>
      {/* Header - Simple & Clean with improved mobile spacing */}
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 font-montserrat tracking-tight">
          <span className="text-black">Vista</span>
          <span className="text-gray-700">Vault</span>
        </h1>
        <p className="text-md sm:text-lg text-gray-600 font-poppins">
          Discover and download stunning high-quality images
        </p>
      </div>
      
      {/* Categories Section - FIRST with better mobile layout */}
      <section className="mb-12 sm:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-montserrat">Categories to Search</h2>
          <p className="text-gray-600 font-poppins mt-2 md:mt-0">Browse our curated collections</p>
        </div>
        <CategorySection />
      </section>
      
      {/* Featured Statement with improved mobile spacing */}
      <div className="bg-black text-white py-10 sm:py-14 px-4 sm:px-6 mb-12 sm:mb-20 rounded-lg shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-4 sm:mb-6 tracking-wide">Photography is the art of frozen time</h2>
          <p className="font-poppins text-gray-300 text-base sm:text-lg leading-relaxed">
            The ability to capture moments that would otherwise be lost forever
          </p>
        </div>
      </div>

      {/* Featured Gallery Section */}
      <section className="mb-12 sm:mb-16">
        <Gallery />
      </section>
      
      {/* Call to Action with improved mobile layout */}
      <div className="bg-gray-100 p-6 sm:p-10 rounded-lg shadow-inner text-center mt-12 sm:mt-20">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-montserrat">Ready to explore more?</h3>
        <p className="text-gray-700 mb-5 sm:mb-6 font-poppins">Dive into our full collection and find the perfect images for your next project.</p>
        <Link href="/categories">
          <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-md font-poppins hover:bg-gray-800 active:bg-gray-900 transition-colors duration-300 w-full sm:w-auto">
            Explore More
          </button>
        </Link>
      </div>

      {/* Mobile-friendly quick access footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 flex justify-around items-center sm:hidden z-10">
        <Link href="/" className="flex flex-col items-center text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/categories" className="flex flex-col items-center text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="text-xs mt-1">Categories</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs mt-1">Search</span>
        </Link>
      </div>

      {/* Add padding to prevent content from being hidden behind the mobile footer */}
      <div className="pb-16 sm:pb-0"></div>
    </div>
  );
}