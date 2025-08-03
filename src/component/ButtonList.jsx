import { Button } from "./Button"

const List = ["All", "gaming", "Sports","Weeknd","Musics","Movies","comedy","live","Asmr","Dance"]

export const ButtonList = () => {
    return(
        <div className="flex overflow-x-auto w-full whitespace-nowrap pt-4">
            {List.map((item, index) => {
               return <Button key={index} name={item} onclick />
            })}
        </div>
    )
}