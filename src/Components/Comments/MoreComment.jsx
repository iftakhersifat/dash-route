import React, { use } from 'react';
// import { useLoaderData } from 'react-router';

const MoreComment = ({promise}) => {
    // const loadComment = useLoaderData();
    const usePromise = use(promise)
    const {postId, body}=usePromise;
    return (
        <div className='border-b-2 border-gray-500'>
            <div className='text-center border border-white bg-cyan-600 m-4 p-8 text-white rounded-2xl'>
            <h1>PostId : {postId}</h1>
            <p>{body}</p>
        </div>
        </div>
    );
};

export default MoreComment;