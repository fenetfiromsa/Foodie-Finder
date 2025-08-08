import React from 'react';
import Navbar from '../components/Navbar';
import bgImage from '../assets/thefirstimg.jpg';
import Category  from '../components/Category';
import Aboutus from '../components/Aboutus';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Meals from '../components/Meals';
export default function HomePage() {
  return (
    <div>
    <div
      className=" text-center p-8 bg-no-repeat  bg-cover h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <div>
       <h1 className='font-bold text-5xl text-white ml-[600px] mt-24 text-start mb-5'>Taste the World Without Leaving Your Home.</h1> 
       <p className='text-white ml-[650px] -mt-1 text-start '>Explore a rich collection of international dishes, from comforting classics to exotic flavors. Whether you're craving spicy street food or a sweet dessert from across the globe, Foodie Finder brings authentic recipes straight to your kitchen — no passport required.</p>
      </div>
      <div className='ml-[400px] mt-10'>
       <Link to="/categories"> <button className=' ml-10 text-xl font-bold text-red-950 bg-green-600 p-2 rounded-2xl'>
          Categories
        </button></Link>
        <Link to="/random"><button className=' ml-10 text-xl font-bold text-red-950 bg-green-600 p-2 rounded-2xl'>
         Randomly Generate
        </button></Link>
      </div>
      
    </div>
    <Category />
    <Aboutus />
    <Meals />
    <Footer />
    </div>
  );
}

