import React from "react";
import { useEffect, useState } from "react";
import { useFetcher, useParams, useSearchParams } from "react-router-dom"
import { base_image_url } from "../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/Hooks/useRestaurant";
import { addItem } from "../utils/Slices/cartSlice";
// this ^ is an action from the cartSlice.
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {

    console.log("RestaurantMenu called");
    const params = useParams();
    
    // how to read a dynamic URL params
    const { resId } = params;
    // params basically retursns h
    console.log(params);

    // const [restaurant, setRestaurant] = useState(null);
    // setRestaurant(useRestaurant(resId));
    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    // o ma gwad. 

    const handleAddItems = () => {
        dispatch(addItem("Grapes"));

        /**
            addItem: (state, action) => {
                state.items.push(action.payload);
            }
            This is the addItem function. 
            So, what's sort of happening here is that, assume that, "grapes" is basically assigned to an object "payload". And, then, this payload is basically attached to the action, and it then used in the push(action.payload) statement.
            And, the "state" is the state at that point. (which is initially, the "initial state")
        */
    }

    const addFoodItem = (item) =>{
        dispatch(addItem(item));
        // item inside the addItem(item) is the payload.
    }

    return !restaurant ? (<Shimmer>
        {console.log("shimmerrrrr")}
    </Shimmer>) : (
        <div className="flex">
            {console.log("hello, this is inside the final return sttaement")}
            <div>
                <h1>Restraunt id: {resId}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={base_image_url + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
            </div>



            <div>
                {/* <button
                    className="p-2 m-5 bg-green-300"
                    onClick={() => handleAddItems()}

                >
                    Add Item to the cart
                </button> */}
            </div>

            
            <div className="p-5">
                <h1 >Menu</h1>
                <ul data-testid = "menu">
                    {console.log("hello", (restaurant))}
                    {
                        Object.values(restaurant.menu.items).map((item) => (
                        // iterating over the values of the object as an array.
                            <li key={item.id}>
                                {item.name} - <button className="p-1 m-2 bg-green-200"
                                
                                onClick={() => addFoodItem(item)}
                            >
                                    Add
                                </button>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
