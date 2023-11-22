import { MENU_IMG_LNK } from "../utils/constants";

const ItemCategoryCard = (props) => {
  // Here we are getting individual menu item
  const { data } = props;
  //console.log(data);

  return (
    <div className="p-4">
      <div className="p-2 flex justify-between my-4 mx-auto shadow-lg">
        <div className="w-2/3">
          <p className="font-semibold text-lg">{data.card.info.name} </p>
          <p>
            ₹{" "}
            {data.card.info.price == undefined
              ? data.card.info.defaultPrice / 100
              : data.card.info.price / 100}
          </p>
          <p>{data.card.info.description}</p>
        </div>
        <div className="p-2">
          <div className="text-green-700 bg-white w-14 p-2 absolute ml-4 shadow-lg rounded-lg">
            <button className="text-center">Add+</button>
          </div>

          <img src={MENU_IMG_LNK + data.card.info.imageId} />
        </div>
      </div>
    </div>
  );
};

export default ItemCategoryCard;
