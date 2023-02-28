import { base_image_url } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ name, cloudinaryImageId, area }) => {

    const { user } = useContext(UserContext);

    return (
        <div className="w-[200px] p-5 shadow-md m-2">
            <img src={base_image_url + cloudinaryImageId} className="w-[200px]" />
            <h2 className="font-bold xl">{name}</h2>
            {/* <h3>Rating: {restaurantList.rating}</h3> */}
            {/* <h4>Cusines: {restaurantList.cuisines.join(", ")}</h4> */}
            <h5>area: {area}</h5>
            <span className="font-bold">{user.name} {user.email}</span>
        </div>
    );
}

export default RestaurantCard;