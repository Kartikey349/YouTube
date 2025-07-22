export const Button = (props) => {
    const {name} = props;
    const {snippet} = name;
    
    return(
        <div>
           <button className="m-2 px-4 py-1 bg-slate-800 text-white rounded-md whitespace-nowrap">
            {snippet.title}
            </button>
        </div>
    )
}