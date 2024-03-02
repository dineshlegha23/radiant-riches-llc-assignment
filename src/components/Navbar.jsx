import React from "react";
import { links } from "../data.js";
import Search from "../utils/Search.svg";

const Navbar = () => {
  return (
    <div className="p-3 h-[64px] bg-[#212731] text-[#D1D6DA] text-[14px]">
      <div className="max-w-5xl mx-auto flex gap-20 justify-center">
        <div className="flex relative">
          <img
            src={Search}
            alt="search icon"
            className="absolute top-[20%] left-2"
          />
          <input
            type="text"
            className="h-[37px] w-[258px] rounded-lg px-4 text-black pl-10"
          />
        </div>
        <ul className="flex gap-16 my-auto">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer  transition-all hover:text-white"
            >
              {link.title}
            </li>
          ))}
        </ul>
        <a className="ml-5 my-auto cursor-pointer  transition-all hover:text-white">
          Today's Deals
        </a>
      </div>
    </div>
  );
};

export default Navbar;
