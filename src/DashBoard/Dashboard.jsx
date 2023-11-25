import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaFileImport, FaHome, FaList, FaPaypal, FaRegBookmark, FaSearch, FaShoppingCart, FaStar, FaUser, FaVoicemail } from 'react-icons/fa';
import { FaCartPlus, FaFileCircleCheck } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";
import useCreator from "../Hooks/useCreator";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Dashboard = () => {
  const {user}=useContext(AuthContext);
    const [isAdmin]=useAdmin();
    const [isCreator]=useCreator()

    return (
        <div className="max-w-7xl mx-auto flex">
          <Helmet><title>Dashboard</title></Helmet>
      <div className=" min-h-screen shadow-lg rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500">
        <ul className="menu p-4">
          
            <>
              {isAdmin ? <>
                <li>
                <NavLink to="/dashboard/adminhome">
                  {" "}
                  <FaHome className="text-xl"></FaHome> Admin Home
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser className="text-xl"></FaUser>Manage Users
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/managecontest">
                <FaList className="text-xl"></FaList>Manage Contest
                </NavLink>
              </li>
              
              
              </>
              
              
              : ''} 

              <>{isCreator ? <>
              
              <li><NavLink to='/dashboard/addcontest'><FaFileImport className="text-xl"></FaFileImport> Add Contest</NavLink></li>
              <li><NavLink to='/dashboard/createdcontest'><FaList className="text-xl"></FaList> My Created Contest</NavLink></li>
              <li><NavLink to='/dashboard/contestsubmit'><FaFileCircleCheck className="text-xl"></FaFileCircleCheck> Contest Submit</NavLink></li>
              
              </>: ''}</>

                <>{user ? <>
                  <li><NavLink to='/dashboard/participatecontest'><FaCartPlus className="text-xl"></FaCartPlus> My Participated Contest</NavLink></li>
                  <li><NavLink to='/dashboard/winningcontest'><FaStar className="text-xl"></FaStar> My Winning Contest</NavLink></li>
                  <li><NavLink to='/dashboard/myprofile'><IoIosContact className="text-xl"></IoIosContact> My Profile</NavLink></li>

                </> : ''}</>
              

              
            </>
      
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              {" "}
              <FaHome className="text-xl"></FaHome>Home
            </NavLink>
          </li>

          

          
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default Dashboard;