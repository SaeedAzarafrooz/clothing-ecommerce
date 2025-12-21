// import './checkout-item.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;


    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));


    return (
        <div className='w-full flex items-center min-h-[100px] py-4 px-0 
                        border-b-2 border-gray-300 text-xl
                        hover:bg-slate-100 transition-all duration-200 ease-in-out'>
            <div className='w-[23%] pr-4'>
                <img className='w-full h-full' src={imageUrl} alt={`${name}`} />
            </div>
            <span className='w-[23%]'> {name} </span>
            <span className='w-[23%] flex'>
                <div
                    className={`arrow ${quantity === 1 ? 'opacity-30 cursor-default pointer-events-none' : 'cursor-pointer'}`}
                    onClick={quantity === 1 ? undefined : removeItemHandler}
                >
                    &#10094;
                </div>
                <span className='my-0 mx-2'>{quantity}</span>
                <div className='cursor-pointer ' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='w-[23%]'> {price}</span>
            <div
                className='cursor-pointer pl-3 font-semibold hover:text-red-600
                           transition-all duration-200 ease-in-out'
                onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>

    )
}

export default CheckoutItem