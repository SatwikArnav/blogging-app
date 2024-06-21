import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { Blogs } from "./pages/blogs";
import { Blog } from "./pages/blog";
import { Publish } from "./pages/publishBlog";
//import { FullBlog } from "./components/fullBlog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs/:id" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path="/publish" element={<Publish/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;