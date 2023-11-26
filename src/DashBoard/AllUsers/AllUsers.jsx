import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure=useAxiosSecure()
    const {data: users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteUser=user=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then((res)=>{
                    if(res.data.deletedCount>0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "User is delete",
                            icon: "success"
                          });
                    }
                })
              
            }
          });
    }

const handleMakeAdmin=user=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                title: `${user.name} is an admin Now!`,
                
                icon: "success"
              });
        }
    })
}

const handleMakeCreator=user=>{
  axiosSecure.patch(`/users/creator/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                title: `${user.name} is an creator Now!`,
                
                icon: "success"
              });
        }
    })

}


const handleMakeClient=user=>{
  axiosSecure.patch(`/users/client/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                title: `${user.name} is an user Now!`,
                
                icon: "success"
              });
        }
    })

}





    return (
        <div>
        <div className="flex justify-evenly my-4 ">
          <h2 className="text-3xl text-blue-500 font-semibold">All Users</h2>
          <h2 className="text-3xl text-blue-500 font-semibold">Total users : {users.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>

                      {user.role==='admin' ? <button onClick={()=>handleMakeCreator(user)}
                        
                        className="btn btn-sm text-white bg-indigo-500"
                      >
                        <FaUser className="text-white"></FaUser> Admin
                      </button> : user.role==='creator'? <button onClick={()=>handleMakeClient(user)}
                        
                        className="btn btn-sm text-white bg-indigo-500"
                      >
                        <FaUser className="text-white"></FaUser> Creator
                      </button> : user.role==='client' ? <button onClick={()=>handleMakeAdmin(user)}
                        
                        className="btn btn-sm text-white bg-indigo-500"
                      >
                        <FaUser className="text-white"></FaUser> Client
                      </button>: ''}
                      
                    </td>
                    
                    
                    <button onClick={() => handleDeleteUser(user)}
                      
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllUsers;