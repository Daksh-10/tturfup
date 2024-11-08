import React, { useState } from "react";

const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      location: "Frankfurt, Germany",
      type: "Apartment",
      tokens: 1000,
      availableTokens: 200,
      price: "$400",
      imageUrl:'/src/assets/ger.png'
    },
    {
      location: "Beverly Hills, California",
      type: "Apartment",
      tokens: 3000,
      availableTokens: 1500,
      price: "$200",
      imageUrl:'/src/assets/cal.png'
    },
    {
      location: "Udaipur, Rajasthan",
      type: "Property",
      tokens: 5000,
      availableTokens: 2990,
      price: "$100",
      imageUrl:'/src/assets/raj.png'
    },
  ];

  const visibleCards = 3; // Number of cards visible at once
  const totalCards = properties.length;
  const maxIndex = Math.ceil(totalCards / visibleCards) - 1; // Calculate max index for 3-card sliding

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-left">Recommendation</h2>

        {/* Box around carousel */}
        <div className="relative bg-transparent rounded-lg p-6 shadow-lg overflow-hidden">
          <div className="flex overflow-hidden">
            {/* Card Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 mx-3 min-w-[300px] max-w-[300px] shadow-lg"
                >
                  <img
                    src={property.imageUrl}
                    alt={property.location}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    {property.location}
                  </h3>
                  <p className="text-gray-400 mb-1">{property.type}</p>
                  <p className="text-gray-400 mb-4">On Sale</p>
                  <p className="text-gray-400 mb-2">
                    Total Tokens: {property.tokens}
                  </p>
                  <p className="text-gray-400 mb-2">
                    Available Tokens: {property.availableTokens}
                  </p>
                  <p className="text-gray-400 mb-6">
                    Token Price: {property.price}
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-4 hover:bg-blue-700 transition duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="bg-blue-600 text-white mt-8 py-6 rounded-xl">
          <h3 className="text-2xl pl-8 font-semibold">Take a look at our numbers</h3>
          <p className="text-gray-300 pl-8">
            We revolutionise the way you own a piece of the future through
            crypto and tokenized real estate.
          </p>
          <div className="flex justify-center gap-8 mt-4">
            <div className="text-center">
              <p className="text-3xl font-bold">99%</p>
              <p className="text-gray-300">Customer satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">250</p>
              <p className="text-gray-300">In property sales</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">50</p>
              <p className="text-gray-300">Successful sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;
