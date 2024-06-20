import { BlogCard } from "../components/blogcard";
import { Appbar } from "../components/appbar";
export const Blogs=()=>{
    return(
        <>
        <div className="shadow-2xl">
        <Appbar />
        </div>
        <div className="h-screen grid place-content-center ">
            <BlogCard name="satwik" title="aslckb" content="lkbaf" time="3 Dec 2024"/>
            <BlogCard name="satwik" title="aslckbggxlcx" content="lkbafvukfjhdjdgdghgdh yjy yu ryr y tyvrv rrvrforev tvbbtbtyevryevcrycwvtrwctyectwctrwtru e5evyveyvy" time="3 Dec 2024"/>
            <BlogCard name="rishabh" title="big black rain forest" content="Rain forests can be as big as you want ,all you have to do is soak some seeds and give some water, and tehre it isn filled with glorry" time="3 Dec 2024"/>
        </div>
        </>
        
    )
}