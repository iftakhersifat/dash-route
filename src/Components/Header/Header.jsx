import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='text-center border-b-2 border-gray-500'>
            <div className='flex justify-between p-4 text-gray-700 '>
                <h1 className='text-md font-bold'>Dash<span className='text-yellow-500'>Route</span></h1>
                <nav>
                    <ul className='space-x-4 text-md font-bold text-gray-700 '>
                        <Link className='hover:text-blue-700' to="/">Home</Link>
                        <Link className='hover:text-blue-700' to="/contact">Contact Us</Link>
                        <Link className='hover:text-blue-700' to="/blog">Blog</Link>
                        <Link className='hover:text-blue-700' to="/users">Users</Link>
                        <Link className='hover:text-blue-700' to="/posts">Posts</Link>
                    </ul>
                </nav>
                <button className='text-md font-bold text-gray-700 border border-white rounded-xl bg-amber-400 p-2 mx-3 hover:bg-green-600 hover:text-white'>Sign in</button>
            </div>
        </div>
    );
};

export default Header;