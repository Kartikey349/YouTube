import {useDispatch, useSelector} from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { showVideo } from "../utils/searchVideoSlice";
import { clearShowVideo } from "../utils/searchVideoSlice";

export const Header = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        //make an api call after every key press but if the difference between two api calls is less than 200ms then declinne the api calls

        const timer = setTimeout(() =>{
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }else{
                fetchSearchSuggestion();
            }
        },200)

        return () => {
            clearTimeout(timer);
        }
    },[searchQuery])

    /*
        - key- i
        - useEffect();
        - start timer => make an api call after 200ms

        key - ip
        -destroy the component(useeffect return method)
        - re-render the component
        -useEffect()
        - start timer => make an  api call after 200ms



        * setTimeout(200) ---- will declined

    */

    const fetchSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery] : json[1],
        }))
    }



    const searchVideo = async () => {

        dispatch(clearShowVideo());

        if(searchQuery.length > 0){
            const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=20&type=video&key=AIzaSyAqV-cVc1ohaRbxXo60zG3zKuJWHLKujeg`);
            
            
            const json = await data.json();
            
            dispatch(showVideo(json.items))
            navigate(`/result?search=${searchQuery}`)
            setShowSuggestions(false)
        }
    }


    //dispatching an action
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return(
        <div className="px-4 flex items-center justify-between shadow-md h-15">

           <div className="flex items-center gap-4">
                <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={() => toggleMenuHandler()}></i>

            <Link to={"/"}>
                <img className="w-25 hidden sm:block" src="https://tse4.mm.bing.net/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?pid=Api&P=0&h=180" />
            </Link>
           </div>

           <div className="flex items-center w-8/12 justify-center flex-col">

           <form
            onSubmit={(e) => {
                e.preventDefault();
                searchVideo();
                if(!searchQuery) {
                    navigate("/")
                }
            }}>
                <div className="flex items-center">
                    <input className="border-1 border-gray-400 rounded-l-full w-30 h-8 px-4 sm:w-80" type="text" placeholder="search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    />

                    
                    <button className="border-r-1 border-gray-400 rounded-r-full h-8 w-14 bg-gray-700 hover:bg-gray-500"
                        type="submit"
                    >
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                    </button>
                </div>
            </form>


                {showSuggestions  && suggestions.length > 0 && <div className="absolute top-12 bg-white py-2 w-80 rounded-md shadow-lg px-5 z-50 border-gray-100">
                    <ul>
                        {suggestions.map(s => <li onMouseDown={() => setSearchQuery(s)}
                        key={s} className="py-2 shadow-sm hover:bg-gray-200">{s}</li> )}
                    </ul>
                </div>}
           </div>

           <div>
            <img className="rounded-4xl w-10" src="https://tse1.mm.bing.net/th/id/OIP.-NGiWgBDhMPjrzwpmgNdJwHaHa?pid=Api&P=0&h=180" />
           </div>
        </div>
    )
}