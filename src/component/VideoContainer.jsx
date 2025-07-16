import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constant"
import { VideoCard } from "./VideoCard"

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
            {videos.map((video) => <VideoCard key={video.id} info={video} />  )}
            
        </div>
    )
}