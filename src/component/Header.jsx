export const Header = () => {
    return(
        <div className="px-4 h-15 flex items-center justify-between shadow-md">

           <div className="flex items-center gap-4">
                <i className="fa-solid fa-bars text-2xl"></i>

                <img className="w-25" src="https://tse4.mm.bing.net/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?pid=Api&P=0&h=180" />
           </div>

           <div className="flex items-center w-8/12 justify-center">
                <input className="border-1 border-gray-400 rounded-l-full w-80 h-8 px-4" type="text" placeholder="search..." />

                <button className="border-r-1 border-gray-400 rounded-r-full h-8 w-14 bg-gray-700 hover:bg-gray-500">
                    <i class="fa-solid fa-magnifying-glass text-white"></i>
                </button>
           </div>

           <div>
            <img className="rounded-4xl w-10" src="https://tse1.mm.bing.net/th/id/OIP.-NGiWgBDhMPjrzwpmgNdJwHaHa?pid=Api&P=0&h=180" />
           </div>
        </div>
    )
}