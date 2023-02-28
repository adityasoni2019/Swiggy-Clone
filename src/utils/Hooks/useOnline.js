import { useEffect, useState } from "react"
const useOnline = () => {
    // this is normal function. 
    const [isOnline, setIsOnline] = useState(true);

    // we just want to run this whenever our page loads
    // hence, we'll use a useEffect((), []);
    useEffect(() => {

        const handleOnline = () => {
            // would set isOnline to true. 
            setIsOnline(true);
        };
        const handleOffline = () => {
            // would set isOnline to false
            setIsOnline(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
        // this ^ cleanup function is for optimization. 
        // if we don't remove the thing, it'll keep fetching the online/offline status, and not just that, everytime we refresh, a new variable would be created which would keep status of online and all. 

    }, []);
    return isOnline;
}
export default useOnline;