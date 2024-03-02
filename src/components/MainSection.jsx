import React from "react";
import LastUpdated from "./LastUpdated";
import Tabs from "./Tabs";
import Routing from "./Routing";
import Cards from "./Cards";
import RelatedDeals from "./RelatedDeals";

const MainSection = () => {
  return (
    <div className="mx-auto max-w-[1024px] px-7">
      <h1 className="text-5xl mt-10 text-[#2C384A]">
        Best Website builders in the US
      </h1>
      <LastUpdated />
      <Tabs />
      <Routing />
      <Cards />
      <RelatedDeals />
      <div className="flex justify-between gap-10  mt-16 mb-10 md:pl-2 sm:flex-col sm:text-center">
        <h3 className="pl-9 lg:pl-0 text-[32px] text-[#5C6874] w-full">
          Sign up and get exclusive <span className="block">special deals</span>
        </h3>
        <div className="w-full flex justify-center self-center md:w-full sm:mt-5 xs:w-full xs:flex xs:flex-col">
          <input
            type="text"
            className="w-full pl-5 xs:w-full p-4  rounded-s-lg bg-white text-sm focus:outline-blue-400"
          />
          <button className="bg-[#1B88F4] min-w-[100px] xs:w-full p-4 text-white text-sm rounded-e-xl hover:bg-blue-600 transition-all xs:mt-5 xs:rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
