// this is the "context API" which everyone talks about. 

// ALSO, WE COUDLD HAVE USED CONTEXT INSTEAD OF REDUX ALSO

// then why aren't we using Redux instead of this? Cause we just wanted to use context API to see how it works.


import { createContext, useContext } from "react";
// createContext is basically a function, 
// which takes in some data which we need all across our app.

const UserContext = createContext({
    user: {
        name: "dummy name",
        email: "dummy@gmail.com"
    }
});

UserContext.displayName = "UserContext";
// this is so that when debugging, we would know which context is the data coming from.

export default UserContext;
// exporting "UserContext" would mean that we're exporting the whole object which is passed as an argument. 