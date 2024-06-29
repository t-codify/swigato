import RestaurantCard from "./RestaurantCard";
import resData from "../util/mockjson";
import { useEffect, useState } from "react";

const Body = () => {
  let [restaurantData, updateRestaurantData] = useState(resData);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const restaurantData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resjson = await restaurantData.json();
    console.log(resjson);
    updateRestaurantData(
      resjson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <button
        className="btn"
        onClick={() => {
          const filterdList = restaurantData.filter(
            (res) => res.info.avgRating > 4
          );
          console.log(filterdList);
          updateRestaurantData(filterdList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {restaurantData.map((res) => (
          <RestaurantCard key={res.info.id} resInfo={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
