import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchShow = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search');
    

    const searchResult = useSelector((store) => store.searchVideo.items[0])
    // console.log(searchResult)


    useEffect(() => {
        if (!searchResult) {
            navigate("/");
        }
    }, []);





    const SearchCard = ({data}) => {
        return (
            <div className="shadow-md p-2 m-2 w-70 h-72 rounded-lg ">

                <img className="rounded-lg" src={data?.snippet?.thumbnails?.medium?.url} />
                <p className="line-clamp-2 font-bold">{data?.snippet?.title}</p>
                <p className="font-semibold text-gray-600">{data?.snippet?.channelTitle}</p>

                <p className="line-clamp-2 text-gray-600">{data?.snippet?.description}</p>
            </div>
        )
    }

 

    return (
        <div className=" p-4">
            <p>Your search results are  
                <span className="text-red-500 font-bold line-clamp-1"> {searchQuery}</span>
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
                {searchResult && searchResult.map((video) => {
                    return <Link to={"/watch?v=" + video.id.videoId } key={video?.id?.videoId} > <SearchCard data={video} /> </Link>
                })}
            </div>
        </div>
    )
}