import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaList, FaPaypal, FaRegBookmark, FaSearch, FaShoppingCart, FaUser, FaVoicemail } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin]=useAdmin();

    return (
        <div className="max-w-7xl mx-auto flex">
      <div className="w-64 min-h-screen text-white bg-gradient-to-r from-indigo-500 to-purple-500">
        <ul className="menu p-4">
          
            <>
              {isAdmin ? <>
                <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser></FaUser>All Users
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/managecontest">
                <FaList></FaList>Manage Contest
                </NavLink>
              </li>
              
              
              </>
              
              
              : ''} 

              <li>
                <NavLink to="/dashboard/addItems">
                  {" "}
                  <FaBook></FaBook> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <FaList></FaList>Manage Items
                </NavLink>
              </li>

              

              
            </>
        
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>

              

              

              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <FaShoppingCart></FaShoppingCart>MyCart ; 
                </NavLink>
              </li>

              

              <li>
              <NavLink to="/dashboard/paymentHistory">
                  <FaPaypal></FaPaypal> Real Payments History
                </NavLink>
              </li>
              <li>
            <NavLink to="/dashboard/contact">
              <FaVoicemail></FaVoicemail> Contact
            </NavLink>
          </li>
            </>
          
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome>Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/ourShop/salad">
              {" "}
              <FaSearch></FaSearch>Category
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