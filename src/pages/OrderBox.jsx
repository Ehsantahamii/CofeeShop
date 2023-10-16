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
    console.log(typeof state.selectedItems.total);
    const dispatch = useDispatch();

    return (
        <section className='order-box w-[90%] h-full m-auto flex-vr'>
            <div className='w-full text-white text-center my-9 flex-hz justify-between items-end'>
                <div className='page-name'>
                    <h1 className='text-4xl font-bold text-white'>
                        Orders
                    </h1>
                </div>
                <div className='logo'>
                    <img className='w-20 h-20' src={Logo} alt="logo" title='logo' />
                </div>
            </div>
            <div className='order-items-container w-full'>
                {
                    state.selectedItems.map(item => <OrderItem key={item.id} data={item} />)
                }
            </div>
            <div className='order-sum fixed bottom-16 animate__bounceInUp'>
                <button className='text-white text-sm font-bold w-64 h-12 bg-primary-orange rounded-2xl flex-hz justify-evenly items-center'>

                    <svg className='max-w-[32px] max-h-[30px]'  xmlns="http://www.w3.org/2000/svg" width="61" height="59" viewBox="0 0 61 59" fill="none">
                        <path d="M19.5755 35.4957V45.4888M30.4721 35.4957V45.4888M41.3687 35.4957V45.4888M53.8343 25.5026L7.10987 25.5026C6.48652 25.4977 5.86929 25.6156 5.29983 25.8481C4.73037 26.0807 4.22193 26.4225 3.80882 26.8506C3.3957 27.2788 3.08752 27.7832 2.90508 28.3298C2.72264 28.8765 2.67018 29.4526 2.75124 30.0195L5.93304 52.0043C6.07135 52.972 6.59094 53.8599 7.39385 54.5005C8.19675 55.1411 9.22747 55.4901 10.2917 55.4819H50.5654C51.6295 55.4901 52.6603 55.1411 53.4632 54.5005C54.2661 53.8599 54.7857 52.972 54.924 52.0043L58.1058 30.0195C58.1859 29.4593 58.1356 28.8899 57.9583 28.3489C57.781 27.8079 57.4806 27.3074 57.077 26.8806C56.6734 26.4538 56.1757 26.1103 55.6167 25.8728C55.0578 25.6353 54.4503 25.5091 53.8343 25.5026Z" stroke="#333333" stroke-width="5.19643" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M41.2816 7.67529C43.8925 8.08896 46.2847 9.27334 48.0942 11.0483C49.9038 12.8233 51.0317 15.0917 51.3064 17.5085L52.2653 25.503M8.67908 25.503L9.63797 17.5085C9.93053 15.106 11.0664 12.8557 12.8745 11.0966C14.6826 9.33755 17.0649 8.16487 19.6628 7.75524" stroke="#333333" stroke-width="5.19643" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M41.3686 8.51437C41.3686 9.17052 41.2276 9.82025 40.9538 10.4265C40.68 11.0327 40.2787 11.5835 39.7728 12.0475C39.2669 12.5114 38.6663 12.8795 38.0052 13.1306C37.3442 13.3817 36.6358 13.5109 35.9203 13.5109L25.0237 13.5109C23.5787 13.5109 22.193 12.9845 21.1712 12.0475C20.1495 11.1104 19.5754 9.83953 19.5754 8.51437C19.5754 7.1892 20.1495 5.91831 21.1712 4.98128C22.193 4.04424 23.5787 3.51782 25.0237 3.51782L35.9203 3.51782C37.3653 3.51782 38.751 4.04424 39.7728 4.98128C40.7945 5.91831 41.3686 7.1892 41.3686 8.51437Z" stroke="#333333" stroke-width="5.19643" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    
                    <span>{state.total} </span>
                    <span>نهایی کردن سفارش</span>
                    
                    </button>
            </div>

        </section>
    );
};

export default OrderBox;