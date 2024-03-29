import React from "react";
import DownArrow from "../utils/DownArrow.svg";
import Trophy from "../utils/Trophy.svg";
import Diamond from "../utils/Diamond.svg";
import Information from "../utils/Information.svg";
import FilledTick from "../utils/FilledTick.svg";
import StarsHalf from "../utils/StarsHalf.svg";
import StarsFull from "../utils/StarsFull.svg";

const CardItem = ({
  id,
  heading,
  headingDesc,
  mainHighlight,
  rating,
  image,
  imageText,
  bestIn,
  whyWeLoveIt,
  off,
}) => {
  return (
    <section className="relative p-5 bg-white rounded-xl text-[#626E79] text-sm flex justify-between cursor-default sm:flex-col">
      <div className="flex flex-col text-center gap-4 my-auto">
        {bestIn && (
          <div className="flex gap-2 bg-[#FF7724] text-white absolute top-[-15px] left-[-7px] px-2 py-1 text-base rounded-e-md">
            <img
              src={`${bestIn === "Choice" ? `${Trophy}` : `${Diamond}`}`}
              alt="trophy icon"
            />
            <p>Best {bestIn}</p>
          </div>
        )}
        <p className="absolute top-[10%] left-[-2%] md:left-[-3%] sm:left-[-4%] xs:left-[-6%] h-10 w-10 rounded-full bg-white p-2.5 border-[1px]">
          {id}
        </p>
        <img
          className="min-w-32 max-w-32 lg:pr-3 sm:mx-auto sm:min-w-[60%]"
          src={image}
          alt={heading}
        />
        <p>{imageText}</p>
      </div>

      <div className="text-base max-w-[475px] sm:mt-5 sm:mb-10">
        <h3 className="font-bold">
          {heading}
          <span className="font-normal">{headingDesc}</span>
          {off && (
            <p className="bg-blue-100 rounded-lg text-sm font-normal text-[#074786] w-fit px-2 py-1 my-2">
              {off}% off
            </p>
          )}
          <div className="text-black/80 mt-1">
            Main highlights
            <span className="block font-normal mt-2 ml-5 text-[#626E79]">
              {Array.isArray(mainHighlight) ? (
                <div className="bg-[#FFF4ED] rounded-lg p-2">
                  {mainHighlight.map((item, index) => (
                    <div key={index} className="flex">
                      <span className="m-1 bg-white text-blue-500 cursor-pointer  px-2 py-1 rounded-lg content-center">
                        {item.slice(0, 4)}
                      </span>
                      <p className="mx-1 my-2">{item.slice(3)}</p>
                    </div>
                  ))}
                </div>
              ) : (
                mainHighlight
              )}
            </span>
          </div>
        </h3>
        {whyWeLoveIt && (
          <div className="mt-5 mb-4">
            Why we love it
            {whyWeLoveIt.map((item, index) => (
              <div key={index} className="flex gap-2 m-1">
                <img src={FilledTick} alt="tick icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}
        <div className="text-blue-500 mt-5 flex">
          <button className="hover:text-blue-300 transition-all">
            Show more
          </button>
          <img
            src={DownArrow}
            alt="down icon"
            className="cursor-pointer w-5 mt-1 ml-1"
          />
        </div>
      </div>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="bg-[#F3F9FF] font-bold p-5 px-10 md:mt-[-20px] sm:p-2 sm:px-2 sm:mt-0 [@media(max-width:330px)]:hidden sm:absolute sm:top-0 sm:right-0 text-center self-center w-auto mt-[-10%] rounded-b-lg">
          <div className="text-[32px] flex sm:mt-5">
            <h2 className="sm:mx-auto">{rating}</h2>
            {rating > 9.3 && (
              <img
                src={Information}
                alt="information icon"
                className="mt-[-45px] cursor-pointer"
              />
            )}
          </div>
          <p className="text-sm font-normal mt-5">
            {rating > 9.6
              ? "Exceptional"
              : rating > 9.3
              ? "Excellent"
              : "Very Good"}
          </p>
          <img
            src={`${rating > 9.3 ? `${StarsFull}` : `${StarsHalf}`}`}
            alt="stars"
            className="mt-2"
          />
        </div>
        <button className="bg-[#1B88F4] w-full text-white rounded-lg py-2 px-24 sm:self-center md:px-12 bottom-0 transition-all hover:bg-blue-600">
          View
        </button>
      </div>
    </section>
  );
};

export default CardItem;
