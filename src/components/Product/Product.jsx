import React from 'react';

const Product = ({productData}) => {
    console.log(productData);
    return (
        <div className='w-[500px] h-[200px]'>
            <h1 className='text-white text3xl'>{productData.name}</h1>
            <h2 className='text-white text3xl'>{productData.price}</h2> 
            <img src={"https://aminsheibani.ir/api/upload/files/products/" +productData.primary_image} alt="" />
        </div>
    );
};

export default Product;