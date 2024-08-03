import { useEffect, useState } from "react";
import { MENU_API } from "../constants";
const useGetRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resData = await fetch(MENU_API + resId);
    const data = await resData.json();
    setResMenu(data.data);
    console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  };
  return resMenu;
};

export default useGetRestaurantMenu;
