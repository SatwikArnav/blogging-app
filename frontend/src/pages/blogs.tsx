import { BlogCard } from "../components/blogcard";
import { Appbar } from "../components/appbar";
import { useBlogs } from "../customhooks";
import { Loading } from "../components/loading";
import { Dropdown } from "../components/dropdown";
import { useState } from "react";

function convertDateFormat(dateString: string): string {
    const [day, month, year] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return `${day} ${monthNames[date.getMonth()]} ${year}`;
}

export const Blogs = () => {
    const { blogs, loading } = useBlogs();
    const [drop, setDrop] = useState(false);

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
            <Appbar setDrop={setDrop} />
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
                    <BlogCard name="satwik" title="aslckb" content="lkbaf" time="3 Dec 2024" id="saf" />
                    <BlogCard id="eeef" name="satwik" title="aslckbggxlcx" content="lkbafvukfjhdjdgdghgdh yjy yu ryr y tyvrv rrvrforev tvbbtbtyevryevcrycwvtrwctyectwctrwtru e5evyveyvy" time="3 Dec 2024" />
                    <BlogCard id="fe" name="rishabh" title="big black rain forest" content="Rain forests can be as big as you want, all you have to do is soak some seeds and give some water, and there it is filled with glory" time="3 Dec 2024" />
                </div>
            </div>
        </div>
    );
};