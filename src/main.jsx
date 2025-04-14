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

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "users",
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users },
        
      { path: "users/:MoreInfo",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.MoreInfo}`),
        Component: MoreInfo},
    ], 
  },
  {
    path: '*',
    element: <h1 className='text-center mt-96'>Not Found: 404 Error</h1>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
