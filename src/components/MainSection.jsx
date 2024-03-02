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
    </div>
  );
};

export default MainSection;
