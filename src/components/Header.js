import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/Hooks/useOnline";
// ^ this is a custom hook.
import UserContext from "../utils/UserContext"

// now we're basically subscribing the header to the store. 
// this basically means that we'll be able to use. For this, we'll use -> useSelector
import { useSelector } from "react-redux";

const loggedInUser = () => {
    // API call for authentication.
    // some dummy function to get an understanding of who the login/out button might work. 

    return false;
}

const Title = (
    
    <a href="/">
        <img data-testid = "logo" className="h-28 pl-2" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" />
        {/* since, this is not a link component, it's going to refresh the page, which will result in us losing the redux store data. */}
    </a>

);

// --------------------------------------------------------------------------
const Header = () => {
    const isOnline = useOnline(); // fetching data from the custom hook.
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const user_data  = useContext(UserContext);
    /*
    useContext would return this (an object) ->
    
        {
            user:{
                name: "adityasoni1212",
                email: "asdasd"
            }
        }

        if we destrucutre it, we won't have to do -> user_data.user.name to get the info of the name of the user. 
        we can simply do -> user.name if we've destrucutred it.
    */

    const cartItems = useSelector(store => store.cart.items); 
    // store (on the right side) is the one from store.js, cart is the one in the reducer, item is the one inside the cart (in initial state).


    // this is basically subscribing to the store. 
    // subscribing means that we'll basically be able to get the data of the store, especically of the slice that we're subscribing to. 
    // ALSO, notice how we haven't imported the "store" (which is on the right side, "store.cart.items") from anywhere. 
    // useSelector is conscious that it has to get the data from the store itself, and thus, we don't have to import the "store" from anywhere. 

    console.log(cartItems);

    return (

        <div className="flex justify-between bg-red-50 shadow-lg sm:bg-blue-50 md:bg-yellow-200">
            {/* sm:bg-blue-50: means that when it crosses the threshold for small */}
            {/* md:bg-yellow-50: means that when it crosses the threshold for medium */}


            {Title}
            {/* NOTE: Title is a react element, it's not a functional component. So we can't do <Title/> */}
            {/* That is just for functional components. For react elements, we just have to call them like we would use variables. */}
            <div className="nav-items py-10">
                <ul className="flex">
                    <Link to="/" className="px-2"><li>Home</li></Link>
                    <Link to="/about" className="px-2"><li>About</li></Link>
                    <Link to="/contact" className="px-2"><li>Contact</li></Link>
                    <Link to="/instamart" className="px-2"><li>Instamart</li></Link>
                    <Link to = "/cart"><li data-testid = "cart" className="px-2">Cart - {cartItems.length} items</li></Link>
                </ul>
            </div>

            
            <h1 data-testid = "online-status">{!isOnline ? '🔴' : '✅'}</h1>
            <span className="font-bold p-10 text-red-500">{user_data.user.name}</span>
            {
                isLoggedIn ? (
                    <button onClick={() => setisLoggedIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setisLoggedIn(true)}>Login</button>
                )
            }
        </div>
    );
};

export default Header;