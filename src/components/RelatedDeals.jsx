import React from "react";
import { relatedData } from "../data";
import Card from "./Card";

const RelatedDeals = () => {
  return (
    <div className="mt-20">
      <h3 className="text-[32px] text-[#2C384A] mb-8">
        Related deals you might like for
      </h3>
      <div className="flex md:grid md:grid-cols-2 [@media(max-width:520px)]:grid-cols-1">
        {relatedData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default RelatedDeals;
