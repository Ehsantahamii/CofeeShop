import React from 'react';

import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Page404 = () => {
    return (
        <>
        <div className='w-full h-[90vh] flex-vr justify-center gap-3'>
           <h1 className='text-center text-white text-3xl'> No page found!</h1> 
           <Link to="/منو" className='text-white'>
           Go Menu
           </Link>
        </div>
        <Footer/>
        </>
    );
};

export default Page404;