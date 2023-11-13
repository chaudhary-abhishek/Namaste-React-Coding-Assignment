import { useEffect, useState } from "react";
import { MENU_LNK } from "./constants";
const useRestaurentMenu = (id) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchRestaurentMenu();
  }, []);

  const fetchRestaurentMenu = async () => {
    const data = await fetch(MENU_LNK + id);
    const json = await data.json();
    setMenu((menu) => {
      return (menu =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.title == "Top Picks"
          ? json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards
          : json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.itemCards);
    });
  };
  return menu;
};

export default useRestaurentMenu;
