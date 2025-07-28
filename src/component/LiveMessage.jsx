export const LiveMessage = ({data}) => {

    return <div className="border m-1 p-1">
        <p>{data.name}</p>
        <p>{data.text}</p>
    </div>
}