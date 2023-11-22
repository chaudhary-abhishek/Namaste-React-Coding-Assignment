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

  const resInfo = useRestaurentMenu(id);

  //console.log(resInfo);
  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, city } = resInfo?.cards[0]?.card?.card.info;
  const menu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (itemType) =>
        itemType.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="my-4 p-3 mx-auto w-9/12 shadow-lg rounded-lg text-center">
        <p className="text-lg font-bold ">{name}</p>
        <p className="text-base">{cuisines.join(",")}</p>
        <p>{city}</p>
      </div>

      {/* we are mapping over different category of menu like recommended , what's new things like that */}
      {menu.map((item) => (
        <MenuCard key={item.card.card.title} menuData={item} />
      ))}
    </div>
  );
};

export default RestaurentMenu;
