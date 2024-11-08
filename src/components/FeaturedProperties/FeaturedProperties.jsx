import React from 'react';

const FeaturedProperties = () => {
  return (
    <section className="bg-blue-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold uppercase mb-2 animate-fadeIn">Featured Properties</h2>
        <p className="text-gray-400 mb-8 animate-fadeIn delay-100">
          Seamless currency exchange platform for purchase and sell properties securely.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-16 animate-fadeIn delay-200">
          {/* Lands Card */}
          <div className="bg-gray-800 rounded-lg p-10 transform transition duration-500 hover:scale-105 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Lands</h3>
            <p className="text-gray-400 mb-4">100+ worth</p>
            <p className="text-green-400 text-xl font-bold mb-6">Rs. 120,00,00,000</p>
            <img 
              src= '/src/assets/pro1.png'
              alt="Lands" 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />
          </div>

          {/* Apartment Card */}
          <div className="bg-gray-800 rounded-lg p-10 transform transition duration-500 hover:scale-105 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Apartment</h3>
            <p className="text-gray-400 mb-4">50+ worth</p>
            <p className="text-green-400 text-xl font-bold mb-6">Rs. 80,00,00,000</p>
            <img 
              src= '/src/assets/pro2.png'
              alt="Apartment" 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />
          </div>

          {/* Buildings Card */}
          <div className="bg-gray-800 rounded-lg p-10 transform transition duration-500 hover:scale-105 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Buildings</h3>
            <p className="text-gray-400 mb-4">50+ worth</p>
            <p className="text-green-400 text-xl font-bold mb-6">Rs. 80,00,00,000</p>
            <img 
              src= '/src/assets/pro3.png' 
              alt="Buildings" 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />
          </div>
        </div>

        <div className="mt-12 animate-fadeIn delay-300">
          <h3 className="text-6xl font-bold uppercase mb-2">Discover Our Best Deals.</h3>
          <p className="text-gray-400">Choose the best properties to invest in around the world.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
