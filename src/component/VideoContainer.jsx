import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constant"
import { VideoCard } from "./VideoCard"
import { Link } from "react-router-dom";

export const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        getVideos();
    },[])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);

        const json = await data.json();
        
        setVideos(json.items);
        // console.log(json.items)
    }

    return(
        <div className="flex flex-wrap justify-center">
            {videos.map((video) => (
               <Link key={video.id} to={"/watch?v=" + video.id} > <VideoCard  info={video} /> </Link> ) )}
            
        </div>
    )
}