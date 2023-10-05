import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import home from '/images/home.png?url';
import coffee from '/images/coffee.svg?url';
import sefaresh from '/images/sefaresh.png?url';
import about from '/images/about.png?url';

import './Footer.css'

const Footer = () => {
    return (
        <footer className='w-full h-10 fixed bottom-0 bg-[#EB6A49] flex items-center'>
            <ul className='icons-box w-full  flex items-center justify-evenly'>
                <NavLink
                    to={"/"}
                    className="category__item"
                >
                    <li className="icon cursor-pointer">

                        {/* <img src={home} alt="home-icon" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.408 0.164212C10.2897 0.0577932 10.144 0 9.994 0C9.844 0 9.6983 0.0577932 9.58 0.164212L0.473229 8.35784C0.202367 8.60154 0.15388 9.00817 0.359845 9.30873C0.608144 9.67107 1.11868 9.73195 1.44521 9.43816L2 8.93901V18.4615C2.0007 18.8693 2.14141 19.2601 2.3913 19.5485C2.6412 19.8368 2.97993 19.9992 3.33333 20H16.6667C17.0201 19.9992 17.3588 19.8368 17.6087 19.5485C17.8586 19.2601 17.9993 18.8693 18 18.4615V8.94593L18.5548 9.44513C18.8814 9.7389 19.3918 9.67803 19.6401 9.31572C19.8461 9.01514 19.7976 8.60847 19.5266 8.36481L10.408 0.164212ZM11.3333 17.4615C11.3333 18.0138 10.8856 18.4615 10.3333 18.4615H9.66667C9.11438 18.4615 8.66667 18.0138 8.66667 17.4615V13.3075C8.66667 12.7553 9.11438 12.3075 9.66667 12.3075H10.3333C10.8856 12.3075 11.3333 12.7553 11.3333 13.3075V17.4615ZM13.6667 18.4615C13.1144 18.4615 12.6667 18.0138 12.6667 17.4615V12.3075C12.6663 11.8996 12.5257 11.5085 12.2758 11.2201C12.0258 10.9317 11.6868 10.7695 11.3333 10.769H8.66667C8.31315 10.7695 7.97422 10.9317 7.72425 11.2201C7.47428 11.5085 7.33369 11.8996 7.33333 12.3075V17.4615C7.33333 18.0138 6.88562 18.4615 6.33333 18.4615H4.33333C3.78105 18.4615 3.33333 18.0138 3.33333 17.4615V8.63123C3.33333 8.06382 3.57435 7.52311 3.99634 7.1438L8.66215 2.94987C9.42283 2.26611 10.5768 2.26648 11.3371 2.95072L16.0046 7.15158C16.426 7.53087 16.6667 8.07119 16.6667 8.63816V17.4615C16.6667 18.0138 16.219 18.4615 15.6667 18.4615H13.6667Z" fill="#333333" />
                        </svg>



                    </li>

                </NavLink>
                <NavLink
                    to={'/منو'}
                    className="category__item"

                >
                    <li className="icon cursor-pointer"><img src={coffee} alt="coffee-icon" /></li>
                </NavLink>
                <NavLink
                    to={'/سفارشات'}
                    className="category__item"
                >
                    <li className="icon cursor-pointer"><img src={sefaresh} alt="sefaresh-icon" /></li>
                </NavLink>
                <NavLink
                    to={'/درباره ما'}
                    className="category__item"
                >

                    <li className="icon cursor-pointer"><img src={about} alt="about-icon" /></li>
                </NavLink>
            </ul>
        </footer>
    );
};

export default Footer