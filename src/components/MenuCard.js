import { MENU_IMG_LNK } from "../utils/constants";
import {ItemCategory} from "./itemCategory";

const MenuCard = (props) => {
  const { menuData } = props;
  //console.log(menuData);
  const itemCards = menuData?.card?.card?.itemCards;
  //  console.log(itemCards);
  // console.log(itemCards[0].card?.info?.id);
  return (
    <div className="my-16 p-4">
      <hr />
      <div className="menu-card my-4 mx-auto flex w-9/12 shadow-lg">
        <div>  {(itemCards.length)}</div>
       
       {
        itemCards.map((item)=><ItemCategory key ={item.card.info.id} data = {item} />)
       }
      </div>
    </div>
  );
};

export default MenuCard;
