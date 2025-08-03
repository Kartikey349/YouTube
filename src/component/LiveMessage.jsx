export const LiveMessage = ({data}) => {

    return <div className="border m-1 p-1 flex items-center gap-2">
        <img className="w-10 h-10 rounded-full" src="https://random-image-pepebigotes.vercel.app/api/random-image" />
        <div>
            <p>{data.name}</p>
            <p>{data.text}</p>
        </div>
    </div>
}