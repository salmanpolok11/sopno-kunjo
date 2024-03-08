import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainSection from './MainSection/MainSection.jsx';
import Home from './Page/Home.jsx';
import Profile from './Page/Profile.jsx';
import Exams from './Page/Exams.jsx';
import Contract from './Page/Contract.jsx';
import Login from './Page/Login.jsx';
import Register from './Page/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import About from './Page/About.jsx';
import AdminSelf from './CEO/AdminSelf.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSection/>,
    children: [ 
                {
                   path: '/',
                   element: <Home/>
                },
                {
                   path: '/profile',
                   element: <Profile/>
                },
                {
                   path: '/exam',
                   element: <Exams/>
                },
                {
                   path: '/contract',
                   element: <Contract/>
                },
                {
                   path: '/about',
                   element: <About/>
                },
                {
                   path: '/login',
                   element: <Login/>
                },
                {
                   path: '/register',
                   element: <Register/>
                },
                {
                   path: '/admin',
                   element: <AdminSelf/>
                }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
