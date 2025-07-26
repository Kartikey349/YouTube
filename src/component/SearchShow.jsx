import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { clearShowVideo } from "../utils/searchVideoSlice";

export const SearchShow = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search');
    

    const searchResult = useSelector((store) => store.searchVideo.items[0])
    console.log(searchResult)


    useEffect(() => {
        if (!searchResult) {
            navigate("/");
        }
    }, [searchResult, navigate]);





    const SearchCard = ({data}) => {
        return (
            <div className="shadow-md p-2 m-2 w-70 h-72 ]">

                <img src={data?.snippet?.thumbnails?.medium?.url} />
                <p className="line-clamp-2">{data?.snippet?.title}</p>
                <p>{data?.snippet?.channelTitle}</p>

                <p className="line-clamp-2">{data?.snippet?.description}</p>
            </div>
        )
    }



    return (
        <div className=" p-4">
            <p>Your search results are  
                <span className="text-red-500 font-bold"> {searchQuery}</span>
            </p>
            <div className="flex flex-wrap gap-2">
                {searchResult && searchResult.map((video) => {
                    return  <SearchCard key={video?.id?.videoId} data={video} />
                })}
            </div>
        </div>
    )
}