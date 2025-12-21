// import './product-card.scss'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const ProductCard = ({ product }) => {

  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="group relative flex h-[350px] w-full flex-col items-center gap-1 overflow-hidden">
      {/* image */}
      <img
        src={imageUrl}
        alt={`${name}-image`}
        className="h-[320px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
      />

      {/* footer */}
      <div className="flex h-[20px] w-full justify-between text-[18px]">
        <span className="w-[90%] mb-[15px]">{name}</span>
        <span className="w-[10%] text-right">{price}</span>
      </div>

      {/* button */}
      <Button
        buttonType="inverted"
        onClick={addProductToCart}
        className="absolute bottom-[40px] w-[80%] min-h-[50px] 
                   opacity-0 hidden group-hover:flex
                   group-hover:opacity-85 transition-all duration-300 "
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard