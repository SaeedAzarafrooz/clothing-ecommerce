import './cart-dropdown.scss'
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

    <div ref={dropdownRef} className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>

  )
}

export default CartDropdown