import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import MyParticipate from "./MyParticipate";


const ParticipateContest = () => {
    const axiosPublic=UseAxiosPublic()
    const {data: myCart=[]}=useQuery({
        queryKey:['myCart'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/registration');
            return res.data;
        }
    })

    return (
        <div>
            {myCart.map(item=><MyParticipate key={item._id
            } item={item}></MyParticipate>)}
        </div>
    );
};

export default ParticipateContest;