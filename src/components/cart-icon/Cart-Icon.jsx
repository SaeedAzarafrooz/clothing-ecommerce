// import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { ReactComponent as ShoppingIconHover } from '../../assets/shopping-bag-hover.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


function CartIcon({ iconRef }) {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = (e) => {
    e.stopPropagation();
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <div ref={iconRef} onClick={toggleIsCartOpen} className='group relative w-11 h-11 flex justify-center items-center  cursor-pointer hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out'>
      <ShoppingIcon className='absolute top-2 left-2 w-7 h-7 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none' />
      <ShoppingIconHover className='absolute top-2 left-2 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none' />
      <span className='absolute top-5 text-xs font-SG-light'>{cartCount}</span>
    </div>
  )
}

export default CartIcon