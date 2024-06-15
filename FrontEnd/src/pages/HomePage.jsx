import NewlyAdded from "@/components/HomePage/NewlyAdded";
import Swiper from "@/components/HomePage/Swiper";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex-col space-y-8 min-h-[70vh]">
      <Swiper />
      <NewlyAdded />
    </div>
  );
};

export default HomePage;
