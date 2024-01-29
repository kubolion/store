import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className=" p-4 border rounded-3xl shadow  flex justify-between hover:shadow-2xl " >
            <div className="w-[200px] flex flex-col gap-1   ">
            <p>{product.id}</p>
            <p>Category: {product.category}</p>
            <p>description: {product.description}</p>
            <p>price: {product.price}</p>
            <p>rating count: {product.rating.count}</p>
            <p>rating rate:{product.rating.rate}</p>
            <p>title: {product.title}</p>
            </div>
            <div  className=" flex items-center ">
            <img  className=" h-[200px] " src={product.image} alt={product.title }/>
            </div>

        </div>
    );
};

export default ProductCard;