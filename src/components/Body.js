import ResCard from "./ResCard";
import { RESLIST_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RESLIST_URL
    );
    const json = await data.json();

    //optional chaining
    setrestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //check online or offline
  const onlineStatus=useOnlineStatus();
  if (onlineStatus===false) return <h1>You are Offline. Please check your internet connection!!</h1>;

  //conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-card flex">
        <div className="search-btn m-4 p-4">
          <input
          className="border border-solid border-black "
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            type="submit"
            onClick={() => {
              const resUpdatedList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(resUpdatedList);
            }}
          >
            Submit
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
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
       
      </div>

      <div className="flex flex-wrap">
        {filteredList?.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant?.info?.id}
            >
              <ResCard {...restaurant?.info} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
