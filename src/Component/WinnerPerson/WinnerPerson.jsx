import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleWinner from "./SingleWinner";


const WinnerPerson = () => {

    const axiosPublic=UseAxiosPublic()
    const {data: winnerPerson=[]}=useQuery({
        queryKey:['winnerPerson'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/registration');
            return res.data;
        }
    })

    return (
        <>
            <h1 className="text-center text-3xl font-semibold underline mb-4">Winner Person</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {winnerPerson.map(item=><SingleWinner key={item._id} item={item}></SingleWinner>)}
            </div>
        </>
    );
};

export default WinnerPerson;