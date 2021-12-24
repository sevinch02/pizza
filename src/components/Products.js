import React from 'react';
import {Pizzalist} from './Pizzalist';



const Products = ({ products, addToCart, sneak }) => {
    return ( 
        <> 
         <div className='products'>
            <h3 className='themeText'>Пицца home </h3>
            <Pizzalist products={products} addToCart={addToCart} />
      
        </div> 
        </>
       
    );
};
export default Products;