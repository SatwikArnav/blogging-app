import { BlogCard } from "../components/blogcard";
import { Appbar2 } from "../components/appbar2";
import { useBlogs } from "../customhooks";
import { Loading } from "../components/loading";
import { Dropdown } from "../components/dropdown";
import { useState } from "react";

function convertDateFormat(dateString: string): string {
    try {
        const [day, month, year] = dateString.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        return `${day} ${monthNames[date.getMonth()]} ${year}`;
    } catch (error) {
        console.error("Invalid date format:", dateString);
        return dateString; // Return original string if conversion fails
    }
}

export const Blogs = () => {
    const [drop, setDrop] = useState(false);
    const [filter, setFilter] = useState("chicken");
    const { blogs, loading } = useBlogs(filter);

    if (loading || !blogs) {
        return (
            <div className="grid place-content-center h-screen">
                <Loading />
            </div>
        );
    }

    return (
        <div>
            {drop && (
                <div className="absolute top-20 right-20">
                    <Dropdown />
                </div>
            )}
            <div>
                <Appbar2 setDrop={setDrop} setFilter={setFilter} filter={filter} />
            </div>
            <div className="h-20" />
            <div className="flex justify-center">
                <div>
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            name={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            time={convertDateFormat(blog.createdAt)}
                            id={blog.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
