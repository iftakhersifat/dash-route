import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const MoreInfo = () => {
    const useInfo =useLoaderData();
    console.log(useInfo);
    const {username, address, website} = useInfo;

    // for go back button
    const navigator =useNavigate();
    return (
        <div className='border-b-2 border-gray-500 container mx-auto'>
            <div className='text-center border border-white bg-amber-600 m-4 p-8 text-white rounded-2xl'>
            <h1>UserName: {username}</h1>
            <h3>Street: {address.street}</h3>
            <h3>City: {address.city}</h3>
            <h3>ZipCode: {address.zipcode}</h3>
            <h2 className='mb-4'>Website: <span className='text-red-600 font-bold text-xl'>{website}</span></h2>
            <button className='bg-blue-600 rounded-xl px-2 py-2' onClick={()=>navigator(-1)}>Go Back</button>
        </div>
        </div>
    );
};

export default MoreInfo;