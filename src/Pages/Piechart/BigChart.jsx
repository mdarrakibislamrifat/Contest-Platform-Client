
import { PieChart } from '@mui/x-charts/PieChart';
import UseAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const BigChart = () => {
    const axiosPublic=UseAxiosPublic()
    const {data: contestss=[]}=useQuery({
        queryKey:['contestss'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/contests');
            return res.data;
        }
    })

    const {data: register=[]}=useQuery({
        queryKey:['register'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/registration');
            return res.data;
        }
    })
    const item=contestss.length;
    const item2=register.length;
    

    return (
        <div className='flex justify-center'>
            <PieChart
          series={[
            {
              data: [
                { id: 0, value: item, label: 'Total Contest',color: 'orange' },
                { id: 1, value: item2, label: 'Joined People' },
                
              ],
            },
          ]}
          width={400}
          height={200}
        />
        </div>
      );
};

export default BigChart;