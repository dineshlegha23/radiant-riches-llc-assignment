import React, { useState } from "react";
import { links } from "../data.js";
import Search from "../utils/Search.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`transition-all p-3 h-[64px] bg-[#212731] text-[#D1D6DA] text-[14px] ${
        isOpen ? "xs:h-56 xs:pl-5" : "xs:h-15"
      }`}
    >
      <div className="max-w-5xl mx-auto flex gap-20 md:gap-7 justify-center xs:flex xs:flex-col xs:text-center">
        <div className={`flex w-full relative ${isOpen ? "xs:mx-auto" : ""}`}>
          <img
            src={Search}
            alt="search icon"
            className="absolute top-[20%] left-2"
          />
          <input
            type="text"
            className="h-[37px] w-[258px] xs:w-[200px] md:h-[37] sm:w-[150px] rounded-lg px-4 text-black pl-10"
          />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="xs:block hidden absolute top-[15px] right-5 text-2xl mt-1 "
        >
          {!isOpen ? <RxHamburgerMenu /> : <FaTimes />}
        </div>
        <ul
          className={`flex gap-16 my-auto md:gap-8 xs:flex-col xs:my-[-15px] ${
            isOpen ? "xs:block" : "xs:hidden"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer transition-all hover:text-white xs:my-5"
            >
              {link.title}
            </li>
          ))}
        </ul>
        <a
          className={`my-auto cursor-pointer transition-all hover:text-white xs:mx-auto xs:mt-[-12px] ${
            isOpen ? "xs:block" : "xs:hidden"
          }`}
        >
          Today's Deals
        </a>
      </div>
    </div>
  );
};

export default Navbar;
