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
    <div className="res-card">
      <img className="res-logo" src={IMG_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} min</h5>
    </div>
  );
};

export default RestaurantCard;
