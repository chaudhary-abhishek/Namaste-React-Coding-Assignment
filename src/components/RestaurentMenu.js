import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {MENU_LNK} from "../utils/constants.js";
import MenuCard  from "./MenuCard.js";
import Shimmer from "./Shimmer";


const RestaurentMenu = () => {
  // const params = useParams();
  // console.log(params);

  const [menu, setMenu] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    fetchRestaurentMenu();
  }, []);

  const fetchRestaurentMenu = async () => {
    const menuInfo = await fetch(MENU_LNK+id);
    const json = await menuInfo.json();
    console.log(json);
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

  if (menu == null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>This is the menu of this restaurent,</h1>

      {menu.map((item) => (
           <MenuCard  key={item.card.info.id}  menuData = {item} />
      )
      )}
    </div>
  );
};

export default RestaurentMenu;
