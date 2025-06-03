import {useState, useEffect} from "react";

const OnlineStatus = () => {

    const [isOnline, setOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handler = () => {
            setOnline(navigator.onLine)
        }

        const pollingId = setInterval(handler, 5000);


        window.addEventListener('online', handler);
        window.addEventListener('offline', handler);

        return () => {
            clearInterval(pollingId);
            window.removeEventListener("online", handler)
            window.removeEventListener('offline', handler);
        }
    }, []);
    return(
        <>
            {/*<div className="bg-green-500 text-white text-center mt-12 mx-4 p-4 rounded mx-4">*/}
            <div className={`text-white text-center mt-12 mx-4 p-4 rounded ${ isOnline ?
                "bg-green-500" : "bg-cf-dark-red"}`}>
                { isOnline ? "You are online!" : "You are offline!" }
            </div>

        </>
    )
}

export default OnlineStatus;