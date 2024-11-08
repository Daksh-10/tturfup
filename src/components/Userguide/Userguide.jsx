import React, { useEffect, useState } from 'react';

const backgrounds = [
  '/src/assets/bg1.png',
  '/src/assets/ba3.png',
  '/src/assets/bg3.png'
];

const UserGuide = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
  className="min-h-screen flex items-center justify-center text-white px-4"
  style={{
    backgroundImage: `url(${backgrounds[currentBackground]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
  }}
>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-5xl text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Unlocking the Full Potential of Our Website: A User Guide
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Owner</h2>
            <p className="mb-4">
              <strong>Contact Turfup:</strong> Reach out to the Turfup team to start the tokenization process and get support.
            </p>
            <p className="mb-4">
              <strong>Decide on Tokens:</strong> Choose how many tokens to create for your property, which affects its value and market distribution.
            </p>
            <p>
              <strong>Know the Rules:</strong> Understand the legal and financial implications of tokenizing your property, including ownership rights and responsibilities.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Buyer/Seller</h2>
            <p className="mb-4">
              <strong>Invest in Tokens:</strong> Buyers can purchase property tokens, representing fractional ownership, using stable cryptocurrencies for easy transactions.
            </p>
            <p className="mb-4">
              <strong>Buffer System:</strong> Sellers can list their tokens for sale in a buffer, allowing them to remain available for future buyers even without immediate interest.
            </p>
            <p>
              <strong>Consider Popularity and Location:</strong> The buffer size for each token depends on its popularity and location, which can affect marketability and resale value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;