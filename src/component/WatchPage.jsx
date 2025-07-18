import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

export const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");


    //closes sidebar automatically when watchpage is open
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])


    return(
        <div className="p-4">
            <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}