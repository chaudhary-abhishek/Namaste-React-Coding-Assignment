import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FakeUI from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]); // here we call listOfRestaurents as state variabel
  const [uiInput, setUiInput] = useState("");
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  useEffect(() => {
    // console.log("useEffect rendered ");
    fetchData();
    // const restaurentData = await completeData.data.card.gridElements.infoWithStyle.restaurants;
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6095544&lng=77.3302981&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  return filteredRestaurent.length === 0 ? (
    <FakeUI />
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
          <RestaurentCard  key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
