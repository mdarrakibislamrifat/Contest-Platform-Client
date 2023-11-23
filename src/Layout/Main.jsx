import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-6'>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;