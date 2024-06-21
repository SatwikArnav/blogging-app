import { Blog } from "../customhooks"
import { Appbar } from "./appbar"
//import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="h-16"></div>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4 ">
                     {blog.content}
                    </div>
                </div>
                <div className="col-span-4 shadow-lg">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full"><div className="flex flex-col justify-center">
                    <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300  ">{blog.author.name[0]}</span></div>
    
</div>
                        <div className="pl-6">
                            <div className="text-xl font-bold ">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}