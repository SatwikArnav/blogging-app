import { useState } from "react";
import { Blog } from "../customhooks";
import { Appbar } from "./appbar";
import { Dropdown } from "./dropdown";
interface AppbarProps {
  setDrop: React.Dispatch<React.SetStateAction<boolean>>;
}
function convertDateFormat(dateString: string): string {
  const [day, month, year] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${monthNames[date.getMonth()]} ${year}`;
}

export const FullBlog = ({ blog }: {blog: Blog}) => {
  const [drop, setDrop] = useState(false);

  return (
    <div>
      <Appbar setDrop={setDrop} />
      {drop && (
        <div className="absolute top-20 right-20">
          <Dropdown />
        </div>
      )}
      <div className="h-16"></div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
              posted on {convertDateFormat(blog.createdAt)}
            </div>
            <div className="pt-4">
              {blog.content}
            </div>
          </div>
          <div className="col-span-4 shadow-lg">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full">
              <div className="flex flex-col justify-center">
                <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300">{blog.author.name[0]}</span>
                </div>
              </div>
              <div className="pl-6">
                <div className="text-xl font-bold">
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
  );
};