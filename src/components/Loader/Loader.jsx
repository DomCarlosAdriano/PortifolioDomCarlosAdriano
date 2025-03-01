import { useState } from "react";
import Style from "./Loader.module.css"

function Loader() {
    const [loding, setLoading] = useState(true)
    const [flow, setFlow] = useState("hidden")
    const body = document.querySelector("html")
    body.style.overflowY = flow;
    
    setTimeout(() => {
        setFlow("auto")
        setLoading(false)
    }, 2000);

    return (
        <>
            {loding ? (<div className={Style.loaderContainer}>
                <div className={Style.spinner}></div>
            </div>) : ""}

        </>
    )
}

export default Loader;