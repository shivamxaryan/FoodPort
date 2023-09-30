import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6263764&lng=77.2090704&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    //optional chaining
    setrestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  //conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-card">
        <div className="search-btn">
          <input type="text" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button type="submit" onClick={() => {
            const resUpdatedList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setrestaurantList(resUpdatedList);
          }}>Submit</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const resupdatedlist = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setrestaurantList(resupdatedlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-list">
        {restaurantList?.map((restaurant) => {
          return <ResCard key={restaurant?.info?.id} {...restaurant?.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
