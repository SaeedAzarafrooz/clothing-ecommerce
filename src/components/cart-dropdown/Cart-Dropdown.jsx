// import './cart-dropdown.scss'
import Button from "../button/Button"
import CartItem from '../cart-item/Cart-Item'
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownEl = dropdownRef.current;
      const cartIconEl = document.querySelector('.cart-icon-container');

      // اگر کلیک داخل دراپ‌دان بود یا روی آیکون سبد بود، کاری نکن
      if (
        (dropdownEl && dropdownEl.contains(event.target)) ||
        (cartIconEl && cartIconEl.contains(event.target))
      ) {
        return;
      }

      // در غیر اینصورت دراپ‌دان را ببند
      dispatch(setIsCartOpen(false));
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsCartOpen]);


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