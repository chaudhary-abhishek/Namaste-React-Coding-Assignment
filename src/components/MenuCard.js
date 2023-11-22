import { useState } from "react";
import ItemCategoryCard from "./ItemCategoryCard.js";



const MenuCard = (props) => {
 // Here we are getting single single menu category(first we will get recommended and so on)
  const [showAccordian, setShowAccordian] = useState(false);
  const { menuData } = props;
  //console.log(props);
  const menuItems = menuData?.card?.card?.itemCards;

  const accordianHandler = () => {
    setShowAccordian(!showAccordian);
  };
  //console.log(itemCards);
  // console.log(itemCards[0].card?.info?.id);
  return (
    <div className="my-16 p-4">
      <hr />
      <div className="menu-card my-4 mx-auto w-9/12 shadow-lg rounded-lg">
        {/* accordian header */}
        <div
          className="flex justify-between cursor-pointer p-4"
          onClick={accordianHandler}
        >
          <div className="font-bold text-lg">
            {" "}
            {menuData.card.card.title} ({menuItems.length})
          </div>
          <div>⬇️</div>
        </div>
        {/* Accordian body */}
        {/* passing each menu item of that category individually to the itemCategoryCard by map */}
        {showAccordian && (
          <div>
            {menuItems.map((item) => (
              <ItemCategoryCard key={item.card.info.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
