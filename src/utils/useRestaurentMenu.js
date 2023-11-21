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
    // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (itemType) =>
          itemType.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };
  return menu;
};

export default useRestaurentMenu;
