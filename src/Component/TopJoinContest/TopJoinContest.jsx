import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import TopJoin from "./TopJoin";


const TopJoinContest = () => {
    const axiosPublic=UseAxiosPublic()
    const {data: top=[]}=useQuery({
        queryKey:['top'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/items/topItems');
            return res.data;
        }
    })
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold mb-4 underline">Popular Contest</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {top.map(item=><TopJoin key={item._id} item={item}></TopJoin>)}
        </div>
        </div>
    );
};

export default TopJoinContest;