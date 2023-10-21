const ItemList = ({ items }) => {
  console.log(items);
  // const foodItems= items?.
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 text-left border-black border-b-[1px]">
          <div>
            <span className="text-sm font-semibold">{item.card.info.name}</span><br/>
            <span className="text-sm font-semibold">₹{item.card.info.price / 100}</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
