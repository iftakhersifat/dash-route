import React from 'react';
import { useLoaderData } from 'react-router';
import Use from './Use';

const Users = () => {
    const useData =useLoaderData();
    console.log(useData);
    return (
        <div className='text-center mt-8'>
            <h1>users</h1>
            <div>
                {
                    useData.map(data=><Use data={data}></Use>)
                }
            </div>
        </div>
    );
};

export default Users;