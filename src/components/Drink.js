import React, {useContext} from 'react';
import { ShopContext } from '../App';


const Drink = ({drink}) => {
    const context = useContext(ShopContext);
    const addToCart = () => {
        context.addProduct(drink);
    }

    return (
        <div className='card' id='drink' >
            <div className='cardHeader'>
               <img src={drink.url} atl={drink.title}/> 
            </div>
            <div className='cardBody'>
                <strong>{drink.title}</strong>
                <p>{drink.price}</p>
                <button type='button' onClick={addToCart}>Add to Card</button>
            </div>
        </div>
    )
}

export default Drink
