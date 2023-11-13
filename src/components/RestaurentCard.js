import { CDN_LNK } from "../utils/constants.js";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="res-card">
      <Link  style={{color:"inherit", textDecoration:"inherit"}} to={"/menu/"+resData.info.id}>
      <img
        className="res-image"
        alt="restaurent-image"
        src={CDN_LNK + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>ETA {sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      </Link>
    </div>
  );
};

export default RestaurentCard;
