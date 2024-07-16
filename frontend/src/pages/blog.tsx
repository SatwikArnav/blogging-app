import { FullBlog } from "../components/fullBlog";
import { useBlog } from "../customhooks";
import { useParams } from "react-router-dom";
import { Loading } from "../components/loading";
// import { Comments } from "../components/comments";
import { CreateComment } from "../components/createcomment";
import { useState } from "react";

export const Blog = () => {
    const { id } = useParams() || "";
    const { blog, loading } = useBlog({
        id: id || ""
    });
    // const { comments, loadings } = useComments({        
    //     id: id || ""
    // });
    const [comment, setComment] = useState("");

    if (loading || !blog) {
        return (
            <div className="grid place-content-center h-screen">
                <Loading />
            </div>
        );
    }


        return (
            <div className="h-screen flex flex-col justify-between">
                <FullBlog blog={blog} />
                <div >

                <CreateComment postId={id || ""} comment={comment} setComment={setComment}/>
                </div>
                <div className="w-full bg-green-500 shadow-lg">
                {


                }


                        

                        
                   
                </div>
            </div>
        );
    }