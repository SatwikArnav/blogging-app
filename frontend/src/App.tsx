import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { Blogs } from "./pages/blogs";
import { Blog } from "./pages/blog";
import { Publish } from "./pages/publishBlog";
//import { useEffect } from "react";
//import { FullBlog } from "./components/fullBlog";

const App = () => {
  //const [name,setName]=useEffect("");

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path="/publish" element={<Publish/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;