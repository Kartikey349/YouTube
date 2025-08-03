import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearShowVideo, showVideo } from "../utils/searchVideoSlice";

export const Button = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {name} = props;

    const searchVideo = async (name) => {
    
            dispatch(clearShowVideo());
    
            if(name.length > 0){
                const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&maxResults=20&type=video&key=AIzaSyAqV-cVc1ohaRbxXo60zG3zKuJWHLKujeg`);
                
                
                const json = await data.json();
                
                dispatch(showVideo(json.items))
                navigate(`/result?search=${name}`)
            }
        }

    return(
        <div>
           <button className="m-2 px-4 py-1 bg-slate-800 text-white rounded-md whitespace-nowrap"
           
           onClick={() => {
                searchVideo(name)
           }}
           >
            {name}
            </button>
        </div>
    )
}