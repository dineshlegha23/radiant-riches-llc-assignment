import React from "react";
import { footerLinks } from "../data";
import Links from "./Links";
import { location } from "../data";
import DownArrow from "../utils/DownArrow.svg";

const Footer = () => {
  return (
    <div className="bg-[#212731] grid grid-cols-3 gap-16 xs:gap-0 xs:text-center p-5  xs:grid-cols-2 [@media(max-width:440px)]:grid-cols-1">
      {footerLinks.map((link) => (
        <Links key={link.id} {...link} />
      ))}
      <button className="text-[#B6BDC4] text-[13px] xs:justify-center flex cursor-pointer self-center hover:text-white">
        <p>{location}</p>
        <img src={DownArrow} alt="down icon" />
      </button>
    </div>
  );
};

export default Footer;
