import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constant"
import { VideoCard } from "./VideoCard"
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

export const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    useEffect(()=> {
        getVideos();
    },[])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);

        const json = await data.json();
        
        // console.log(json.items)
        setVideos(json.items);
    }

    return videos === undefined ? <p>loading...</p> : (
        <div className="flex flex-wrap justify-center">
            {videos.map((video) => (
               <Link key={video.id} to={"/watch?v=" + video.id} > <VideoCard  info={video} /> </Link> ) )}
            
        </div>
    )
}