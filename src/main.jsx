import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Users from './Components/Users/Users.jsx';
import MoreInfo from './Components/Users/MoreInfo.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Comments from './Components/Comments/Comments.jsx';
import MoreComment from './Components/Comments/MoreComment.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component: Root,
    children: [
      { index: true, Component: Home },

      // fetch users
      { path: "users",
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users },

        // moreInfo show
      { path: "users/:MoreInfo",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.MoreInfo}`),
        Component: MoreInfo},

        // for posts
        {
          path: "posts",
          loader: ()=>fetch("https://jsonplaceholder.typicode.com/posts"),
          Component: Posts
        },

        // for comments
        {
          path: "comments",
          loader: ()=>fetch("https://jsonplaceholder.typicode.com/comments"),
          Component: Comments
        },

        // more comments
        // {
        //   path: "comments/:MoreComment",
        //   loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.MoreComment}`),
        //   Component: MoreComment
        // }
        
        
    ], 
  },

  // not found
  {
    path: '*',
    element: <h1 className='text-center mt-96 font-bold text-red-600'>Not Found: 404 Error</h1>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
