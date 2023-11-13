import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESLIST_LNK } from "../utils/constants";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]); // here we call listOfRestaurents as state variable because it holds the state of the component
  const [uiInput, setUiInput] = useState("");
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const onlineStatus = useOnlineStatus(); //calling custom hook to get the online status of the user
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESLIST_LNK);
    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h2>
        You don't have internet connection.Please connect to intenet and try
        again
      </h2>
    );
  }
  return filteredRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            const filteredListOfRestaurents = listOfRestaurents.filter(
              (restaurent) => restaurent.info.avgRating > 4.2
            );
            // At this point of time data is changed , and now the task of react is to change the UI accordingly
            setFilteredRestaurent(filteredListOfRestaurents);
            // Here it goes, it passes the current state of the component to the setState function and it re-renders the component with the new state
          }}
        >
          Top Restaurants
        </button>

        <input
          className="search"
          value={uiInput}
          onChange={(event) => {
            setUiInput(event.target.value);
            // console.log(uiInput);
          }}
        />
        {/* {console.log(uiInput)} */}
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = listOfRestaurents.filter((restaurent) =>
              restaurent.info.name.toUpperCase().includes(uiInput.toUpperCase())
            );
            setFilteredRestaurent(filteredData);
          }}
        >
          search
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
