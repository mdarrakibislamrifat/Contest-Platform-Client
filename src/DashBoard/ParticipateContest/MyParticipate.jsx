import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";




const MyParticipate = ({item}) => {
    const axiosPublic=UseAxiosPublic();
   const {user}=useContext(AuthContext)
    const {data: newCart=[]}=useQuery({
        queryKey:['newCart'],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/register/${item.email}`);
            return res.data;
        }
    })
   
    return (
        <div>
            {user?.email===item?.email ? <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        
        <th>Contest Name</th>
        <th>User Name</th>
        <th>User Email</th>
        
      </tr>
    </thead>
    <tbody>
      
      <tr className="bg-base-200">
        
        <td>{item.contestName}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        
      </tr>
      
      
    </tbody>
  </table>
</div> : ''}
        </div>
    );
};

export default MyParticipate;