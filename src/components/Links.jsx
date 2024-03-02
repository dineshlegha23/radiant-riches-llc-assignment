import React from "react";

const Links = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4 text-white mx-auto my-8 mb-10">
      <h3 className="uppercase">{title}</h3>
      <ul className="flex flex-col gap-4 text-[13px] xs:text-base text-[#B6BDC4]">
        {links.map((link, index) => (
          <li key={index} className="cursor-pointer hover:text-white">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
