import React from "react";
import MainInterface from "./components/MainInterface/MainInterface"
import Banner from "./components/Banner/Banner";
import DashboardComponent from "./components/Banner/DashboardComponent"
import Footer from "./components/Footer/Footer";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";
import PropertyCarousel from "./components/PropertyCarousel/PropertyCarousel";
import UserGuide from "./components/Userguide/Userguide";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <MainInterface />
      <FeaturedProperties/>
      <Banner />
      <PropertyCarousel/>
      <DashboardComponent />
      <UserGuide/>
      <Footer />
    </main>
  );
};

export default App;
