import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className=' text-center border-gray-500 mt-4'>
            <h1 className='text-md font-bold'>Dash<span className='text-yellow-500'>Route</span></h1>
            <div>
                 <ul className='space-x-4 text-md font-bold text-gray-700 mt-4'>
                    <Link className='hover:text-blue-700' to="/">Home</Link>
                    <Link className='hover:text-blue-700' to="/contact">Contact Us</Link>
                    <Link className='hover:text-blue-700' to="/blog">Blog</Link>
                    <Link className='hover:text-blue-700' to="/users">Users</Link>
                    <p className='mt-4'>Copyright © 2025 - All right reserved</p>
                </ul>
            </div>
        </div>
    );
};

export default Footer;