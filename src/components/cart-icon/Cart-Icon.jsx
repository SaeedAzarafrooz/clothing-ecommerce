import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


function CartIcon() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <div onClick={toggleIsCartOpen} className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon