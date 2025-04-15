import React from 'react';
import { useLoaderData } from 'react-router';
import Use from './Use';

const Users = () => {
    const useData =useLoaderData();
    console.log(useData);
    return (
        <div className='text-center mt-8 border-b-2 border-gray-500'>
            <h1 className='text-3xl font-bold text-gray-700'>Users Information</h1>
            <div className='p-4 grid grid-cols-2'>
                {
                    useData.map(data=><Use key={data.id} data={data}></Use>)
                }
            </div>
        </div>
    );
};

export default Users;