
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import Dashboard from '../DashBoard/Dashboard';
import AllUsers from '../DashBoard/AllUsers/AllUsers';
import ManageContest from '../DashBoard/ManageContest/ManageContest';
import AddContest from '../DashBoard/AddContest/AddContest';
import CreatorRoute from './CreatorRoute';
import AdminRoute from './AdminRoute';
import ParticipateContest from '../DashBoard/ParticipateContest/ParticipateContest';
import WinningContest from '../DashBoard/WinningContest/WinningContest';
import MyProfile from '../DashBoard/MyProfile/MyProfile';
import CreatedContest from '../DashBoard/CreatedContest/CreatedContest';
import ContestSubmit from '../DashBoard/ContestSubmit/ContestSubmit';
import UpdateContest from '../DashBoard/UpdateContest/UpdateContest';
import AllContest from '../DashBoard/AllContest/AllContest';
import ContestDetails from '../DashBoard/AllContest/ContestDetails';
import PrivateRoute from './PrivateRoute';
import Payment from '../DashBoard/Payment/Payment';
import UpdateUser from '../DashBoard/MyProfile/UpdateUser';
import Timelline from "../Pages/Timeline/Timelline";
import BigChart from "../Pages/Piechart/BigChart";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/timeline',
          element:<Timelline></Timelline>
        },
        {
          path:'/piechart',
          element:<BigChart></BigChart>
        },
        {
          path:'/allcontest',
          element:<AllContest></AllContest>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><ContestDetails></ContestDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/contests/new/${params.id}`)
        }
      ]
    },

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        // admin routes
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'managecontest',
          element:<ManageContest></ManageContest>
        },
        // user routes
        {
          path:'participatecontest',
          element:<ParticipateContest></ParticipateContest>
        },
        {
          path:'winningcontest',
          element:<WinningContest></WinningContest>
        },
        {
          path:'myprofile',
          element:<MyProfile></MyProfile>
        },
        {
          path:'updateUser',
          element:<UpdateUser></UpdateUser>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
          loader:({params})=>fetch(`http://localhost:5000/contests/payments/new/item/${params.id}`)
        },

        // creator contest
        
        {
          path:'addcontest',
          element:<CreatorRoute><AddContest></AddContest></CreatorRoute>
        },
        {
          path:'createdcontest',
          element:<CreatorRoute><CreatedContest></CreatedContest></CreatorRoute>
        },
        {
          path:'contestsubmit',
          element:<CreatorRoute><ContestSubmit></ContestSubmit></CreatorRoute>
        },
        {
          path:'update/:id',
          element:<UpdateContest></UpdateContest>,
          loader:({params})=>fetch(`http://localhost:5000/contests/new/${params.id}`)
        },
        
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