import {MENU_IMG_LNK} from "../utils/constants";
const MenuCard = (props)=>{
    const { menuData } = props;
    console.log(menuData);
    return(
        <div>
        <hr />
        <div className="menu-card">
        <div className="menu-desc">
            <h4>{menuData.card.info.name}</h4>
            <h5>₹ {menuData.card.info.price/100} </h5>
            {/* <span className="offerTag">{menuData.card.info.offerTags[0].title} | {menuData.card.info.offerTags[0].subTitle}</span> */}
            <p>{menuData.card.info.description}</p>
            </div>
            <div className="menuImage">
             <img src={MENU_IMG_LNK+menuData.card.info.imageId} />
            </div>
       
        </div>
        </div>
    )
}

export default MenuCard;