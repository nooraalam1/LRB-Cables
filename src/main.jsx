import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './assets/Components/Main';
import Home from './assets/Components/Home';

import Contact from './assets/Components/Contact';
import Products from './assets/Components/Products';
import About from './assets/Components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },      
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/products',
        element:<Products></Products>
      }    ,
      {
        path:'/about',
        element:<About></About>
      }    
    ]
  },
]);

createRoot(document.getElementById('root')).render(


    <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
 
   
 
)
