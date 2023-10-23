import { useSelector, useDispatch } from "react-redux";

import "animate.css";
import 'react-toastify/dist/ReactToastify.css';
import "./Product.css";

import { FiTrash2 } from "react-icons/fi";
// import { toast } from 'react-toastify';


import { isInCart, quantityCount ,priceFormat} from "../helper/functions";

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
        <div className="product-item relative w-full h-15 md:h-[75px] my-4 p-2 border-[1px] md:border-[2px] rounded-[15px] bg-primary-orange animate__backInLeft">
            <div className="order-button flex-hz justify-between items-center ">
                <div className="flex-hz justify-around w-32">

                {quantityCount(state, productData.id) === 1 && <button className="text-white text-2xl" onClick={() => dispatch(removeItem(productData))}><FiTrash2 /></button>}
                {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch(decreaseItem(productData))}>-</button>}
                {quantityCount(state, productData.id) > 0 && <span>{quantityCount(state, productData.id)}</span>}
                {
                    isInCart(state, productData.id) ?
                        <button onClick={() => dispatch(increaseItem(productData))}>+</button> :
                        <button className="relative md:w-[172px] h-[22px] md:h-9 py-[2px] px-2 text-[10px] rounded-[15px] bg-white" onClick={() => dispatch(addItem(productData))}>
                                {priceFormat(productData.price)}T
                                ثبت سفارش
                        </button>

                }
                </div>




                <div className="text-[13px] font-bold text-right">
                    <h1 className="text-white text3xl md:text-xl">{productData.name}</h1>
                    <p className="text-[11px] md:text-base font-normal">{productData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
