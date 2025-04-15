import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const showPosts = useLoaderData();
    console.log(showPosts);
    return (
        <div className='text-center mt-8 border-b-2 border-gray-500'>
            <h1 className='text-3xl font-bold text-gray-700'>All Posts</h1>
            <div>
                {
                    showPosts.map(post=><Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;