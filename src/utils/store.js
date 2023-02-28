import { configureStore } from "@reduxjs/toolkit";
// ^ this is just used to create a store. 

import cartSlice from "./Slices/cartSlice";
// importing this means that we're putting all the reducers from there to here.

const store = configureStore({
    // configureSotre is a function (API) which is used to create a store. 
    // this (below) would contain slices
    reducer: {
    // ^ this is always going to be "reducer"
        cart: cartSlice
        // "cart" is the name of the "cartSlice"
        // here, in this section, we'll add the slices that we have.
    }
    
});

export default store;

// Now, we need a provider to connect our store to our app. Sort of like connecting the data layer to the UI layer. 
// And, we'll provide this store to the whole app. So, we'll basically cover the appLayout with <Provider></Provider> Refer app.js 

/*

 Create Store
  - configureStore() - RTK

 Provide the store to app
  - <Provider store = {store}> - import from react-redux

 Slice
  - RTK - createSlice({
          name: "",
          initialState:
          reducers: {
             addItem: (state, action)=> { state= action.payload}
             we don't return anything from this function
          }
      })
    export const {addItem, removeItem} = cartSlice.actions;
    export default cartSlice.reducer;

 Put that Slice into Store
      - {
        reducer: {
             cart: cartSlice,
             user: userSlice
         }
 }

 */


