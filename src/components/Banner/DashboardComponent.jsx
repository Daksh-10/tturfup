import React, { useState } from "react";

const DashboardComponent = () => {
  const [totalAmount, setTotalAmount] = useState("₹ 250000"); // Total amount example
  const [walletInfo, setWalletInfo] = useState([
    { location: "Udaipur, Rajasthan", price: "₹ 47", token: "INR" },
    { location: "Frankfurt, Germany", price: "0.0081", token: "Bitcoin" },
    { location: "Paris, France", price: "0.12", token: "Ethereum" },
    { location: "Morocco, Russia", price: "1000", token: "Tron" },
    { location: "Pune, Maharashtra", price: "500", token: "USDC" },
    { location: "Beverly Hills, California", price: "5", token: "LTC" },
  ]);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "03 Tokens bought DLF Flat, Delhi",
      time: "Today, 29 Aug at 12:00",
      amount: "3,000",
      token: "TRX",
    },
    {
      id: 2,
      description: "05 Tokens bought Trivandrum, Kerala",
      time: "Today, 29 Aug at 12:20",
      amount: "0.22",
      token: "ETH",
    },
  ]);

  // List of cities for properties
  const cities = ["NewDelhi", "Chicago", "LosAngeles", "SanDiego"];

  // Function to require images dynamically
  const getImage = (city) => {
    try {
      return `./src/assets/${city.toLowerCase()}.jpg`;
    } catch (err) {
      console.error(`Image not found for city: ${city}`);
      return null;
    }
  };

  return (
    <div className="bg-[#0A0B1A] text-white min-h-screen p-8">
      {/* Title Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">
          Find the Properties in These Cities.
        </h2>
        <p className="text-lg mb-6">
          Choose best properties to invest in around the world.
        </p>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white group"
            >
              <img
                src={getImage(city) || "default.jpg"} // Use default image if not found
                alt={city}
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-sm">
                  {Math.floor(Math.random() * 10)} Properties
                </p>
                <h3 className="text-lg font-semibold">{city}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-600 my-12"></div>

      {/* Transactions and Statistics Section */}
      <section className="bg-white text-[#0A0B1A] rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wallet Information */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Wallet Information</h3>
          <p className="mb-2">
            Total Amount: <span className="font-bold">{totalAmount}</span>
          </p>
          <ul className="mb-4 space-y-2">
            {walletInfo.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.location}</span>
                <span>
                  {item.price} {item.token}
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-green-500 text-white px-4 py-2 rounded mb-2">
            View All Investments
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>

        {/* Statistics */}
        <div className="col-span-1 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Statistics</h3>
          <div className="bg-gray-100 rounded w-full h-48 flex items-center justify-center">
            {/* Placeholder for Line Graph */}
            <p className="text-gray-600">Graph Placeholder</p>
          </div>
          <select className="mt-4 bg-gray-200 text-[#0A0B1A] px-4 py-2 rounded">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Daily</option>
          </select>
        </div>

        {/* Latest Transactions */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Latest Transactions</h3>
          <ul className="space-y-3">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="flex justify-between items-center p-3 bg-gray-100 rounded"
              >
                <div>
                  <p>{transaction.description}</p>
                  <p className="text-sm text-gray-600">{transaction.time}</p>
                </div>
                <span className="font-bold">
                  {transaction.amount} {transaction.token}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-gray-300 text-[#0A0B1A] px-4 py-2 rounded">
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default DashboardComponent;
