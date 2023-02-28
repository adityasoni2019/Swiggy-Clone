import React from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {

    const { user } = useContext(UserContext);
    // data coming from the context.

    return (
        <>
            <div className="bg-yellow-400">
                <h1>{user.name} - {user.email}</h1>
                <h1>This is the footer</h1>
            </div>
        </>
    );
}

export default Footer;