import React from 'react';

const Post = ({post}) => {
    const {title, body, id} =post;
    return (
        <div className='text-center border border-white bg-amber-600 m-4 p-8 text-white rounded-2xl'>
            <h1>Id : {id}</h1>
            <h1>Title : {title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Post;