import React from 'react';

import Category from '../components/Category/Category';

import Logo from '/images/logo.svg';

const Menu = () => {
    return (
        <section id='menu' className='menu__container text-center flex-vr'>
            <div >
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <h2 className='text-4xl font-bold text-white'>menu</h2>
                <h3 className='text-4xl font-medium text-[#D8602B]'>منو</h3>
            </div>

            <Category/>

        </section>
    );
};

export default Menu;