// import './cart-dropdown.scss'
import Button from "../button/Button"
import CartItem from '../cart-item/Cart-Item'
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = ({ iconRef }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
const handleClickOutside = (event) => {
      if (
        dropdownRef.current?.contains(event.target) ||
        iconRef.current?.contains(event.target)
      ) {
        return;
      }

      dispatch(setIsCartOpen(false));
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dispatch]);


  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (

    <div ref={dropdownRef} className="absolute flex flex-col w-[300px] h-[340px] p-3 bg-slate-100 shadow-lg border border-slate-300 rounded-lg top-[70px] right-20 z-10">
      <div className="h-4/5 overflow-y-auto flex flex-col rounded-lg">
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <div className='relative w-full  h-1/5 border-t border-gray-300 mt-2'>

      <Button className='absolute bottom-0 w-full whitespace-nowrap' onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    </div>

  )
}

export default CartDropdown