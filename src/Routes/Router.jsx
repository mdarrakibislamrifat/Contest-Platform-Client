import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import Dashboard from '../DashBoard/Dashboard';
import AllUsers from '../DashBoard/AllUsers/AllUsers';
import ManageContest from '../DashBoard/ManageContest/ManageContest';
import AdminHome from '../DashBoard/AdminHome/AdminHome';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        }
      ]
    },

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'managecontest',
          element:<ManageContest></ManageContest>
        },
        {
          path:'adminhome',
          element:<AdminHome></AdminHome>
        }
      ]
    },
    {
      path:'/login',
      element:<SignIn></SignIn>
  },
  {
      path:'/signup',
      element:<SignUp></SignUp>
  }
    
    
  ]);


export default router;