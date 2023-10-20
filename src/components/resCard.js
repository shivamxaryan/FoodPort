import { CARD_URL } from "../utils/constants";

const ResCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="m-6 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
        className="rounded-lg"
          src={
            CARD_URL+
            cloudinaryImageId
          }
        />
  
        <h2  className="font-bold py-4 text-lg">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4><i class="fa-solid fa-star"></i>{avgRating} stars</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };

export default ResCard;