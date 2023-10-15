import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Logo
import Logo from '/images/logo.svg';

import OrderItem from '../components/OrderItem/OrderItem';

//Formik
import { Formik, Field, Form } from 'formik';


// Actions
// import { clear, checkout } from "../redux/products/productsAction";

const OrderBox = () => {

    const state = useSelector(state => state.cartState);
    console.log(state);
    console.log(state.selectedItems);
    const dispatch = useDispatch();

    return (
        <section className='order-box w-[90%] h-full m-auto flex-vr'>
            <div className='text-white text-center my-9 flex-hz justify-between items-end'>
                <div className='page-name'>
                    <h1 className='text-4xl font-bold text-white'>
                        Orders
                    </h1>
                </div>
                <div className='logo'>
                    <img className='w-20 h-20' src={Logo} alt="logo" title='logo' />
                </div>
            </div>
            <div className='order-items-container'>
                {
                    state.selectedItems.map(item => <OrderItem key={item.id} data={item} />)
                }
            </div>
            <div className='order-sum fixed bottom-16'>
                <button className='text-white text-xl w-64 h-14 bg-primary-orange rounded-2xl'>{state.total}</button>
            </div>

        </section>
    );
};

export default OrderBox;