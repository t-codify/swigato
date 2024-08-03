import { IMG_URL } from "../util/constants";

const RestaurantCard = (data) => {
  {
    ({
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = data.resInfo);
  }
  return (
    <div className="m-2 p-4 w-[250px] bg-orange-100 rounded-r-lg hover:bg-orange-200">
      <img className="rounded-lg " src={IMG_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRating} stars</h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm">{data.resInfo.sla.deliveryTime} min</h4>
    </div>
  );
};

export const promotedRestaurantCard = (RestaurantCard) => {
  return (data) => {
    return (
      <div>
        <div className="absolute bg-orange-400 text-white m-2 p-2 rounded-lg">
          <span className="text-sm">Promoted</span>
        </div>
        <RestaurantCard {...data} />
      </div>
    );
  };
};

export default RestaurantCard;
