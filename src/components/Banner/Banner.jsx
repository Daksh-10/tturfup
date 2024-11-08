import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  // State for managing the image in the left card
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    '/src/assets/ba1.png',
    '/src/assets/ba2.png',
    '/src/assets/ba3.png'
  ];

  // Change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="p-4 md:p-10 lg:p-16 xl:p-24 bg-gradient-to-b from-blue-950 to-gray-800">
      <AnimatePresence>
        <motion.div
          className="grid gap-4 lg:grid-cols-3" // Use a 3-column layout for larger screens
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side - Image Card (Larger) */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg col-span-2" // Make this span across 2 columns
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image with transition */}
            <motion.img
              key={images[imageIndex]}  // Key prop triggers re-render when the image changes
              src={images[imageIndex]}
              alt="Building"
              className="w-full h-64 md:h-96 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Right Side - Map Card (Smaller) */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src= '/src/assets/loc.png'
              alt="Map"
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Average Home Price Card */}
          <div className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-center shadow-md">
            <span className="text-green-400 text-2xl font-semibold">Average Home Price</span>
            <span className="text-4xl font-bold">$450,000+</span>
          </div>

          {/* Inventory Level Card */}
          <div className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-center shadow-md">
            <span className="text-yellow-400 text-2xl font-semibold">Inventory Level</span>
            <span className="text-4xl font-bold">250+</span>
            <span className="text-sm text-gray-400">Properties available</span>
          </div>

          {/* Days on Market Card */}
          <div className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-center shadow-md">
            <span className="text-orange-400 text-2xl font-semibold">Days on Market</span>
            <span className="text-4xl font-bold">30 Days</span>
            <span className="text-sm text-gray-400">Average</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
