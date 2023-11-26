import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaAccessibleIcon, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageContest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contest = [], refetch } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });

  const handleDeleteContest = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contests/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Contest is delete",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeConfirmed = (item) => {
    axiosSecure.patch(`/contests/admin/${item._id}`).then((res) => {
      
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${item.name} is confirmed Now!`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Total contest : {contest.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contest.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td> $ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteContest(item)}
                    className="btn btn-ghost btn-xs "
                  >
                    <FaTrash className="text-red-500 text-xl"></FaTrash>
                  </button>
                </th>
                <td>
                    <Link to={`/dashboard/update/${item._id}`}><button>
                      <FaEdit className="text-xl"></FaEdit>
                    </button></Link>
                  </td>
                <th>
                  {item?.status ? <p className="text-green-500 ">Confirmed</p> :<button
                    onClick={() => handleMakeConfirmed(item)}
                    className="btn btn-ghost btn-sm"
                  >
                    Confirm It
                  </button>}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContest;
