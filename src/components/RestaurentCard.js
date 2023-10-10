import {CDN_LNK} from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const { name, avgRating, sla, costForTwo, cuisines } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-image"
          alt="restaurent-image"
          src={ CDN_LNK
             +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>ETA {sla.deliveryTime} minutes</h4>
        <h4>{costForTwo} for two</h4>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    );
  };

  export default RestaurentCard;