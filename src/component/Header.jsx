import {useDispatch} from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

export const Header = () => {

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        //make an api call after every key press but if the difference between two api calls is less than 200ms then declinne the api calls

        const timer = setTimeout(() =>{
            fetchSearchSuggestion();
            console.log("apicall - " + searchQuery)
        },200)

        return () => {
            clearInterval(timer);
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
        console.log(json[1]);
    }

    const dispatch = useDispatch();

    //dispatching an action
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return(
        <div className="px-4 h-15 flex items-center justify-between shadow-md">

           <div className="flex items-center gap-4">
                <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={() => toggleMenuHandler()}></i>

                <img className="w-25" src="https://tse4.mm.bing.net/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?pid=Api&P=0&h=180" />
           </div>

           <div className="flex items-center w-8/12 justify-center">
                <input className="border-1 border-gray-400 rounded-l-full w-80 h-8 px-4" type="text" placeholder="search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                <button className="border-r-1 border-gray-400 rounded-r-full h-8 w-14 bg-gray-700 hover:bg-gray-500">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>
           </div>

           <div>
            <img className="rounded-4xl w-10" src="https://tse1.mm.bing.net/th/id/OIP.-NGiWgBDhMPjrzwpmgNdJwHaHa?pid=Api&P=0&h=180" />
           </div>
        </div>
    )
}