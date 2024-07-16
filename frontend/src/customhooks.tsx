import { useEffect, useState } from "react"
// import { BACKEND_URL } from "./config";
import axios from "axios";

export interface Blog {
    "content": string;
    "title": string;
    "id": string
    "createdAt":string
    "author": {
        "name": string
        "intro":string
    }
    "comments":{
        "content": string;
        "createdAt":string
    }
}




export const useBlogs=(filter:string)=>{
    const [blogs,setblogs]=useState<Blog[]>([]);
    const [loading,setloading]=useState(true);
    
    useEffect(() => {
        let url=`${process.env.BACKEND_URL}/api/v1/blog/bulk`
        if (filter!=""){
            url=url+`/${filter}`
        }
        axios.get(url, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          })
          .then(response => {
            setblogs(response.data);
            setloading(false);
          });
    }, [filter])



    
    return {
        loading,
        blogs
    }
}


export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                
                setBlog(response.data);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}

export const useComments = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState<Comment[]>([]);
    
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/comment/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setComments(response.data);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        comments
    }
}
    