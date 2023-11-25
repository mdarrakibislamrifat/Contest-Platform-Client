import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaFileExport } from "react-icons/fa";
import Swal from "sweetalert2";


const UpdateContest = () => {
    const items=useLoaderData()
    const {name,_id,task,type,price,money,date,description}=items || {}
    const { register, handleSubmit,reset } = useForm();
  const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
  const axiosSecure=useAxiosSecure()
    const axiosPublic=UseAxiosPublic();

    const onSubmit =async (data) => {
        // image upload to imagebb and then get an url
        const imgFile={image:data.image[0]}
        const res=await axiosPublic.post(image_hosting_api,imgFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        if(res.data.success){
            
            const contestItem={
                name:data.name,
                task:data.task,
                price:parseFloat(data.price),
                money:parseFloat(data.money),
                description:data.description,
                type:data.type,
                date:data.date,
                image:res.data.data.display_url
            }
            const contestRes=await axiosSecure.patch(`/contests/new/${_id}`,contestItem)
            
            if(contestRes.data.modifiedCount>0){
                reset()
                // dfdf
                Swal.fire({
                    title: "Good job!",
                    text: `${data.name} is updated`,
                    icon: "success"
                  });
            }
        }
        
    
      };
     

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex gap-6">
    <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Contest Name*</span>
            </label>
            <input defaultValue={name}
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
                defaultValue={type}
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
              <input defaultValue={price}
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
              <input defaultValue={money}
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
              <input defaultValue={task}
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
              <input defaultValue={date}
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
            <textarea defaultValue={description}
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
            Update Contest 
          </button>
        </form>
        </div>
    );
};

export default UpdateContest;