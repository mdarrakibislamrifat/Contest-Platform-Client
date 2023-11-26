
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-6'>
            <Navbar></Navbar>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;