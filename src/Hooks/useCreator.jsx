import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";

const useCreator = () => {
    const {user}=useContext(AuthContext);
    const axiosSecure=useAxiosSecure();

    const {data:isCreator,isPending:isCreatorLoading}=useQuery({
        queryKey:[user?.email,'isCreator'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/user/creator/${user.email}`)
            return res.data?.creator;
        }
    })
    return [isCreator,isCreatorLoading]
};

export default useCreator;