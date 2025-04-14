import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const useData =useLoaderData();
    console.log(useData)
    return (
        <div>
            <h1>users</h1>
        </div>
    );
};

export default Users;