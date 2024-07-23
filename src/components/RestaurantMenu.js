import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetRestaurantMenu from "../util/useGetRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resMenu = useGetRestaurantMenu(resId);
  return resMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resMenu.cards[0].card.card.text}</h1>
      <p>star rating</p>
      <ul>
        {resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
          (item) => (
            <li key={item.card.info.id}> {item.card.info.name}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
