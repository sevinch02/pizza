import React,{ useContext } from 'react';
import {ShopContext} from '../App';

const Cart = () => {

    const context = useContext(ShopContext);
    console.log(context)
    return (
//  <div>
         <div> 
                {context.cart && context.cart.map((el, i) => 
                    <div key={i}  >
                            <div className='cardHeader' > 
                        <img src={el.url ? el.url : el.img} alt={el.title ? el.title : el.name}/>
                        </div> 
                    <div className='cardBody' >
                        <div className='cardBody__text' >
                        <h4 className='cardTitle'> {el.title}</h4>
                        <p className='cardDesc' > {el.desc ? el.desc : el.content}</p>   
                        <p className='cardPrice'> {el.price + ' sum'}</p>
                        </div> 
                    </div>
                    </div>
                )}  
             </div>         
        //  </div>
       
    )
}

export default Cart
