import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import UserCard from "../UserCard/UserCard";


const Display = (props) => {

    return (
        <main>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 ">
            {props.data.map((item) => <ProductCard key={item.id} product={item}/> )}
            {/*{props.data.map((OneUserClick) => <UserCard key={OneUserClick.number} product={OneUserClick}/> )}*/}
        </section>
        </main>
    );
};

export default Display;