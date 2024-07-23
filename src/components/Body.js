import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, updateRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const restaurantData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
            <RestaurantCard resInfo={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
