
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";


const ShowSubmit = ({item}) => {
    const {user}=useContext(AuthContext);
   
    const axiosPublic=UseAxiosPublic()
    const handleMakeWinner=item=>{
        if(item.winner === 'winner'){
          Swal.fire({
            title: 'Already have a winner',
            
            icon: "error"
          });
        }else{
          axiosPublic.patch(`/registration/v1/v2/${item._id}`)
          .then(res=>{
              console.log(res.data)
              if(res.data.modifiedCount>0){
                  Swal.fire({
                      title: `${item.name} is an Winner `,
                      
                      icon: "success"
                    });
              }
          })
        }
       
    }
    
    return (
        <div className="overflow-x-auto">
        
    
          {user.email === item.creatorEmail ? <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        
        <th>Contest Name</th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="bg-base-200">
        
        <td>{item.contestName}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.winner==='winner' ? <p className="text-red-500 font-semibold">Winner</p> : <button onClick={()=>handleMakeWinner(item)} className="btn btn-xs btn-primary">Make Winner</button>}</td>
      </tr>
      
      
    </tbody>
  </table>
</div>: ''}
          
       
        </div>
    );
};

export default ShowSubmit;