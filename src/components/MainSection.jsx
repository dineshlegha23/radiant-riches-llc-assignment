import React from "react";
import LastUpdated from "./LastUpdated";
import Tabs from "./Tabs";
import Routing from "./Routing";
import Cards from "./Cards";
import RelatedDeals from "./RelatedDeals";

const MainSection = () => {
  return (
    <div className="mx-auto max-w-[1024px] px-5">
      <h1 className="text-5xl mt-10 text-[#2C384A]">
        Best Website builders in the US
      </h1>
      <LastUpdated />
      <Tabs />
      <Routing />
      <Cards />
      <RelatedDeals />
      <div className="flex justify-between mt-32 pl-10 mb-10">
        <h3 className="text-[32px] text-[#5C6874] ">
          Sign up and get exclusive <span className="block">special deals</span>
        </h3>
        <div className="self-center w-6/12">
          <input
            type="text"
            className="w-9/12 p-4 pl-3 rounded-s-lg bg-white text-sm focus:outline-blue-400"
          />
          <button className="bg-[#1B88F4] p-4 text-white text-sm rounded-e-xl hover:bg-blue-600 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
