import React, {useContext} from 'react';
import apiCalls from '../config/api';

import {ShopContext} from '../App';

const Sneak = ({sneak}) => {
    // const [ sneak,setSneak] = useState=([]);

    const context = useContext(ShopContext);

    const addToCart = () => {
        context.addProduct(sneak);
    }
    return (
        
            <div className='card' id='sneaks'>
            <div className='cardHeader' > 
              <img src={sneak.img} alt={sneak.name}/>
            </div> 
            <div className='cardBody' >
                <div className='cardBody__text' >
                  <h4 className='cardTitle'> {sneak.name}</h4>
                 <p className='cardDesc' > {sneak.content}</p>   
                 <p className='cardPrice'> {sneak.price + ' sum'}</p>
                </div> 
            <button className='add-to-cart' type='button' onClick={addToCart}> Add to cart</button>
            </div>
        </div>
   
    )
}

export default Sneak
