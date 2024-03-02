import React from "react";
import { tabsData } from "../data";

const Tabs = () => {
  return (
    <div className="flex gap-5 mt-3 flex-wrap">
      {tabsData.map((tab) => (
        <button
          key={tab.id}
          className="bg-white p-1 rounded-lg text-[13px] pl-4 pr-10 text-[#4B5665]"
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
