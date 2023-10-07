import React from 'react';

import Footer from '../Footer/Footer';

const Page404 = () => {
    return (
        <>
        <div className='w-full h-[90vh] flex-vr justify-center'>
           <h1 className='text-center text-white text-3xl'> No page found!</h1> 
        </div>
        <Footer/>
        </>
    );
};

export default Page404;