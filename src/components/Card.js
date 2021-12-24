import React, { useContext } from 'react';
import {ShopContext} from '../App';

export const Card = ({product}) => {
    const context = useContext(ShopContext);

    const addToCart = () => {
        context.addProduct(product);
    }
    function Filter(cat){
        let results = product.filter((el) => {
            return el.category === cat;
        })
        return results;
    } 
    //   console.log(Filter(cat))
    
    return (
        <div className='card' id='pizza'>
            <div className='cardHeader' > 
              <img src={product.url} alt={product.title}/>
            </div> 
            <div className='cardBody' >
                <div className='cardBody__text' >
                  <h4 className='cardTitle'> {product.title}</h4>
                 <p className='cardDesc' > {product.desc}</p>   
                 <p className='cardPrice'> {product.price + ' sum'}</p>
                </div> 
            <button className='add-to-cart' type='button' onClick={addToCart}> Add to cart</button>
            </div>
        </div>
    )
}
export default Card;