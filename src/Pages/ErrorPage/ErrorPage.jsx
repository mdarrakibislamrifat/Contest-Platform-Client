import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';
import animate from '../../assets/sssssss.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div >
            <Helmet>
                <title>Error Page</title>
            </Helmet>

            <div>
            <Lottie animationData={animate}></Lottie>
            </div>
            <div className='flex justify-center'>
                <Link to='/'><button className='btn btn-primary'>Go back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;