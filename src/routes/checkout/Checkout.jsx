// import './checkout.scss';
import CheckoutItem from '../../components/checkout-item/Checkout-Item';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    return (
        <div className='w-[55%] min-h-[90vh] flex flex-col items-center mt-12 mb-0 mx-auto'>
            <div className='w-full py-2 px-0 flex justify-between border-b border-gray-400'>
                <div className='w-[23%] capitalize'>
                    <span>product</span>
                </div>
                <div className='w-[23%] capitalize'>
                    <span>description</span>
                </div>
                <div className='w-[23%] capitalize'>
                    <span>quantity</span>
                </div>
                <div className='w-[23%] capitalize'>
                    <span>price</span>
                </div>
                <div className='w-[8%] capitalize'>
                    <span>remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />))}
            <span className='mt-7 ml-auto text-4xl'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout