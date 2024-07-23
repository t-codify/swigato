import { useEffect, useState } from "react";
const useGetRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=" +
        resId
    );
    const data = await resData.json();
    setResMenu(data.data);
    console.log(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };
  return resMenu;
};

export default useGetRestaurantMenu;
