import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart =() => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center">
            <h1 className="m-4 p-2 font-bold text-2xl">Cart</h1>

            <button className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>
                Clear Cart
            </button>

            <div className="w-6/12 m-auto bg-gray-50 rounded-lg">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;