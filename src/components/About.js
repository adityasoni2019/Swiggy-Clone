import { createRoutesFromChildren, Outlet } from "react-router-dom"
// outlet is so that we can redirect the children in the place of outlet, which are coming from the main app router (in the app.js file). 
// this outlet is a component. 
import { Link } from "react-router-dom"
import ProfileClass from "./ProfileClass"
import ProfileFunction from "./Profile" // we can basically import anything default by some other name as well
import React from "react"

// we'll basically convert our About component to class based component.

class About extends React.Component {

  constructor(props) {
    super(props);

    console.log("Parent - Constructor");

  }

  /***
   * parent constrcutor
   * parent render
   * first constructor
   * first render
   * second constructor 
   * second render
   * 
   * 
   * first mount
   * second mount
   * parent mount X
   * 
   * parent mount
   * 
   * first cmount
   * frist render
   * comp did update
   * 
   * second mount
   * second render
   * comp did update
   */

  componentDidMount() {
    // best place to make an API call.
    // calling the github API for profile.
    console.log("Parent - component Did Mount");
    this.timer = setInterval(() => {
      // console.log("Hello!");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Parent - Render");
    return (
      <div>
        <h1>About us page</h1>
        <Link to="/about/profile">
          <span className="font-bold font-mono">Click here to go to localhost:1234/about/profile for more stuff</span>
        </Link>
        <p>Hello This is the about page.</p>
        <Outlet />
        {/* <Profile name="Aditya" age={12} /> */}
        <ProfileClass name="First Child" age={12} />
        <ProfileClass name="Second Child" age={12} />
      </div>
    )
  }
}

export default About;

/*
 Parent constructor
 Parent - render
    child - construct 1
    child - render 1
    
    child - construct 2
    child - render 2

    DOM is updated for children
    
    child - component did mount 1
    child - component did mount 2

 Parent - component did mount
*/