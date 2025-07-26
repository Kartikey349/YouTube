import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const SideBar = () => {

    //subscribing to the store
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //early return
    if(!isMenuOpen) return null;

    return(
        <div className="shadow-md w-38 p-4 flex flex-col gap-5 shrink-0 absolute top-15 bg-gray-200 rounded-lg">
            <ul className="border-b-2 flex flex-col gap-2">
                <Link to={"/"}>
                    <li>Home</li>
                </Link>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>

            <ul className="border-b-2 flex flex-col gap-2">
                <p className="font-bold">You &gt; </p>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Video</li>
            </ul>

            <ul className="border-b-2 flex flex-col gap-2">
                <p className="font-bold">Subscriptions &gt; </p>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Video</li>
            </ul>
        </div>
    )
}