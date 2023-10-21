import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    // console.log(data);

    return (
        //Header
        <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 my-2 mt-2">
            <div className="flex justify-between">
                <span className="font-bold text-md">
                    {data?.title} ({data?.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>

            {/*accodion body */}
            <ItemList items={data?.itemCards} />

        </div>

    );
};

export default RestaurantCategory;
