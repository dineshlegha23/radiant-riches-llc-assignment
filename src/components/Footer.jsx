import React from "react";
import { footerLinks } from "../data";
import Links from "./Links";
import { location } from "../data";
import DownArrow from "../utils/DownArrow.svg";

const Footer = () => {
  return (
    <div className="bg-[#212731] grid grid-cols-3 gap-16 p-5">
      {footerLinks.map((link) => (
        <Links key={link.id} {...link} />
      ))}
      <button className="text-[#B6BDC4] text-[13px] flex cursor-pointer self-center hover:text-white">
        <p>{location}</p>
        <img src={DownArrow} alt="down icon" />
      </button>
    </div>
  );
};

export default Footer;
