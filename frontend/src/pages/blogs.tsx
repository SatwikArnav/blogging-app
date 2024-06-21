import { BlogCard } from "../components/blogcard";
import { Appbar } from "../components/appbar";
import { useBlogs } from "../customhooks";
import { Loading } from "../components/loading";


export const Blogs=()=>{
    const {blogs,loading}=useBlogs();
    //console.log(blogs)
    if (loading || !blogs) {
        return <div className="grid place-content-center h-screen">
            <Loading/>
            
        </div>
    }

    return <div>
        <Appbar />
        <div className="h-20"/>
        <div  className="flex justify-center">
            <div>
                
                {blogs.map(blog => <BlogCard
                    //id={blog.id}
                    name={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    time={"2nd Feb 2024"}
                    id={blog.id}
                />)}
                <BlogCard name="satwik" title="aslckb" content="lkbaf" time="3 Dec 2024 " id="saf"/>
            <BlogCard  id="eeef"name="satwik" title="aslckbggxlcx" content="lkbafvukfjhdjdgdghgdh yjy yu ryr y tyvrv rrvrforev tvbbtbtyevryevcrycwvtrwctyectwctrwtru e5evyveyvy" time="3 Dec 2024"/>
            <BlogCard id="fe" name="rishabh" title="big black rain forest" content="Rain forests can be as big as you want ,all you have to do is soak some seeds and give some water, and tehre it isn filled with glorry" time="3 Dec 2024"/>
            </div>
            
        </div>
    </div>
}