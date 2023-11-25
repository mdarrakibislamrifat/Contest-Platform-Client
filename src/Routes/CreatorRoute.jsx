

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useCreator from "../Hooks/useCreator";
import { AuthContext } from "../Providers/AuthProviders";


const CreatorRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isCreator,isCreatorLoading]=useCreator();
    if(loading || isCreatorLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user && isCreator){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default CreatorRoute;