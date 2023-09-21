import ResCard from "./ResCard";
import resList from "../utils/resList";

const Body = () => (
    <div className="body-container">
  
      <div className="search">Search</div>
      <div className="res-list">
      {resList.map((restaurant) => {
          return <ResCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
  
    </div>
  );

  export default Body;