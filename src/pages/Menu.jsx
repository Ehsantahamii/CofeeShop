import React from 'react';
import 'animate.css';
import Category from '../components/Category/Category';

import Logo from '/images/logo.svg';

const Menu = () => {
    return (
        <section id='menu' className='menu__container w-full sm:h-auto text-center g-[15vw] flex-vr'>
            <div className='flex-vr'>
                <div className='mx-auto mt-[20px] mb-[34px]' >
                    <img src={Logo} alt="logo" className='w-[150px] h-[150px] md:w-[200px] md:h-[200px]' />
                </div>
                <div>
                    <h2 className='text-4xl md:text-5xl  md:mb-[15px] font-bold text-white'>Menu</h2>
                    <h3 className='text-4xl md:text-[38px] md:mb-[59px] font-medium text-[#D8602B]'>منو</h3>
                </div>
            </div>

            <Category />

        </section>
    );
};

export default Menu;