import React from "react";
import CardItem from "./CardItem";
import { cardsData } from "../data";

const Cards = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      {cardsData.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;
