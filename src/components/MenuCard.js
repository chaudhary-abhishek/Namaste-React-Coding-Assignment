import { MENU_IMG_LNK } from "../utils/constants";
const MenuCard = (props) => {
  const { menuData } = props;
  console.log(menuData);
  const { name, price, description, imageId } = menuData?.card?.info;
  return (
    <div>
      <hr />
      <div className="menu-card">
        <div className="menu-desc">
          <h4>{name}</h4>
          <h5>₹ {price / 100} </h5>
          {/* <span className="offerTag">{menuData.card.info.offerTags[0].title} | {menuData.card.info.offerTags[0].subTitle}</span> */}
          <p>{description}</p>
        </div>
        <div className="menuImage">
          <img src={MENU_IMG_LNK + imageId} />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
