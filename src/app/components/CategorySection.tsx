import Link from "next/link";


const categories = [
    { 
        name: 'Nature', 
        slug: 'nature', 
        imageUrl: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Explore breathtaking landscapes and wildlife'
    },
    { 
        name: 'Classic', 
        slug: 'classic', 
        imageUrl: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Timeless moments captured in photographs'
    },
    { 
        name: 'Sports', 
        slug: 'sports', 
        imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Action-packed sports photography'
    },
    { 
        name: 'Social', 
        slug: 'social', 
        imageUrl: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Capturing human connection and interaction'
    },
    { 
        name: 'Food', 
        slug: 'food', 
        imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Delicious culinary photography'
    },
    { 
        name: 'Architecture', 
        slug: 'architecture', 
        imageUrl: 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Stunning buildings and architectural design'
    }
];

export default function CategorySection() {
    return (
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
                            <h3 className="text-2xl font-bold mb-2 font-montserrat">{category.name}</h3>
                            <p className="text-sm opacity-90 font-poppins">{category.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}