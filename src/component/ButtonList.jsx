import { useEffect, useState } from "react"
import { CATEGORY_API } from "../utils/constant"
import { Button } from "./Button"


export const ButtonList = () => {

    const [category, setCategory] = useState([]);
    
    
    
    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        const data = await fetch(CATEGORY_API);
        const json = await data.json();
        // console.log(json)
        setCategory(json.items)
    };

    
    return (
        <div className="flex overflow-x-auto w-full whitespace-nowrap pt-4">
            {category.map((item) => {
               return <Button key={item.id} name={item} />
            })}
        </div>
    )
}