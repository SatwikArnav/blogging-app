import { SigninType, SignupType, createPostInput, updatePostInput } from "@satwikarnav/common-app";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
//import { Axios } from "axios";
import axios from "axios";
export const SignupAuth = () => {
  const [input, setInput] = useState<SignupType>({
    email: "",
    password: "",
    name: "",
    intro:"",
  });
  const navigate=useNavigate();

  return (
    <div className="bg-slate-200">
      <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
          <div className="flex-col shadow-2xl px-14 pb-10 pt-10">
            <div className="pr-10 pl-10">
              <div className="font-bold text-3xl">create an account</div>
              <div className="text-slate-500 flex">
                <div>already have an account?</div>
                <Link className="pl-1.5 underline" to="/signin">
                  login
                </Link>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      name: e.target.value,
                    });
                  }}
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-6 mt-4"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-black mt-2">
                  Email
                </label>
                <input
                  type="text"
                  id="first_name"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      email: e.target.value,
                    });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-6 mt-4"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-black mt-2">
                  Give us your Intro
                </label>
                <input
                  type="text"
                  //id="first_name"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      intro: e.target.value,
                    });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-6 mt-4"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black mt-2">
                  Password
                </label>
                <input
                  type="password"
                  id="first_name"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      password: e.target.value,
                    });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-6 mt-4"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <button
              
              className="text-white bg-black font-medium rounded-lg text-sm py-2 ml-1 text-center mt-20 min-w-96 mb-10"
              onClick={async ()=>{
                try {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup ` , input);
                    const jwt = response.data;
                    localStorage.setItem("token", jwt);
                    const id=response.data.name||"Anonymous";
                    navigate(`/blogs/${id}`);
                } catch(e) {
                    alert("Error while signing up")
                    // alert the user here that the request failed
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};