import React, {useContext} from 'react';
import {ShopContext} from '../App';
import {useNavigate} from 'react-router-dom';


const Header = () => {
    
    const context = useContext(ShopContext);
    const navigate = useNavigate();
    return (
        <div className='header'>
            <img src="./assets/img/logo.png" alt='logo'  /> 
            <nav className='navbar' >
        
                <a href='#pizza' className='navbar__link'  >Pizza</a>
                <a href='#drink' className='navbar__link' >Drink</a>
                <a href='#sneaks' className='navbar__link' >Sneaks</a>
                <a href='#souse' className='navbar__link' >Souse</a>
            </nav>
            {/* <Link to='/cart'> */}
                 <strong onClick={() => navigate(`/cart`)} > items: {context.cart.length}  </strong>
                 {/* </Link> */}
     
        </div>
        
    )
}

export default Header
