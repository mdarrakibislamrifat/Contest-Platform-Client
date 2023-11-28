import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SingleSearch from "./SingleSearch";


const Banner = () => {
  const {user}=useContext(AuthContext);

  const axiosPublic = UseAxiosPublic();
 
  const { data: singleSearch = [] } = useQuery({
    queryKey: ["singleSearch"],
    queryFn: async () => {
      const res = await axiosPublic.get('/find-by-type');
      return res.data;
    }
  })
  const submit=e=>{
    e.preventDefault();
    const search=e.target.search.value;
    console.log(search)
}

    return (
       <div>
         <div className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg mt-4 py-12">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">Hey {user?.displayName} Find what you need</h1>
          <p className="text-lg lg:text-xl text-white mb-8">Discover amazing contest and more..</p>
          <form onSubmit={submit} className="max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
              <input name="search" type="text" placeholder="Search..." className="px-6 py-4 w-full outline-none" />
              <button type="submit" className="bg-indigo-600 text-white px-6 py-4 hover:bg-indigo-700 transition duration-300">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {singleSearch.map(item=><SingleSearch key={item._id} item={item}></SingleSearch>)}
      </div>
       </div>
    );
};

export default Banner;