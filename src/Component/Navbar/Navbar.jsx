import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate=useNavigate();
  const handleLogOut=()=>{
    logOut()
    // localStorage.removeItem('token')
    navigate('/login')
  }

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black-500 underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allcontest"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black-500 underline font-bold"
              : ""
          }
        >
          All Contest
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black-500  underline font-bold"
              : ""
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        {user ? (
          ''
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-black-500 underline font-bold"
                : ""
            }
          >
            Login
          </NavLink>
        )}
      </li>
    
    </>
  );
  return (
    <div className="navbar bg-blue-200 shadow-lg rounded-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="hidden sm:block md:w-16 visible rounded-full lg:w-16 visible rounded-full"
          src="https://i.ibb.co/0CtKFMx/channels4-profile.jpg"
          alt=""
        />
        <Link to='/' className="btn btn-ghost normal-case text-black text-sm lg:text-xl">ContestCrazeHub</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      
      {user && <div className="dropdown dropdown-bottom dropdown-end ml-24 md:ml-0 lg:ml-0">
        
        <label tabIndex={0} >
        <img
                className="rounded-full w-[50px] h-[50px] mr-2"
                src={user?.photoURL}
                alt=""
              />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
        >
          <li><p className="text-black-500">{user?.displayName}</p></li>
          
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
          <button className="text-blue-500" onClick={handleLogOut}>Logout</button>
          </li>
          
        </ul>
      </div>}
     
    </div>
  );
};

export default Navbar;