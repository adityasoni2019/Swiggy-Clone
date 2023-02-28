// SWIGGY

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart"; // this is the cart componnet, not the cart slice.

// import Instamart from "./components/Instamart";

// now, we basically want to import instamart dynamically. 

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// both of these things are lazy loaded.

const AppLayout = () => {

  // just a dummy user
  const [user, setUser] = useState({
    name: "Aditya Soni",
    email: "adityasoni9727@gmail.com"
  });
  return (

    // value parameter basically takes in the initial value. Like, useState takes in the initial value as a parameter, it's the same with value in UserContext.Provider as well.
    <Provider store={store}>
      {/* ^ this is a redux thing. */}
      {/* Note, in the store = {store}, the first "store" name is crucial, cause redux would be using it */}

      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        {/* ^ ContextAPI thing. */}
        {/* the thing inside value are overriden. i.e., now setUser is also a part of UserContext */}
        {/*  value parameter, which basically would allow us to add (sometimes initial) values to our UserContext  */}

        <Header /> {/*done*/}
        {/* // ---------- */}
        <Outlet />
        <Footer />  {/*done*/}
      </UserContext.Provider>
    </Provider>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        // now, for this to happen, we need to create an outlet inside the <About/> page.
        path: "/about", // path: "about" <- even this would work
        element: <Suspense fallback={<Shimmer />}>
          {/* fallback is basically a place where we can write the shimmer component. */}
          <About />
        </Suspense>,
        children: [{
          path: "profile", // parentPath/{path} => localhost:1244/about/profile
          element: <Profile name="Aditya" age="custom value coming from app.js" />
        }]
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact /> // done 
      },
      {
        path: "/restaurant/:resId",
        // yeah, so, :resId is special. it doesn't work like a string,. 
        // when we do just -> restaurant/resId -> it'll just act like a string, and that''s it, we wont be able to access the redId. 

        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}>
          <Instamart />
          {/* Done */}
        </Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/shimmer",
        element: <Shimmer />
      },
    ],
  },
]);
// console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
// this is basically getting the element from the HTML, which has "root" as the id.


root.render(<RouterProvider router={appRouter} />);
// this is just to push our Header inside our root.
// instead of using <Header/> we can just directly call our function... root.render(Header()); 


/**
   Header
      - Logo(Title)
      - Nav Items(Right Side)
      - Cart
   Body 
      - Search bar
      - restaurantList
        - RestaurantCard (many cards)
            - Image
            - Name
            - Rating
            - Cusines
   Footer
    - links
    - Copyright
  
  */