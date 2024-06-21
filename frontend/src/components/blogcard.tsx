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
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </Link>
    )
}