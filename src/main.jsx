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
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
