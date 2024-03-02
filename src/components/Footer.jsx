import React from "react";
import { footerLinks } from "../data";
import Links from "./Links";
import { location } from "../data";
import DownArrow from "../utils/DownArrow.svg";

const Footer = () => {
  return (
    <div className="bg-[#212731] flex gap-11 xs:gap-2 xs:grid xs:grid-cols-1">
      <div className=" max-w-[500px] mx-auto sm:mr-0 grid grid-cols-2 gap-32 xs:gap-0 sm:gap-10 xs:mx-auto p-5 xs:text-center [@media(max-width:480px)]:grid-cols-1">
        {footerLinks.map((link) => (
          <Links key={link.id} {...link} />
        ))}
      </div>
      <button className="text-[#B6BDC4] text-[13px] mx-auto flex cursor-pointer self-center mb-5 hover:text-white">
        <p>{location}</p>
        <img src={DownArrow} alt="down icon" />
      </button>
    </div>
  );
};

export default Footer;
