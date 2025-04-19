import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='text-center border-b-2 border-gray-500 container mx-auto'>
            <div className='flex justify-between p-4 text-gray-700 '>
                <h1 className='text-md font-bold'>Dash<span className='text-yellow-500'>Route</span></h1>
                <nav className='md:flex hidden'>
                    <ul className='space-x-4 text-md font-bold text-gray-700 '>
                        <NavLink  className={({ isActive }) =>
                        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
                        } to="/">Home</NavLink>

                        <NavLink  className={({ isActive }) =>
                        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
                      } to="/blog">Blog</NavLink>

                        <NavLink  className={({ isActive }) =>
                        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
                      } to="/users">Users</NavLink>

                        <NavLink  className={({ isActive }) =>
                        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
                      } to="/posts">Posts</NavLink>

                        <NavLink  className={({ isActive }) =>
                        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
                      } to="/comments">Comments</NavLink>
                    </ul>
                </nav>
                <button className='text-md font-bold text-gray-700 border border-white rounded-xl bg-amber-400 p-2 mx-3 hover:bg-green-600 hover:text-white'>Sign in</button>
            </div>
        </div>
    );
};

export default Header;