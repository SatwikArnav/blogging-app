import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";

const App = () => {
  return (
    <>
      <div>hello</div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;