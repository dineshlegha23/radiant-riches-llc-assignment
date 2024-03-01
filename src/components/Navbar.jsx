import React from "react";
import { links } from "../data.js";

const Navbar = () => {
  return (
    <div className="p-3 h-[64px] bg-[#212731] text-[#D1D6DA] text-[14px]">
      <div className="max-w-5xl mx-auto flex gap-20 justify-center">
        <input
          type="text"
          className="h-[37px] w-[258px] rounded-lg px-4 text-black"
        />
        <ul className="flex gap-16 my-auto">
          {links.map((link) => (
            <li key={link.id} className="cursor-pointer hover:text-white">
              {link.title}
            </li>
          ))}
        </ul>
        <a className="ml-5 my-auto cursor-pointer hover:text-white">
          Today's Deals
        </a>
      </div>
    </div>
  );
};

export default Navbar;
