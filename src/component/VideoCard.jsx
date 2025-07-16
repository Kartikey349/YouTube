export const VideoCard = ({info}) => {

    // console.log(info)
    const { snippet , statistics} = info;
    const {thumbnails, title, channelTitle} = snippet;

    return(
        <div className="shadow-md p-2 m-2 w-70">
            <img className="rounded-lg" src={thumbnails.medium.url} />

            <div>
                <p className="font-bold">{title}</p>
                <h4>{channelTitle}</h4>
                <h4>{statistics.viewCount} views</h4>
            </div>
        </div>
    )
}