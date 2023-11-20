import { MENU_IMG_LNK } from "../utils/constants";
const MenuCard = (props) => {
  const { menuData } = props;
  console.log(menuData);
  const { name, price, defaultPrice, description, imageId } = menuData?.card?.info;
  return (
    <div className="my-16 p-4">
      <hr />
      <div className="menu-card my-4 mx-auto flex w-9/12 h-48 shadow-lg">
        <div className="menu-desc w-1/2 mx-8 my-5">
          <h4 className="text-lg font-bold">{name}</h4>
          <h5>₹ {price!=undefined?price / 100:defaultPrice/100} </h5>
          {/* <span className="offerTag">{menuData.card.info.offerTags[0].title} | {menuData.card.info.offerTags[0].subTitle}</span> */}
          <p>{description}</p>
        </div>
        <div className="menuImage w-1/2 my-5">
          <img className="w-1/2" src={MENU_IMG_LNK + imageId} />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
