import React from "react";
import Tick from "../utils/TickIcon.svg";
import DownArrow from "../utils/DownArrow.svg";

const LastUpdated = () => {
  return (
    <div className="text-sm text-[#4B5665] flex justify-between py-3 border-[1.5px] border-opacity-50 border-y-gray-400 border-x-0 mt-5">
      <div className="flex gap-8">
        <div className="flex gap-2">
          <img src={Tick} alt="tick icon" />
          <p>Last Updated - February 22, 2020</p>
        </div>

        <div className="flex gap-2">
          <img src={Tick} alt="tick icon" />
          <p>Advertising Disclosure</p>
        </div>
      </div>
      <div className="flex">
        <p>Top Relevant</p>
        <img src={DownArrow} alt="arrow icon" className="w-5" />
      </div>
    </div>
  );
};

export default LastUpdated;
