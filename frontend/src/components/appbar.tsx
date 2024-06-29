import React from 'react';
import { Link } from "react-router-dom";


interface AppbarProps {
  setDrop: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: (value: string) => void;
  filter:string;
}

export const Appbar: React.FC<AppbarProps> = ({ setDrop, setFilter,filter }) => {
  console.log(setFilter,filter);
  return (
    <div className="fixed z-10 top-0 left-0 right-0 border-b shadow-2xl bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to='/blogs' className="font-semibold text-xl">
          NextTale
        </Link>
        
        <div className="flex items-center">
          <Link to="/publish">
            <button
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              New
            </button>
          </Link>
          
          <div
            onClick={() => setDrop(prev => !prev)}
            className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
          >
            <span className="font-medium text-gray-600 dark:text-gray-300">{(localStorage.getItem("name")||"Anonymous")[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

