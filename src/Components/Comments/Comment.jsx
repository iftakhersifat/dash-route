import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email}=comment;
    return (
        <div className='text-center border border-white bg-amber-600 m-4 p-8 text-white rounded-2xl'>
            <h1>Id : {id}</h1>
            <h1>Name : {name}</h1>
            <h1>Email : {email}</h1>
        </div>
    );
};

export default Comment;