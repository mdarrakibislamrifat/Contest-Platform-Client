

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router-dom";


const AdminRoute = (children) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin()
    if(loading || isAdminLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default AdminRoute;