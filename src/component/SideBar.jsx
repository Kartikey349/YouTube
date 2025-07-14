import { useSelector } from "react-redux"

export const SideBar = () => {

    //subscribing to the store
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //early return
    if(!isMenuOpen) return null;

    return(
        <div className="shadow-md w-50 p-4 flex flex-col gap-5">
            <ul className="border-b-2 flex flex-col gap-2">
                <li>Home</li>
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