//import { Avatar } from "./blogCard"
import { Link } from "react-router-dom"

export const Appbar = ({setDrop}) => {
    return <div className="h-[88px] fixed z-10 border-b flex justify-between px-10 py-8 shadow-2xl mb-10 w-screen bg-white">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-semibold text-xl">
                NextTale
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>

            <div onClick={() => setDrop(prev => !prev)} className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span  className="font-medium text-gray-600 dark:text-gray-300">S</span>
    
</div>
        </div>
    </div>
}