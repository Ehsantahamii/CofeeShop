import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

import './Category.css'

const categoryItems = [
    {
        id: 1,
        vector: '/images/Coffee__category.png',
        enTitle: 'Coffee',
        faTitle: 'قهوه',
        route: "قهوه"
    },
    {
        id: 2,
        vector: '/images/ColdDrinks.png',
        enTitle: 'Cold Drinks',
        faTitle: 'نوشیدن‌های سرد',
        route: ""
    },
    {
        id: 3,
        vector: '/images/shake.png',
        enTitle: 'Shake',
        faTitle: 'شیک',
        route: ""
    },
    {
        id: 4,
        vector: '/images/WarmDrinks.png',
        enTitle: 'Warm Drinks',
        faTitle: 'نوشیدنی‌های گرم',
        route: ""
    },
    {
        id: 5,
        vector: '/images/Hookah.png',
        enTitle: 'Hookah',
        faTitle: 'قلیان',
        route: ""
    },
    {
        id: 6,
        vector: '/images/BreakFast.png',
        enTitle: 'Break Fast',
        faTitle: 'صبحانه',
        route: ""
    },

]

const Category = () => {

    
    return (
        <ul className='category__container grid mx-auto mb-[30vw] mt-[10vw] md:overflow-y-hidden'>
            {
                categoryItems.map((items) => (


                    <Link to='/menu/coffee'>
                        <li key={items.id} className='category__item w-[93px] md:w-[180px] h-[93px] md:h-[170px] overflow-hidden p-2  rounded-[15px] md:rounded-[28px] flex-vr'>
                            <div className='w-[20px] h-[37px] md:w-[76px] md:h-[70px]'>
                                <img className='w-full h-full' src={items.vector} alt={items.enTitle} title={items.faTitle} />
                            </div>
                            <h4 className='text-[12px] md:text-[18.5px] text-[#fff] font-bold'>{items.enTitle}</h4>
                            <h4 className='text-[10px] md:text-[24.5px] text-[#fff] font-light'>{items.faTitle}</h4>
                        </li>
                    </Link>

                ))
            }
        </ul>
    );
};

export default Category;