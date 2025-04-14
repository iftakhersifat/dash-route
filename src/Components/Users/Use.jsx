import React from 'react';

const Use = ({data}) => {
    const {name, email, phone} = data;
    return (
        <div className='text-center border border-white bg-amber-600 my-4 p-8 text-white rounded-2xl'>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h3>Phone Number: {phone}</h3>
        </div>
    );
};

export default Use;