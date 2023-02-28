import { createSlice } from "@reduxjs/toolkit";
// imp for creating slices.

const cartSlice = createSlice({


    /*
        every slice has 3 components-> 
            1. name
            2. initial state 
                ^ initial state of all the things that are in the slice.
            3. reducers
                ^ this has a collection of all the functions. 
    */


    name: 'cart',
    initialState: {
        // this is the initial state of the slice. And, we'll keep this empty in the beginning. 
        items: [],
    },
    // we modify the cart using the reducer function, so we'll create the reducer function. 
    reducers: {
        // This is always going to be "reducers" (can't change the name)
        // these reducers are called on dispatch of an action. And, reducers at the end of the day are functions. 
        // so, we'll have to write the mapping b/w the action and the respective function. 
        addItem: (state, action) => {
            // aight, so "addItem" is basically an action when this reducer function would be called, and the stuff after ':' is basically the function which would be called. 
            
            // now, the function takes in 2 parameteres, the state (which is the initial state), and the action (this is basically the data which is coming in )
            state.items.push(action.payload);
            // The "state" in the above line, is the one which we have to update, it's not updated yet.

            // NOTE: THIS FUNCTION DOES NOT RETURN ANYTHING. 
            // IT JUST UPDATES THE STATE. 
            // DON'T RETURN ANYTHING FROM THIS FUNCTION.
        },
        clearCart: (state) => {
            state.items = [];
        }, 
        removeItem: (state, action) =>{
            state.items.pop(); 
            // as of now, we're just writing a logic for removing the last item in the array. We can modify it later according to whatever we need. like, an array index or something. 
        }

    }
}); 

// Now, our component needs to access this slice, for this we'll export actions, and reducers from this slice. 

export const {addItem, removeItem, clearCart} = cartSlice.actions; 

export default cartSlice.reducer;
// Now, this is a way, which redux toolkit says that we'll export the reducers. 
// NOTE: THIS IS NOT REDUCERS (which we have used above), IT'S REDUCER. THIS IS HOW REDUX TOOLKIT SAYS US TO EXPORT THE REDUCERS. 



/*
    cartSlice = {
        actions: {
            addItems, 
            removeItems,
            clearCart
        }, 
        reducer: reducers
    }

    This is basically how things look like behind the scene. 
    And, now, it makes sense as to why we name export the actions or default export the reducer.

*/