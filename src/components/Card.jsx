import React from "react";

const Card = ({
  image,
  off,
  desc,
  builder,
  discountedPrice,
  originalPrice,
}) => {
  return (
    <div className="flex flex-col gap-2 bg-white text-[#626E79] rounded-xl overflow-hidden mx-2 px-5 cursor-default">
      <img
        src={image}
        alt=" computer image"
        className="min-w-32 max-w-32 mx-auto my-8 [@media(max-width:520px)]:min-w-[60%]"
      />
      <div className="flex gap-2">
        <span className="bg-[#F2F4F7] pr-3 rounded-lg p-1 text-sm text-[#074786] px-2">
          {off}% off
        </span>
        <span className="bg-[#F2F4F7] pr-4 rounded-lg p-1 text-sm text-[#074786] px-2">
          Limited time
        </span>
      </div>
      <h3 className="text-center font-bold text-base text-[#626E79] pr-9">
        {builder}
      </h3>
      <p>{desc}</p>
      <div className="flex gap-3 font-semibold flex-wrap">
        <span className="text-xl text-[#5C6874]">${discountedPrice}</span>
        <span className="self-end text-sm text-[#9FA9B3]">
          ${originalPrice}
        </span>
        <span className="self-end text-[13px] text-[#EF4C5D]">
          ({off}% off)
        </span>
      </div>
      <button className="text-base font-normal text-white bg-[#1B88F4] rounded-lg py-1.5 hover:bg-blue-600 transition-all mb-5">
        View Deal
      </button>
    </div>
  );
};

export default Card;
