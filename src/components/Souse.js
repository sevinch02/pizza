import React,{useContext} from 'react';
import { ShopContext } from '../App';

const Souse = ({souse}) => {
    const context = useContext(ShopContext);
    const addToCart = () => {
        context.addProduct(souse);
    }
    return (
        <div className='card'id='souse' >
            <div className='cardHeader' >
                <img src={souse.url} alt={souse.title} />
            </div>
            <div className='cardBody' >
               <h3>{souse.name}</h3>
              <p>{souse.price} </p>
           
            <button className='add-to-cart' type='button' onClick={addToCart} >Add to card</button>
            </div>
        </div>
    )
}

export default Souse

