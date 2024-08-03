import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LINK } from "../util/constants";

const Body = () => {
  const [restaurantData, updateRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const PromotedRestaurantCard = promotedRestaurantCard(RestaurantCard);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const restaurantData = await fetch(RES_LINK);
    const resjson = await restaurantData.json();
    updateRestaurantData(
      resjson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredData(
      resjson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-orange-50">
      <div className="filter p-4 flex">
        <div className="search flex">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
            onClick={() => {
              const filterdList = restaurantData.filter((res) => {
                return res.info.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filterdList);
              setFilteredData(filterdList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-4"
          onClick={() => {
            const filterdList = restaurantData.filter(
              (res) => res.info.avgRating > 4.1
            );
            console.log(filterdList);
            setFilteredData(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-start px-4">
        {filteredData.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {res.info.aggregatedDiscountInfoV3 ? (
              <PromotedRestaurantCard resInfo={res.info} />
            ) : (
              <RestaurantCard resInfo={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
