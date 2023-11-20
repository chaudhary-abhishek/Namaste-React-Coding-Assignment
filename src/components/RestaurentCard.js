import { CDN_LNK } from "../utils/constants.js";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="w-72 h-[450px] p-4 mb-2 bg-gray-300 rounded-md hover:shadow-2xl">

      <Link  style={{color:"inherit", textDecoration:"inherit"}} to={"/menu/"+resData.info.id}>
      <img
        className="h-1/2 w-full rounded-md"
        alt="restaurent-image"
        src={CDN_LNK + cloudinaryImageId}
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>ETA {sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      </Link>
    </div>
  );
};

export const RestaurantCardFree = (RestaurentCard)=>{

  return (prop)=>{
    return(
    <div>
    <label className="absolute bg-orange-400 text-white p-2 rounded-lg" >Free Delivery</label>
    <RestaurentCard {...prop} />
    </div>
    )
    
  }
}

export default RestaurentCard;
