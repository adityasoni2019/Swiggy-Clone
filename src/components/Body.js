import React, { useState, useEffect, useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import useOnline from "../utils/Hooks/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    
    const { user, setUser } = useContext(UserContext);
    // 

    useEffect(() => {
        // API Call
        getRestaurant();
    }, []);
    // This [] means that it'll be called only on first render.

    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        // ^ this is the copied one. (both are same lol)
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // this is basically done cause, we're showing filtered restaurants from the beginning. 
    }

    const isOnline = useOnline();

    if (!isOnline) return <h1>🔴 Offline please check your internet connection</h1>

    // conditional rendering.
    // if restaurant doens't have data -> Shimmer
    // as soon as it loads data -> usual data.

    // How to avoid rendering component.
    if (!allRestaurants) return null;
    // this would never be the case, cause we've already initialized allRest. with [] in useState.

    return allRestaurants?.length === 0 ? (
        <Shimmer data-testid="shimmer" />
    ) : (
        <>
            <div className="search-container p-5 bg-red-50 my-5 p-10" >
                {/* This is the just the search functionality -
                It contains
                    1. Search input
                    2. Search button
                */}
                <input
                    data-testid="search-input-test"
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    // ^ i'm getting confused as to why we have this here lol. i.e., value = {searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
                <button
                    data-testid="search-btn-test"
                    className="search-btn p-2 m-2 bg-purple-400 hover:bg-purple-800 rounded-md"
                    onClick={() => {
                        // now, when we click on this button, we need to filter the data. 
                        const data = filterdata(allRestaurants, searchInput);
                        setfilteredRestaurants(data);
                    }}
                >Search</button>

                <p>Change the user context (name) on the go</p>
                <input value={user.name} onChange={(e) => {

                    setUser({
                        ...user,
                        name: e.target.value,
                        // if we don't wrtie ...user, it would consider that it has to remove the rest of the things in user (which is email)

                    })
                }
                } /> {/* This is just for fun */}

                <p>Chnge the user context (email) on the go</p>
                <input value={user.email} onChange={(e) => {

                    setUser({
                        ...user,
                        email: e.target.value
                    })
                }
                } /> {/* This is just for fun */}

            </div>

            <div className="restaurant-list flex flex-wrap" data-testid="res-list">
                {
                    filteredRestaurants.length === 0 ? (<h1>Couldn't find anything</h1>) :
                        filteredRestaurants.map((element) => {
                            return (
                                <Link to={"/restaurant/" + element.data.id} key={element.data.id} >
                                    <RestaurantCard {...element.data} />
                                </Link>
                            );
                        })
                }
            </div>
        </>
    );
}

export default Body;

/***            
 * data would look something like this -> 
 * 
 * 
 * 
 *  data= {
        type:F",
        id:2072",
        name: Kota Kachori And Falahaar",
        uuid: 5b5dd0e6-2318-45f3-809d-83282c59881a",
        city: 1",
        area: Koramangala",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "ovelwkcuxkf8pb2ezivl",
        cuisines: [
          NorthIndian,
          Sweets,
          Beverages,
          Rajasthani,
          Snacks,
          Chaat,
          Desserts
        ],
        tags: [
        
        ],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 1.600000023841858,
        slugs: {
          "restaurant": "falahaar-kota-kachori-6th-block-koramangala",
          "city": "bangalore"
        },
 */