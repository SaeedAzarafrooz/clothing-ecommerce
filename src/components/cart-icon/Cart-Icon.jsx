import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { ReactComponent as ShoppingIconHover } from '../../assets/shopping-bag-hover.svg'
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
    <div onClick={toggleIsCartOpen} className='group w-11 h-11 flex justify-center items-center relative cursor-pointer hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out'>
      <ShoppingIcon className='w-7 h-7 block group-hover:hidden' />
      <ShoppingIconHover className='w-7 h-7 hidden group-hover:block' />
      <span className='absolute top-5 text-xs font-SG-light'>{cartCount}</span>
    </div>
  )
}

export default CartIcon