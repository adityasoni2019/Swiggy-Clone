import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/Slices/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    // This would basically give us the items array, which is updated at all the times. 
    // This is what we call subscribing. It allows us to read stuff from the store.

    const dispatch = useDispatch();
    // this dispatch is basically used to dispatch an action, which would further change the slice of the store. 

    const handleClearCart = () => {
        dispatch(clearCart());
        // we just write the action inside the dispatch. 
    }

    return (
        <div >
            <h1 className="font-bold text-3xl">This is Cart</h1>

            <button
                className="bg-red-500 p-2 m-2"
                onClick={()=>handleClearCart()}

            >Clear Cart</button>

            {/* <FoodItem {...cartItems[0]}/> */}
            <div className="flex">

                {
                    cartItems.map(item => <FoodItem key={item.id} {...item} />)
                }
            </div>

        </div>
    );
}
export default Cart;