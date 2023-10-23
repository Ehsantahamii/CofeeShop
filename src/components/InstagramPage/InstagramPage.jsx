import React from 'react';

import './InstagramPage.css'

    const instaPosts = [
        {
            "id": 1,
            "url":"/images/post1.png",
            "alt":"instagram post"

        },
        {
            "id": 2,
            "url":"/images/post2.png",
            "alt":"instagram post"

        },
        {
            "id": 3,
            "url":"/images/post3.png",
            "alt":"instagram post"

        },
        {
            "id": 4,
            "url":"/images/post4.png",
            "alt":"instagram post"

        },
        {
            "id": 5,
            "url":"/images/post5.png",
            "alt":"instagram post"

        },
        {
            "id": 6,
            "url":"/images/post6.png",
            "alt":"instagram post"

        },

        
    ]

const InstagramPage = () => {
    return (
        <div className='instagram-page-view flex-vr items-end'>
        <div className='flex-hz justify-start'>
            <h4 className='mx-2'><a href="https://www.instagram.com/">coffee shop</a></h4>
            <svg className='md:w-[70px] md:h-[70px]' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.5" cy="18.5" r="18.5" fill="#EB6A49" />
                <path d="M18 9H13.5556C10.4873 9 8 11.4873 8 14.5556V23.4444C8 26.5127 10.4873 29 13.5556 29H22.4444C25.5127 29 28 26.5127 28 23.4444V14.5556C28 11.4873 25.5127 9 22.4444 9H18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 14.5555C20.4546 14.5555 22.4444 16.5454 22.4444 19C22.4444 21.4546 20.4546 23.4444 18 23.4444C15.5454 23.4444 13.5555 21.4545 13.5555 19C13.5555 16.5454 15.5454 14.5555 18 14.5555Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.5556 15.1111C24.4761 15.1111 25.2222 14.3649 25.2222 13.4444C25.2222 12.524 24.4761 11.7778 23.5556 11.7778C22.6351 11.7778 21.8889 12.524 21.8889 13.4444C21.8889 14.3649 22.6351 15.1111 23.5556 15.1111Z" fill="white" />
            </svg>
        </div>
        <div className='posts-container mt-14 mb-20 flex-vr'>
            {
                instaPosts.map(post =>(
                    <div className='post md:min-w-[100px]'>
                        <img className='w-full h-full' src={post.url} alt={post.alt} />
                    </div>
                ))
            }
        </div>
    </div>
);
};

export default InstagramPage;