import React from 'react';
import { Link } from 'react-router-dom';

import home from '/images/home.png?url';
import coffee from '/images/coffee.svg?url';
import sefaresh from '/images/sefaresh.png?url';
import about from '/images/about.png?url';

import './Footer.css'

const Footer = () => {
    return (
        <footer className='w-full h-10 fixed bottom-0 bg-[#EB6A49] flex items-center'>
            <ul className='icons-box w-full flex items-center justify-evenly'>
                <Link>
                <li className="icon cursor-pointer"><img src={home} alt="home-icon" /></li>
                </Link>
                <Link to={'/منو'}>
                <li className="icon cursor-pointer"><img src={coffee} alt="coffee-icon" /></li>
                </Link>
                <li className="icon cursor-pointer"><img src={sefaresh} alt="sefaresh-icon" /></li>
                <li className="icon cursor-pointer"><img src={about} alt="about-icon" /></li>
            </ul>
        </footer>
    );
};

export default Footer