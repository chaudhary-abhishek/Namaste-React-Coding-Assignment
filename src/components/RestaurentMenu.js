import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LNK } from "../utils/constants.js";
import MenuCard from "./MenuCard.js";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu.js";

const RestaurentMenu = () => {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();

  const menu = useRestaurentMenu(id);
  //console.log(menu);
  if (menu == null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>This is the menu of this restaurent,</h1>

      {menu.map((item) => (
        <MenuCard key={item.card.card.title} menuData={item} />
      ))}
    </div>
  );
};

export default RestaurentMenu;
