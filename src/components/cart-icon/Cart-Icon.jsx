import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { CartContext } from '../../components/contexts/cart.context';
import { useContext } from 'react';

function CartIcon() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={toggleIsCartOpen} className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon