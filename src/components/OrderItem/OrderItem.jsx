import React from 'react';
import { useDispatch } from 'react-redux';

const OrderItem = (props) => {

    const dispatch = useDispatch();
    const {name , price , quantity} =props.data;
    console.log(typeof price);

    return (
        <div className='orders-container w-full h-2/3 py-[30px] text-white text-[24px] font-bold  flex-hz'>
            <aside className='w-1/2 h-full  border-r-2 flex-vr'>
                <h3>{price}</h3>
            </aside>
            <aside className='w-1/2 h-full  border-l-2 flex-vr'>
                <div className='flex-hz justify-between gap-5'>
                    <span>{quantity}X</span>
                    <h3>{name}</h3>
                </div>

            </aside>
        </div>
    );
};

export default OrderItem;