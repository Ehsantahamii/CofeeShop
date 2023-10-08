import React, { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productsAction';

import Product from '../components/Product/Product';

const ProductCoffee = () => {
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)
    console.log(productsState.Products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])



    return (
        <div className='w-full h-[100vh]'>
            <h1 className='text-white text-center'>قهوه</h1>

            {
                productsState.loading ?
                    <h2>Loading ...</h2> :
                    productsState.error ?
                        <p>Somethin went wrong</p> :
                        productsState.products.data.forEach(product => <Product
                            key={product.id}
                            productData={product}
                        />)
            }
        </div>
    );
};

export default ProductCoffee;