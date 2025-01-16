import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './assets/Components/Main';
import Home from './assets/Components/Home';
import Menu from './assets/Components/Menu';
import Shop from './assets/Components/Shop';
import Contact from './assets/Components/Contact';
import Login from './assets/Components/Login';
import Registration from './assets/Components/Registration';
import AuthProvider from './assets/Components/Firebase/AuthProvider';
import Secrat from './assets/Components/Secrat';
import PrivateRoute from './assets/Components/PrivateRoute';
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
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/shop',
        element:<Shop></Shop>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/secrat',
        element:<PrivateRoute><Secrat></Secrat></PrivateRoute>
      },
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
   <AuthProvider>
     <HelmetProvider>
    <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
  </HelmetProvider>
   </AuthProvider>
 
)
