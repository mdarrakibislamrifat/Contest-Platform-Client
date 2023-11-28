
import { Helmet } from 'react-helmet-async';
import Banner from '../../Component/Banner/Banner';
import UpComming from '../../Component/UpComming/UpComming';
import WhyChooseUs from '../../Component/WhyChooseUs/WhyChooseUs';
import TopJoinContest from '../../Component/TopJoinContest/TopJoinContest';
import WinnerPerson from '../../Component/WinnerPerson/WinnerPerson';



const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner></Banner>
            <div className='mt-4'>
                <TopJoinContest></TopJoinContest>
            </div>
            <div className='mt-4'>
                <WinnerPerson></WinnerPerson>
            </div>

            <div className='mt-4'>
                <UpComming></UpComming>

            </div>
            <div className='mt-4'>
                <WhyChooseUs></WhyChooseUs>
            </div>
            
            


        </div>
    );
};

export default Home;