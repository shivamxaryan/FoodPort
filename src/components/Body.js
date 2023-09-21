import ResCard from "./ResCard";
import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {

  const [restaurantList, setrestaurantList] = useState(resList);

return(
    <div className="body-container">
  
      {/* <div className="search">Search</div>  */}

      <div className="filter-card">

        <button className="filter-btn" 
        onClick={() => {
          const resupdatedlist=restaurantList.filter(
            (res) => res.data.avgRating > 4
          );
          setrestaurantList(resupdatedlist);
        }}>
          Top Rated Restaurant
        </button>

      </div>

      <div className="res-list">
      {restaurantList.map((restaurant) => {
          return <ResCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
  
    </div>
  );
  }

  export default Body;