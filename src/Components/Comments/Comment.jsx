import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Comment = ({comment}) => {
    const {id, name, email}=comment;
    const navigator =useNavigate();

    // show hide
    const [show, setShow] =useState(false);
    // const handelButton=()=>{
    //     navigator(`/comments/${id}`)
    // }
    return (
        <div className='text-center border border-white bg-amber-600 m-4 p-8 text-white rounded-2xl'>
            <h1>Id : {id}</h1>
            <h1>Name : {name}</h1>
            <h1 className='mb-4'>Email : {email}</h1>
            <button onClick={()=>setShow(!show)}  className={`bg-blue-600 rounded-xl px-2 py-2 {show ? "Hide" : "Show"}`}> {show ? "Hide " : "show "}More Details
                
            </button>
        </div>
    );
};

export default Comment;