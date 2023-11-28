import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleWinner from "./SingleWinner";


const WinningContest = () => {
    const axiosPublic=UseAxiosPublic();

    const {data: winnings=[]}=useQuery({
        queryKey:['winnings'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/registration');
            return res.data;
        }
    })
    return (
        <div>
            {winnings?.map(item=><SingleWinner key={item._id} item={item} ></SingleWinner>)}
        </div>
    );
};

export default WinningContest;