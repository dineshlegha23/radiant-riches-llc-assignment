import React from "react";
import DownArrow from "../utils/DownArrow.svg";

const CardItem = ({
  heading,
  headingDesc,
  mainHighlight,
  rating,
  image,
  imageText,
  bestIn,
  whyWeLoveIt,
}) => {
  return (
    <section className="p-5 bg-white rounded-lg text-[#626E79] text-sm flex justify-between">
      <div className="flex flex-col text-center gap-4 ">
        <img className="w-32" src={image} alt={heading} />
        <p>{imageText}</p>
      </div>

      <div className="text-base max-w-[475px]">
        <h3 className="font-bold">
          {heading}
          <span className="font-normal">{headingDesc}</span>
          <p className="text-black/80 mt-1">
            Main headings{" "}
            <span className="block font-normal mt-2 ml-5 text-[#626E79]">
              {mainHighlight}
            </span>
          </p>
        </h3>
        <div className="text-blue-500 mt-5 flex">
          <button> Show more</button>
          <img src={DownArrow} alt="down icon" className="w-5 mt-1 ml-1" />
        </div>
      </div>

      <div className="bg-[#F3F9FF] p-10 font-bold">
        <h2>{rating}</h2>
        <p>
          {rating > 9.6
            ? "Exceptional"
            : rating > 9.3
            ? "Excellent"
            : "Very Good"}
        </p>
      </div>
    </section>
  );
};

export default CardItem;
