import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import Lottie from "lottie-react";
import animationNew from "../../assets/Animation - 1700488396904.json";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [registerError, SetRegisterError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const axiosPublic=UseAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const role=form.role.value;

    setError("");
    SetRegisterError("");
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{6,}).*$/.test(password)
    ) {
      setError(
        "Please provide more than 6 characters,one capital letter and a special character"
      );
    } else {
      createUser(email, password, photo, name,role)
        .then((result) => {
          updateProfile(result.user, {
            displayName: `${name}`,
            photoURL: `${photo}`,
          })
          .then(()=>{
            const userInfo={
              name: name,
              email:email,
              photo:photo,
              role:role
            }
            axiosPublic.post('/users',userInfo)
            .then(result=>{
              if (result.data?.insertedId) {
                Swal.fire({
                    title: "Successfully Register!",
                    icon: "success"
                  });
                navigate("/login");
              }
              else{
                console.log('error')
                navigate(location?.state ? location.state : "/")
              }

            })
            
          })
          
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const handleGoogle = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = { email: result.user.email };
        const userInfo={
          email:result.user?.email,
          name:result.user?.displayName,
          photo:result.user?.photoURL
        }
        axiosPublic.post('/users',userInfo)
      .then(res=>{
        if (res.data?.insertedId) {
          Swal.fire({
              title: "Successfully Login!",
              icon: "success"
            });
            navigate(location?.state ? location.state : "/")
        }
        else{
          console.log('error')
          navigate(location?.state ? location.state : "/")
        }
      })
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  

  return (
    <div className="hero min-h-screen py-10">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-blue-500">SignUp now!</h1>
          <p className="py-6">
            <Lottie animationData={animationNew}></Lottie>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Select a Role</span>
          </label>
          <select
            name="role"
  
            className="select select-bordered w-full"
            required
          >
            <option value="client">Client</option>
            <option value="creator">Creator</option>
          </select>
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-400">{error}</p>
            </div>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Already you have an account? Please
              <span className="ml-2">
                <Link
                  className="font-semibold text-blue-500 transition-colors hover:text-blue-700"
                  to="/login"
                >
                  SignIn
                </Link>
              </span>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <div className="flex items-center justify-center text-2xl p-2  mb-6">
            <button onClick={handleGoogle} className="flex items-center">
              <FaGoogle className="mr-2 "></FaGoogle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
