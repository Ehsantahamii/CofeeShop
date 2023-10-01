import React from 'react';
import { Link } from 'react-router-dom';

import './Category.css'

const categoryItems = [
    {
        id: 1,
        vector: '/images/Coffe__category.svg',
        enTitle: 'Coffee',
        faTitle: 'قهوه',
        route: ""
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
        vector: '/images/Shake.svg',
        enTitle: 'Warm Drinks',
        faTitle: 'نوشیدنی‌های گرم',
        route: ""
    },
    {
        id: 5,
        vector: '/images/Shake.svg',
        enTitle: 'Hookah',
        faTitle: 'قلیان',
        route: ""
    },
    {
        id: 6,
        vector: '/images/Shake.svg',
        enTitle: 'Break Fast',
        faTitle: 'صبحانه',
        route: ""
    },

]

const Category = () => {
    return (
        <ul className='category__container grid'>
            {
                categoryItems.map((items) => (

                    <Link to={items.faTitle} key={items.id}>
                    
                        <li className='category__item p-2 overflow-hidden flex-vr '>
                            <div>
                                <img src={items.vector} alt={items.enTitle} />
                            </div>
                            <h4 className='text-[12px] text-[#333] font-bold'>{items.enTitle}</h4>
                            <h4 className='text-[10px] text-[#fff] font-light'>{items.faTitle}</h4>
                        </li>
                        
                    </Link>
                ))
            }
        </ul>
    );
};

export default Category;