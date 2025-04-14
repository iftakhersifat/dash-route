import React from 'react';
import { useLoaderData } from 'react-router';

const MoreInfo = () => {
    const useInfo =useLoaderData();
    console.log(useInfo);
    const {username, address, website} = useInfo;
    return (
        <div className='text-center border border-white bg-amber-600 m-4 p-8 text-white rounded-2xl'>
            <h1>UserName: {username}</h1>
            <h3>Street: {address.street}</h3>
            <h3>City: {address.city}</h3>
            <h3>ZipCode: {address.zipcode}</h3>
            <h2>Website: {website}</h2>
        </div>
    );
};

export default MoreInfo;