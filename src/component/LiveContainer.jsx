import { useEffect, useState } from "react"
import { LiveMessage } from "./LiveMessage"
import { addMessage } from "../utils/chatSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"



export const LiveContainer = () => {

    const [chatMessage, setChatMessage] = useState("")

    var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

function generate() {
 return nameList[Math.floor(Math.random() * nameList.length)];
    };


const dispatch = useDispatch()

const  messages = useSelector((store) => store.chat.message)

    useEffect(() => {

        

        const timer = setInterval(() => {

            const info= {
            name: generate(),
            text: ("hajdahka") 
        }

            dispatch(addMessage(info))
        },1000)

        return () => clearInterval(timer)
        
},[])






    return <div className="sm:w-full md:w-4/12 h-100 md:h-120 mb-25">
        <span className="text-red-900 font-bold">Live Chat:</span>
     <div className="border-2 rounded-lg flex flex-col-reverse overflow-y-scroll h-full mt-2 ">
        {
            messages.map((m, i) => <LiveMessage key={i} data={m} />)
        }
    </div>
    <form>
            <input value={chatMessage} className="border-1 border-gray-800 px-2 py-1 rounded-lg mt-1 w-65 " type="text" onChange={(e) => setChatMessage(e.target.value)} />

            <button onClick={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                name: "kartikey",
                text: chatMessage
            }))
                setChatMessage("")
        }
            } className="border-1 px-2 py-1 ml-2 rounded-lg bg-red-900 text-white font-bold">send</button>
        </form>
        
    </div>
    
}