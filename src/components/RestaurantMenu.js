import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetRestaurantMenu from "../util/customHooks/useGetRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useGetRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [expand, setExpand] = useState(false);

  if (resMenu.length === 0) return <Shimmer />;

  const categories =
    resMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => {
      return (
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="text-lg my-6 font-bold">
        {resMenu.cards[0].card.card.text}
      </h1>
      <p>star rating</p>
      <div>
        {categories.map((c, index) => (
          <RestaurantCategory
            key={c.card.card.title}
            category={c.card.card}
            setShowItems={() => {
              setShowIndex(index);
              if (index === showIndex) setExpand(!expand);
            }}
            showItems={index === showIndex ? expand : false}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
