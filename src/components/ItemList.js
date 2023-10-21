import { CARD_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 text-left border-black border-b-[1px] flex justify-between items-center"
        >
          <div className="w-10/12">
            <span className="text-sm font-semibold">{item.card.info.name}</span>
            <br />
            <span className="text-sm font-semibold">
              ₹{item.card.info.price / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-2/12">
            <div className="absolute ">
              <button className=" p-1 align-bottom border-2 border-black bg-black text-white text-xs shadow-md rounded-md">
                Add +
              </button>
            </div>
            <img
              className="rounded-md"
              src={CARD_URL + item.card.info.imageId}
              alt="cloud img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
