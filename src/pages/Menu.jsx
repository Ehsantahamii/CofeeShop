import React from 'react';

import Category from '../components/Category/Category';

import Logo from '/images/logo.svg';

const Menu = () => {
    return (
        <section id='menu' className='menu__container w-full max-h-[90vh] text-center g-[15vw]  flex-vr'>
            <div className='flex-vr'>
                <div className='mx-auto mt-14 mb-8' >
                    <img src={Logo} alt="logo" className='w-[150px] h-[150px]' />
                </div>
                <div>
                    <h2 className='text-4xl font-bold text-white'>menu</h2>
                    <h3 className='text-4xl font-medium text-[#D8602B]'>منو</h3>
                </div>
            </div>

            <Category />

        </section>
    );
};

export default Menu;