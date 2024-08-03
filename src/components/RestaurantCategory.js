import { useState } from "react";
import ItemsList from "./ItemsList";
const RestaurantCategory = ({ category, showItems, setShowItems }) => {
  return (
    <div className="w-6/12 mx-auto my-4 shadow-lg">
      <div
        className="flex justify-between  bg-gray-100"
        onClick={() => {
          setShowItems();
        }}
      >
        <span className="font-bold text-lg p-4">
          {category.title} ({category.itemCards.length})
        </span>
        <span className="p-4">{showItems ? "🔼" : "🔽"}</span>
      </div>
      <div>
        {showItems &&
          category.itemCards.map((item) => {
            return (
              <ItemsList key={item?.card?.info?.id} data={item?.card?.info} />
            );
          })}
      </div>
    </div>
  );
};
export default RestaurantCategory;
