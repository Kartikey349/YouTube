import { ButtonList } from "./ButtonList"
import { VideoContainer } from "./VideoContainer"

export const MainContainer = () => {
    return(
        <div className="overflow-auto">
            <ButtonList />
            <VideoContainer />
        </div>
    )
}