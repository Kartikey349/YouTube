import { Button } from "./Button"

const List = ["All", "gaming", "Sports","Weeknd","Musics","Movies","comedy","live","Asmr","Dnace"]

export const ButtonList = () => {
    return(
        <div className="flex overflow-x-auto w-full whitespace-nowrap">
            {List.map((item) => {
               return <Button name={item} />
            })}
        </div>
    )
}