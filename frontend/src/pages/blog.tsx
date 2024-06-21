//import { Appbar } from "../components/appbar";
import { FullBlog } from "../components/fullBlog";
//import { Spinner } from "../components/Spinner";
import { useBlog } from "../customhooks";
import {useParams} from "react-router-dom";
import { Loading } from "../components/loading";

// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id } = useParams();
    const {blog,loading} = useBlog({
        id: id || ""
    });
    console.log(blog);
    if (loading || !blog) {
        return <div className="grid place-content-center h-screen">
            <Loading/>
            
        </div>
    }
    return <div>
        
        <FullBlog blog={blog} />
    </div>
}