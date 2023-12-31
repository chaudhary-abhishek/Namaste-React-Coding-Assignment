import RestaurentCard, { RestaurantCardFree } from "./RestaurentCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESLIST_LNK } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {setUserName, loggedInUser} = useContext(UserContext);
  const [listOfRestaurents, setListOfRestaurents] = useState([]); // here we call listOfRestaurents as state variable because it holds the state of the component
  const [uiInput, setUiInput] = useState("");
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const onlineStatus = useOnlineStatus(); //calling custom hook to get the online status of the user
  const RestaurantCardWithFreeDelivery = RestaurantCardFree(RestaurentCard);
  console.log(uiInput);
  //console.log(filteredRestaurent);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(listOfRestaurents[0].info.type);
  const fetchData = async () => {
    const data = await fetch(RESLIST_LNK);
    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      ((filteredRestaurent)=>{
        return(
          filteredRestaurent=
          json?.data?.cards[2]?.card?.card?.gridElements != undefined
            ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            : json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants)
        }
        ))

    setFilteredRestaurent(
      ((filteredRestaurent)=>{
        return(
          filteredRestaurent=
          json?.data?.cards[2]?.card?.card?.gridElements != undefined
            ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            : json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants)
        }
        ))
      
   
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
      <div className="filter ml-2">
        <input
          className="m-4 p-1 border border-solid border-black rounded-md"
          value={uiInput}
          onChange={(event) => {
            setUiInput(event.target.value);
            // console.log(uiInput);
          }}
        />
        {/* {console.log(uiInput)} */}
        <button
          className="bg-green-200 p-2 m-1 rounded-md"
          onClick={() => {
            const filteredData = listOfRestaurents.filter((restaurent) =>
              restaurent.info.name.toUpperCase().includes(uiInput.toUpperCase())
            );
            setFilteredRestaurent(filteredData);
          }}
        >
          search
        </button>

        <button
          className="bg-green-200 p-2 m-2 rounded-md"
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
        UserName :  
        <input value = {loggedInUser} onChange={(e)=>setUserName(e.target.value)} className="border p-1 border-black"/>
      </div>
      <div className="res-container flex flex-wrap justify-evenly">
        {filteredRestaurent.map((restaurent) =>
          restaurent.info.type === "F" ? (
            <RestaurantCardWithFreeDelivery
              key={restaurent.info.id}
              resData={restaurent}
            />
          ) : (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          )

          // <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        )}
      </div>
    </div>
  );
};

export default Body;
