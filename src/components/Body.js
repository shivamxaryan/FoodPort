import ResCard from "./ResCard";
// import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {

  const [restaurantList, setrestaurantList] = useState([
    {
      data:{
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        address:
          "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
        locality: "Bhatar Road",
        avgRating: "4.3",
      }
    },
    {
      data:{
        id: "74454",
        name: "Pizza Hut",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        address:
          "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
        locality: "Bhatar Road",
        avgRating: "4.0",
      }
  },
  {
    data:{
      id: "74455",
      name: "KFC",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      costForTwo: 40000,
      address:
        "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
      locality: "Bhatar Road",
      avgRating: "4.1",
    }
},
  ]);

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