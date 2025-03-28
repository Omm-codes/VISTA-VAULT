// src/app/categories/[slug]/page.tsx
import Gallery from '../../components/Gallery';
import Link from 'next/link';

type Props = {
    params: { slug: string }; // Define the expected params type
};

export default function CategoryPage({ params }: Props) {
    const { slug } = params; // Extract slug from params
    
    // Format the category name to look better (capitalize first letter of each word)
    const formattedCategory = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Navigation */}
            <nav className="bg-white border-b py-3 px-4 md:px-8">
                <ol className="flex text-sm text-gray-600">
                    <li className="hover:text-blue-600">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="mx-2">/</li>
                    <li className="hover:text-blue-600">
                        <Link href="/categories">Categories</Link>
                    </li>
                    <li className="mx-2">/</li>
                    <li className="font-medium text-gray-900">{formattedCategory}</li>
                </ol>
            </nav>
            
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{formattedCategory}</h1>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Explore our collection of high-quality {formattedCategory.toLowerCase()} images for your projects.
                    </p>
                </header>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <Gallery topic={slug} />
                </div>
            </div>
        </div>
    );
}
