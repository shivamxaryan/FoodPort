import { CARD_URL } from "../utils/constants";

const ResCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
  }) => {
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">

        <img
        className="rounded-lg"
          src={
            CARD_URL+
            cloudinaryImageId
          }
        />
        <h2  className="font-bold py-4 text-lg">
          {name}
        </h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
        <div className="flex justify-between">
          <h5>{avgRating}⭐</h5>
          <h5>{sla.slaString}</h5>
        </div>
      </div>
    )
  };


  // high order component -- its just a function which takes component and gives component back with some inhanchment
  // input ResCard => ResCardPromroted
  // export const withPromotedLabel = (ResCard) => {
  //   return (props) => {
  //     return(
  //       <div>
  //         <label>Promoted</label>
  //         <ResCard {...props}/>
  //       </div>
  //     );
  //   }
  // };

  

export default ResCard;