import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const showPosts = useLoaderData();
    console.log(showPosts);
    return (
        <div className='text-center mt-8 border-b-2 border-gray-500 container mx-auto'>
            <h1 className='text-3xl font-bold text-gray-700'>All Posts</h1>
            <div className='grid grid-cols-2'>
                {
                    showPosts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;