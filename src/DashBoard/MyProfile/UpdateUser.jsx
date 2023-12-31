import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaFileExport } from "react-icons/fa";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateUser = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const axiosPublic = UseAxiosPublic();

    const onSubmit = async (data) => {
        try {
            const imgFile = new FormData();
            imgFile.append("image", data.image[0]);

            const res = await axiosPublic.post(image_hosting_api, imgFile);
            if (res.data.data && res.data.data.url) {
                const { url } = res.data.data;

                await updateProfile(user, {
                    displayName: data.name,
                    photoURL: url,
                });

                Swal.fire({
                    title: "Successfully Updated Profile!",
                    icon: "success"
                  });

                
            }
        } catch (error) {
            
            Swal.fire({
                title: "Successfully Updated Profile!",
                icon: "error"
              });
        }
    };

    return (
        <div>
            <Helmet><title>Update Your Profile</title></Helmet>
            <div className="mx-auto w-32 h-32 relative  border-4 border-black rounded-lg overflow-hidden mt-4">
                <img className="object-cover w-full object-center h-32" src={user?.photoURL} alt="User" />
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">{user?.displayName}</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-around">
                <div className="w-full">
                    <input
                        {...register("image", { required: true })}
                        type="file"
                        className="file-input w-full max-w-xs"
                    />
                </div>
                <div className=" mt-2 border-4 ">
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Name"
                        className="file-input w-full max-w-xs"
                    />
                </div>
                </div>
                <button className="btn mt-6">
                    Update <FaFileExport className="ml-2" />
                </button>
            </form>
        </div>
    );
};

export default UpdateUser;
