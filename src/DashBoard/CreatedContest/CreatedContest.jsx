import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CreatedContest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: contest = [],refetch } = useQuery({
    queryKey: ["contest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${user?.email}`);
      return res.data;
    },
  });


  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/contests/${item._id}`);
       
        if (res.data.deletedCount > 0) {
            
            refetch()
          Swal.fire({
            title: "Deleted!",
            text:  `${item.name} has been deleted.`,
            icon: "success",
          });
          
        }
        
      }
    });
  };




  return (
    <div>
      <h2 className="text-3xl text-blue-500 text-center font-semibold">
        My Created Contest
      </h2>

      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Prize Money</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Go To</th>
              </tr>
            </thead>
            <tbody>
              {contest.map((item) => (
                <tr key={user._id}>
                  <td><img className="w-20 rounded-lg" src={item.image} alt="" /></td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>$ {item.price}</td>
                  <td>$ {item.money}</td>
                  <td>{item.status ==='confirmed' ? <p className="text-green-500 font-medium">Accepted</p> : 'Pending'}</td>
                  <td>
                    {item.status==='confirmed' ? <p>Can't Update</p> :<Link to={`/dashboard/update/${item._id}`}><button>
                      <FaEdit className="text-xl"></FaEdit>
                    </button></Link>}
                  </td>
                  <td>
                    {item.status==='confirmed' ? <p>Can't Delete</p> :<button onClick={()=>handleDeleteItem(item)}>
                      <FaTrash className="text-red-500 text-xl"></FaTrash>
                    </button>}
                  </td>
                  <td><Link to='/dashboard/contestsubmit'><button className="btn btn-xs">Submission</button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatedContest;
