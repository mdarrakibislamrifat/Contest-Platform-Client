import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaFileExport } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddContest = () => {
    const {user}=useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = UseAxiosPublic();
  const onSubmit = async (data) => {
    // image upload to imagebb and then get an url
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server
      const contestItem = {
        name: data.name,
        type: data.type,
        price: parseFloat(data.price),
        money: parseFloat(data.money),
        task:data.task,
        date:data.date,
        description: data.description,
        image: res.data.data.display_url,
        email:user?.email
      };
      const contestRes = await axiosSecure.post("/contests", contestItem);
      
      reset();
      if (contestRes.data.insertedId) {
        
        Swal.fire({
          title: "Good job!",
          text: `${data.name} is added to contest`,
          icon: "success",
        });
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex gap-6">
    <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Contest Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder=" name"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Contest Type*</span>
              </label>
              <select
                defaultValue="default"
                {...register("type", { required: true })}
                className="select select-bordered w-full "
              >
                
                <option value="businessContest">Business Contest</option>
                <option value="medicalContest">Medical Contest</option>
                <option value="articleWriting">Article Writing</option>
                <option value="gamingContest">Gaming Contest</option>
                
              </select>
            </div>

    </div>
          

          <div className="flex gap-6">
            
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span>Contest Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number" min='0'
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span>Prize Money*</span>
              </label>
              <input
                {...register("money", { required: true })}
                type="number" min='0'
                placeholder="prize money"
                className="input input-bordered w-full "
              />
            </div>

          </div>

          <div className="flex gap-6">
            
            
            <div className="form-control w-full my-6">
              <label className="label">
                <span>Task Submission *</span>
              </label>
              <input
                {...register("task", { required: true })}
                type="text"
                placeholder="task"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span>Contest Deadline*</span>
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                placeholder="deadline"
                className="input input-bordered w-full "
              />
            </div>

          </div>

          
         

          <div className="form-control flex-[1]">
            <label className="label">
              <span className="label-text">Contest Description*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered h-24 "
              placeholder="description"
            ></textarea>
          </div>

          

          

          <div className="w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn mt-6">
            Add Contest <FaFileExport className="ml-2"></FaFileExport>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContest;
