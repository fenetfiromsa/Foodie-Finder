import React from 'react';

import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-10 mt-0">
          
          <div className="flex-shrink-0">
            <a href="#">
              
              <p className=" ml-10 text-xl font-bold text-red-950 bg-green-600 p-2 rounded-2xl" >🍽️ Foodie Finder</p>
            </a>
          </div>
         
          
          <div className="hidden md:flex space-x-4 ml-10px items-center gap-10 text-white font-white">
            <Link to="/"> <a href="#" className=" hover:text-blue-500 font-semibold ml-36">Home</a> </Link> 
            <Link to="/categories"><a href="#" className=" hover:text-blue-500 font-medium ml-10">Categories</a></Link>
            <Link to="/random"><a href="#" className=" hover:text-blue-500 font-medium ml-5">Randomly Generate</a></Link> 
            <Link to="/search"><a href="#" className=" hover:text-blue-500 font-medium ml-10 mr-10">Search</a></Link>
          </div>
           </div>
      </div>
    </nav>
  );
}
