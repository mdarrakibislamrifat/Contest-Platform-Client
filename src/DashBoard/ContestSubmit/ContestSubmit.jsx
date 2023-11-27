import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ShowSubmit from "./ShowSubmit";


const ContestSubmit = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useContext(AuthContext);
    


    const {data: register=[]}=useQuery({
        queryKey:['registration'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/registration');
            return res.data;
        }
    })

console.log(find)

    return (
        <div>
           {register.map(item=><ShowSubmit key={item._id} item={item}></ShowSubmit>)}
        </div>
    );
};

export default ContestSubmit;