import { useEffect } from "react";
// THIS IS THE FUNCTIONAL COMPONENT PROFILE.

const Profile = (props) => {

    useEffect(() => {
        // API Call
        const timer = setInterval(() => {
            console.log("Hello functoinal comp");
        }, 1000);

        console.log("useEffect");

        // this function is basically called, when we're unmounting the component
        return () => {
            clearInterval(timer);
            console.log("useEffect Return");
        };
    }, []);

    console.log("render");
    return (
        <div className="border border-red-900">
            <h1>Hey this is the profile from functional component</h1>
            <h1>name: {props.name}</h1>
            <h1>age: {props.age}</h1>
        </div>
    )
}

export default Profile;