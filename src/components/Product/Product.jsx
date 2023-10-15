import { useSelector, useDispatch } from "react-redux";

import "animate.css";
import 'react-toastify/dist/ReactToastify.css';
import "./Product.css";

import { FiTrash2 } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';


import { isInCart, quantityCount } from "../helper/functions";

// Actions
import {
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
} from "../../redux/cart/cartAction";

const Product = ({ productData }) => {
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch();

    return (
        <div className="product-item relative w-full h-15 my-4 p-2 border-[1px] rounded-[15px] bg-primary-orange animate__backInLeft">
            <div className="order-button flex-hz justify-between items-center">

                {quantityCount(state, productData.id) === 1 && <button className="text-white text-2xl" onClick={() => dispatch(removeItem(productData))}><FiTrash2 /></button>}
                {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch(decreaseItem(productData))}>-</button>}
                {quantityCount(state, productData.id) > 0 && <span>{quantityCount(state, productData.id)}</span>}
                {
                    isInCart(state, productData.id) ?
                        <button onClick={() => dispatch(increaseItem(productData))}>+</button> :
                        <button className="relative" onClick={() => dispatch(addItem(productData))}>ثبت سفارش</button>
                        
                }



                <div className="text-[13px] font-bold text-right">
                    <h1 className="text-white text3xl">{productData.name}</h1>
                    <p className="text-[11px] font-normal">{productData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
