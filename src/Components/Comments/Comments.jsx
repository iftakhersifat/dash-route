import React from 'react';
import { useLoaderData } from 'react-router';
import Comment from './Comment';

const Comments = () => {
    const showComments =useLoaderData();
    console.log(showComments);
    return (
        <div className='text-center mt-8 border-b-2 border-gray-500'>
            <h1 className='text-3xl font-bold text-gray-700'>All Comments</h1>
            <div className='grid grid-cols-2'>
                {
                    showComments.map(comment=><Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;