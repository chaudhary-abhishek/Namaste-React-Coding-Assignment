import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList); // here we call listOfRestaurents as state variabel
  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            const filteredListOfRestaurents = listOfRestaurents.filter(
              (restaurent) => restaurent.info.avgRating > 4.2
            );
            // At this point of time data is changed , and now the task of react is to change the UI accordingly
            setListOfRestaurents(filteredListOfRestaurents);
            // Here it goes, it passes the current state of the component to the setState function and it re-renders the component with the new state
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
