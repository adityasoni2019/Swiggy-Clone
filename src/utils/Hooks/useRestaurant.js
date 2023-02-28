// Custom hook
import { useState } from "react"
import { useEffect } from "react";
import { FETCH_MENU_URL } from "../../constants";

// hook is just a function 
const useRestaurant = (resId) => {
    console.log("useRestaurant called");
    const [restaurant, setRestaurant] = useState(null);
 
    // getting the data from API
    useEffect(() => {
        console.log("custom useEffect called");
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        
        console.log("async function getRestaurantInfo called by the custom hook");
        const data = await fetch(FETCH_MENU_URL + resId); // thisis the copied one.
        const json = await data.json();
        setRestaurant(json.data);

        console.log("State changed lol");
    }
    
    console.log("this is the place just before return");
    return restaurant;
}

export default useRestaurant;