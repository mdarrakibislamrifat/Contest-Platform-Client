import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";



const MyProfile = () => {
    const {user}=useContext(AuthContext);

  

  
  return (
    <div >
        <div
    className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-32 overflow-hidden">
        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src={user?.photoURL} alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold">{user?.displayName}</h2>
        <p className="text-gray-500">{user?.email}</p>
    </div>
   
    <div className="p-4 border-t mx-8 mt-2">
    <Link to='/dashboard/updateUser'><button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"> Edit</button></Link>
    </div>
</div>
      
      
    </div>
  );
};

export default MyProfile;
