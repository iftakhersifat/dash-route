import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='text-center mt-4'>
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
            <div className='flex justify-center gap-4 mt-4'>
                <Facebook size={25} fill='#1877F2'></Facebook>
                <Instagram size={25} fill='#E4405F'></Instagram>
                <Linkedin size={25} fill='#0077B5'></Linkedin>
                <Twitter size={25} fill='#1DA1F2'></Twitter>
            </div>
        </div>
    );
};

export default Footer;