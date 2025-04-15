import React, { Suspense, useState } from 'react';
// import { useNavigate } from 'react-router';
import MoreComment from './MoreComment';

const Comment = ({ comment }) => {
  const { id, name, email } = comment;
//   const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // Prepare data promise
  const promise = fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json());

  return (
    <div className="text-center border border-white bg-amber-600 m-4 p-8 text-white rounded-2xl">
      <h1>Id : {id}</h1>
      <h1>Name : {name}</h1>
      <h1 className="mb-4">Email : {email}</h1>

      <button 
        onClick={() => setShow(!show)} 
        className="bg-blue-600 rounded-xl px-4 py-2"
      >
        {show ? "Hide" : "Show"} More Details
      </button>

      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <MoreComment promise={promise} />
        </Suspense>
      )}
    </div>
  );
};

export default Comment;
