import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_BYID } from "../utils/constant";
import { CommentsContainer } from "./CommentsContainer";
import { LiveContainer } from "./LiveContainer";

export const WatchPage = () => {

    const [videoInfoById, setVideoInfoById] = useState([]);
    
    const [isOpen, setIsOpen] = useState(false);

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    //closes sidebar automatically when watchpage is open
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    useEffect(() => {
        videoInfo();
    }, [videoId])

    const videoInfo = async () => {
        const data =  await fetch(YOUTUBE_VIDEO_BYID + videoId);
        const json = await data.json();
        // console.log(json.items[0])
        setVideoInfoById(json?.items[0])
    }

    if (!videoInfoById || !videoInfoById.snippet) {
    return <div className="p-4 text-lg">Loading...</div>;
  }

    const {snippet,statistics} = videoInfoById;
    const {title, channelTitle, description, tags} = snippet;
    const {likeCount, viewCount} = statistics;
    // console.log(tags)
    // console.log(videoInfoById)


    const toggleDescription = () => {
        setIsOpen(!isOpen);
    }
    
    

    return(
        <div className="p-4 w-full">
            <div className="">
                <div className="md:flex gap-4 ">
                    <div className=" flex flex-col md:w-8/12 items-center">
                <iframe width="1000" height="500" className="rounded-xl w-full h-75 sm:w-full sm:h-95 md:h-140" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


           


            <div className="w-full md:w-full">
                <h1 className="font-bold mt-2 text-2xl w-full sm:w-full md:w-full">{title} | {channelTitle}</h1>
                
                <div className="flex items-center gap-2 py-3">
                    <i className="fa-solid fa-user border-2 p-2 rounded-full"></i>
                    <h2 className="font-semibold">{channelTitle}</h2>

                    <button className="text-white bg-black py-2 px-3 rounded-3xl">Join</button>

                    <div className="hidden py-2 px-3 rounded-3xl bg-gray-200 sm:flex items-center gap-1">
                        <i className="fa-regular fa-bell"></i>
                        <h4>Subcribed</h4>
                    </div>

                    <div className="py-2 px-3 rounded-3xl bg-gray-200 flex items-center">

                        {likeCount < 1000000 ? Math.floor(likeCount/1000) + "k" : Math.floor(likeCount/1000000) + "M"}

                        <i className="fa-regular fa-thumbs-up mx-1"></i>
                        <p>|</p>
                        <i className="fa-regular fa-thumbs-down ml-1"></i>
                    </div>
                </div>
                </div>
                </div>

                
                <LiveContainer />

            </div> 

                <div className=" bg-gray-200 p-2 rounded-2xl w-full  sm:w-full md:w-8/12 mt-2">
                    <h2 className="font-semibold" onClick={() => toggleDescription()}>Description</h2>


                    {isOpen && <div><h4>{viewCount} views</h4>
                    <hr className="p-1 " />
                    <h4>{description}</h4>
                    {tags === undefined ? null: tags.map((tag) => <h4 key={tag} className="text-blue-800">#{tag}</h4>)}
                    </div>
                    }

                </div>
            </div>

            <CommentsContainer />
        </div>
    )
}