import React, { useState, useEffect } from 'react';

const MainInterface = () => {
  const bgImages = [
    '/src/assets/bg1.png',
  '/src/assets/bg2.png',
  '/src/assets/bg3.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${bgImages[currentImage]})` }}
    >
      {/* Logo and Navbar */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6 bg-black bg-opacity-50">
        <h1 className="text-lg md:text-2xl font-bold">TURFUP</h1>
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#home" className="hover:text-gray-300">HOME</a>
          <a href="#land" className="hover:text-gray-300">LAND</a>
          <a href="#building" className="hover:text-gray-300">BUILDING</a>
          <a href="#wallet" className="hover:text-gray-300">WALLET</a>
        </nav>
        <div className="flex items-center space-x-3 md:space-x-4">
          <button className="text-lg">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded text-sm md:text-base">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="text-center px-4 md:px-6 lg:px-8 mt-10 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">OWN A PIECE OF THE FUTURE</h2>
        <p className="text-md md:text-lg mb-8">Choose the best properties to invest in around the world.</p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-black bg-opacity-50 rounded-lg px-4 py-3">
          <select className="w-full md:w-auto bg-transparent text-white border-none focus:outline-none">
            <option>Location</option>
            <option>New York</option>
            <option>London</option>
            <option>Tokyo</option>
          </select>
          <select className="w-full md:w-auto bg-transparent text-white border-none focus:outline-none">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Commercial</option>
          </select>
          <input
            type="number"
            placeholder="Min Price"
            className="w-full md:w-auto bg-transparent text-white border-none focus:outline-none"
          />
          <input
            type="number"
            placeholder="Max Price"
            className="w-full md:w-auto bg-transparent text-white border-none focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center w-full md:w-auto justify-center">
            <i className="fa fa-search mr-2"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainInterface;
