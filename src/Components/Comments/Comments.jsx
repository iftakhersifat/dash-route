import React from 'react';
import { useLoaderData } from 'react-router';

const Comments = () => {
    const showComments =useLoaderData();
    console.log(showComments);
    return (
        <div>
            
        </div>
    );
};

export default Comments;