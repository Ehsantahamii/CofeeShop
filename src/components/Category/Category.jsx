import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

import './Category.css'
import ColdDrink from '/images/ColdDrinks.svg?url'

const categoryItems = [
    {
        id: 1,
        vector: '/images/Coffe__category.svg',
        enTitle: 'Coffee',
        faTitle: 'قهوه',
        route: "قهوه"
    },
    {
        id: 2,
        vector: '/images/ColdDrinks.svg',
        enTitle: 'Cold Drinks',
        faTitle: 'نوشیدن‌های سرد',
        route: ""
    },
    {
        id: 3,
        vector: '/images/Shake.svg',
        enTitle: 'Shake',
        faTitle: 'شیک',
        route: ""
    },
    {
        id: 4,
        vector: '/images/WarmDrinks.svg',
        enTitle: 'Warm Drinks',
        faTitle: 'نوشیدنی‌های گرم',
        route: ""
    },
    {
        id: 5,
        vector: '/images/Hookah.svg',
        enTitle: 'Hookah',
        faTitle: 'قلیان',
        route: ""
    },
    {
        id: 6,
        vector: '/images/BreakFast.svg',
        enTitle: 'Break Fast',
        faTitle: 'صبحانه',
        route: ""
    },

]

const Category = () => {
    return (
        <ul className='category__container grid mx-auto my-[6vw] bg'>
            {
                categoryItems.map((items) => (

                    <Link to={items.enTitle}
                        key={items.id}
                    >

                        <li className='category__item overflow-hidden p-2 flex-vr animate__bounceIn '>
                            <div>
                                <img src={items.vector} alt={items.enTitle} title={items.faTitle} />
                            </div>
                            <h4 className='text-[12px] text-[#fff] font-bold'>{items.enTitle}</h4>
                            <h4 className='text-[10px] text-[#fff] font-light'>{items.faTitle}</h4>
                        </li>

                    </Link>
                ))
            }
        </ul>
    );
};

export default Category;