import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | VistaVault',
  description: 'Learn more about VistaVault - your source for high-quality images',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-montserrat text-center">About VistaVault</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Our Mission</h2>
          <p className="text-gray-600 mb-6 font-poppins leading-relaxed">
            VistaVault was created with a simple mission: to provide high-quality, accessible imagery for everyone. 
            We believe that great visuals have the power to transform projects, enhance communication, and inspire creativity.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 font-montserrat">The Collection</h2>
          <p className="text-gray-600 mb-6 font-poppins leading-relaxed">
            Our curated collection features thousands of carefully selected images across multiple categories. 
            From stunning landscapes to compelling portraits, architecture to abstract concepts, we've built 
            a diverse library that serves creators across all disciplines.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Our Values</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 font-poppins">
            <li className="mb-2">Quality over quantity - every image meets our high standards</li>
            <li className="mb-2">Accessibility - making great imagery available to everyone</li>
            <li className="mb-2">Diversity - representing a wide range of subjects and perspectives</li>
            <li className="mb-2">Community - supporting photographers and content creators</li>
            <li>Innovation - continually improving our platform and offerings</li>
          </ul>
          
          <div className="bg-black text-white p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold mb-3 font-montserrat">The Team</h2>
            <p className="font-poppins leading-relaxed">
              VistaVault is maintained by a passionate team of photography enthusiasts, developers, and designers 
              who believe in the power of visual storytelling. We're committed to building the best platform 
              for discovering and sharing exceptional photography.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 font-montserrat">Join Our Journey</h3>
          <p className="text-gray-600 mb-6 font-poppins">
            Whether you're a photographer looking to share your work or a creator in search of the perfect image, 
            we invite you to be part of our growing community.
          </p>
          <a href="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-md font-poppins hover:bg-gray-800 transition-colors duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}