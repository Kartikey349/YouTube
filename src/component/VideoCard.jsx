export const VideoCard = ({info}) => {

    // console.log(info)
    const { snippet , statistics} = info;
    const {thumbnails, title, channelTitle} = snippet;

    return(
        <div className="shadow-md p-2 m-2 w-70 h-68">
            <img className="rounded-lg" src={thumbnails.medium.url} />

            <div>
                <p className="font-bold line-clamp-2 leading-5 ">{title}</p>
                <h4>{channelTitle}</h4>
                <h4>{statistics.viewCount < 1000000 ? Math.floor(statistics.viewCount/1000) + "k" : Math.floor(statistics.viewCount/1000000) + "M"} views</h4>
            </div>
        </div>
    )
}