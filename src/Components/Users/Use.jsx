import React from 'react';
import { Link } from 'react-router';

const Use = ({data}) => {
    const {name, email, phone} = data;
    return (
        <div className='text-center border border-white bg-amber-600 m-4 p-8 text-white rounded-2xl'>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h3 className='mb-4'>Phone Number: {phone}</h3>
            <Link className='bg-blue-600 rounded-xl px-2 py-2'>More Info</Link>
        </div>
    );
};

export default Use;