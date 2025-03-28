import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories | VistaVault',
  description: 'Browse our image categories',
};

const categories = [
  { 
    name: 'Nature',
    slug: 'nature',
    description: 'Explore breathtaking landscapes and wildlife',
    imageUrl: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 152
  },
  { 
    name: 'Architecture',
    slug: 'architecture',
    description: 'Stunning buildings and architectural design',
    imageUrl: 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 98
  },
  { 
    name: 'Classic',
    slug: 'classic',
    description: 'Timeless moments captured in photographs',
    imageUrl: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 76
  },
  { 
    name: 'Sports',
    slug: 'sports',
    description: 'Action-packed sports photography',
    imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 120
  },
  { 
    name: 'Social',
    slug: 'social',
    description: 'Capturing human connection and interaction',
    imageUrl: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 85
  },
  { 
    name: 'Food',
    slug: 'food',
    description: 'Delicious culinary photography',
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 103
  },
  { 
    name: 'Travel',
    slug: 'travel',
    description: 'Discover places around the world',
    imageUrl: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 142
  },
  { 
    name: 'Abstract',
    slug: 'abstract',
    description: 'Creative and abstract photography',
    imageUrl: 'https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 67
  },
  { 
    name: 'Portrait',
    slug: 'portrait',
    description: 'Captivating human portraits and expressions',
    imageUrl: 'https://images.pexels.com/photos/3754228/pexels-photo-3754228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 118
  },
  { 
    name: 'Wildlife',
    slug: 'wildlife',
    description: 'Animals in their natural habitats',
    imageUrl: 'https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 89
  },
  { 
    name: 'Technology',
    slug: 'technology',
    description: 'Modern tech and digital innovation',
    imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 75
  },
  { 
    name: 'Black & White',
    slug: 'black-and-white',
    description: 'Timeless monochrome photography',
    imageUrl: 'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 94
  }
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 font-montserrat text-center">Image Categories</h1>
      <p className="text-lg text-gray-600 font-poppins text-center mb-8">Browse our complete collection of high-quality images by category</p>
      
      {/* Featured Statement */}
      <div className="bg-black text-white py-10 px-6 mb-16 rounded-lg shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 tracking-wide">Discover the perfect images for your project</h2>
          <p className="font-poppins text-gray-300 text-lg leading-relaxed">
            Our carefully curated categories make finding the right visuals simple and enjoyable
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            <div className="relative group h-80 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200">
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={category.imageUrl} 
                  alt={`${category.name} category`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-bold font-montserrat">{category.name}</h3>
                  <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-poppins">{category.count} images</span>
                </div>
                <p className="text-sm opacity-90 font-poppins">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Promo Box */}
      <div className="mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">Most Popular Categories</h3>
          <ul className="space-y-2 font-poppins">
            <li className="flex justify-between">
              <span>Nature</span>
              <span className="text-gray-500">152 images</span>
            </li>
            <li className="flex justify-between">
              <span>Travel</span>
              <span className="text-gray-500">142 images</span>
            </li>
            <li className="flex justify-between">
              <span>Sports</span>
              <span className="text-gray-500">120 images</span>
            </li>
            <li className="flex justify-between">
              <span>Portrait</span>
              <span className="text-gray-500">118 images</span>
            </li>
            <li className="flex justify-between">
              <span>Food</span>
              <span className="text-gray-500">103 images</span>
            </li>
          </ul>
        </div>
        
        {/* Replaced "Need Something Specific?" with "Image Quality Standards" */}
        <div className="bg-black text-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">Image Quality Standards</h3>
          <p className="mb-4 font-poppins">
            All photos in our collection adhere to the following quality standards:
          </p>
          <ul className="mb-6 font-poppins space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-lg">•</span>
              <span>High resolution (minimum 1920x1080px)</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-lg">•</span>
              <span>Professionally composed and edited</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-lg">•</span>
              <span>Free for personal and commercial use</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="text-center p-10 border-t border-gray-200 mt-16">
        <h3 className="text-2xl font-bold mb-4 font-montserrat">Stay Updated</h3>
        <p className="text-gray-600 mb-6 font-poppins max-w-xl mx-auto">
          Subscribe to our newsletter to receive updates when new categories and images are added to our collection.
        </p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow p-3 border border-gray-300 rounded-l-md font-poppins focus:outline-none focus:border-black"
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-md font-poppins hover:bg-gray-800 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}