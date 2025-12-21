// import './cart-item.scss';


const CartItem = ({cartItem}) => {
    const {name,quantity,imageUrl,price}=cartItem;
  return (
    <div className='w-full flex h-[80px] mb-2 rounded-md hover:bg-slate-200 transition-all duration-100 ease-in-out'>
        <img className='w-[30%] object-contain' src={imageUrl} alt={`${name}`} />
       <div className='w-[70%] flex flex-col items-start justify-center py-3 px-5'>


        <span className='text-base' >{name}</span>
        <span className='price'>{quantity} x ${price}</span>
       </div>
    </div>
  )
}

export default CartItem