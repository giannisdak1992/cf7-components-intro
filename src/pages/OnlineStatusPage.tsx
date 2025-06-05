import OnlineStatus from "../components/OnlineStatus.tsx"
import {useEffect} from "react";

const OnlineStatusPage = () => {

    useEffect (() => {
        document.title = "CF7 Name Changer"
    })
    return (
        <>
            <OnlineStatus />
        </>
    )
}

export default OnlineStatusPage;