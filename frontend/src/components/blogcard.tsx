import { Link } from "react-router-dom";

interface p {
    name: string;
    title: string;
    content: string;
    time: string;
    id: string
}

export const BlogCard = ({ name, title, content, time, id }: p) => {
    return (
        <Link to={`/blog/${id}`} className="block w-full">
            <div className="p-6 border-b-2 shadow-xl z-4 w-full sm:w-[480px] md:w-[560px] lg:w-[640px] mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
                        </div>
                        <div className="pl-2 text-sm font-semibold">
                            {name}
                        </div>
                    </div>
                    <div className="text-xs text-gray-600">
                        {time}
                    </div>
                </div>
                <div className="pt-3 font-bold text-xl">
                    {title}
                </div>
                <div className="pt-2 text-base">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-sm text-gray-500 pt-5">
                    <div className="flex">
                    {`${Math.ceil(content.length / 100)} min read`}
                    <div className="w-6"></div>
                    <svg  onClick={()=>alert("voting feature will be released soon")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>


                    </div>
                </div>
            </div>
        </Link>
    )
}