import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='border-b-2 text-center border-gray-500'>
            <div className='flex justify-between p-4 text-gray-700 '>
                <h1 className='text-md font-bold'>DashRoute</h1>
                <nav>
                    <ul className='space-x-4 text-md font-bold text-gray-700 '>
                        <Link className='hover:text-blue-700' to="/">Home</Link>
                        <Link className='hover:text-blue-700' to="/contact">Contact Us</Link>
                        <Link className='hover:text-blue-700' to="/blog">Blog</Link>
                        <Link className='hover:text-blue-700' to="/users">Users</Link>
                    </ul>
                </nav>
                <button className='text-md font-bold text-gray-700 border border-white rounded-2xl bg-amber-400 p-2 hover:bg-green-600 hover:text-white'>Sign in</button>
            </div>
        </div>
    );
};

export default Header;