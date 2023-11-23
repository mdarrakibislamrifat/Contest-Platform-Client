import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProviders";
import animationNew from '../../assets/Animation - 1700488396904.json'
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";


const SignIn = () => {
  const { signIn , googleSignIn} = useContext(AuthContext);
  const [error, setError] = useState("");
  const provider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate= useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const toastId=toast.loading('Logging in..')
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then((result) => {
        const loggeduser=result.user;
        const user={email};
        e.target.reset();
        toast.success('Logged in...',{id:toastId});
        
        
        // get access token

        // axios.post('https://restaurant-management-server-orcin.vercel.app/jwt',user,{withCredentials:true})
        // .then(res=>{
        //   console.log(res.data)
        //   if(res.data.success){
        //     localStorage.setItem('token',res.data.token)
        //     navigate(location?.state ? location.state : "/");
        //   }
        // })


      })
      .catch((error) => {
        setError(error.message);
      });
  };
  

  const handleGoogle = () => {
    googleSignIn(provider)
    .then((result) => {
      const user={email:result.user.email}
      console.log(user);
    //   axios.post('https://restaurant-management-server-orcin.vercel.app/jwt',user,{withCredentials:true})
    //   .then(res=>{
        
    //     if(res.data.success){
    //     //   localStorage.setItem('token',res.data.token)
    //       navigate(location?.state ? location.state : "/");
    //     }
    //   })


    })
    .catch((error) => {
      setError(error.message);
    });
  };
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
  return (

    <div className="hero min-h-screen py-10">
        <Helmet>
            <title>LogIn</title>
        </Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        <Lottie animationData={animationNew}></Lottie>
        </p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleLogin} className="card-body">
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
            </div>
            <p className="text-red-400">{error}</p>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Are you new here? Please
              <span className="ml-2"><Link
                className="font-semibold text-amber-500 transition-colors hover:text-blue-700"
                to="/singup"
              >
                SignUp
              </Link></span>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              
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

export default SignIn;