// import './product-card.scss'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { useNavigate } from 'react-router-dom';
import { setActiveProduct } from '../../store/product/product.action';

import noImg from '../../assets/NoImage.png'
import { useEffect, useState } from 'react';
import ProductCardSkeleton from './ProductCardSkeleton';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, specialOffer } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setSrc(null);

    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setSrc(noImg);
        setLoading(false);
      }
    }, 1000);

    if (imageUrl[0]) {
      const img = new Image();
      img.src = imageUrl[0];

      img.onload = () => {
        clearTimeout(timeoutId);
        if (isMounted) {
          setSrc(imageUrl[0]);
          setLoading(false);
        }
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        if (isMounted) {
          setSrc(noImg);
          setLoading(false);
        }
      };
    }

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [imageUrl]);

  const addProductToCart = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(cartItems, product));
  };

  const handleNavigate = () => {
    dispatch(setActiveProduct(product));
    navigate(`/product/${product.id}`);
  };

  if (loading) return <ProductCardSkeleton />;

  return (
    <div
      onClick={handleNavigate}
      className={`group relative flex flex-col items-center gap-1
                 h-[390px] w-[240px] shrink-0
                 rounded-3xl bg-white border overflow-hidden
                 ${specialOffer > 0
          ? "border-yellow-600/30 hover:border-yellow-600"
          : "border-gray-400/30 hover:border-gray-400"}
                 hover:scale-[1.02] hover:drop-shadow-lg
                 transition-all duration-200 ease-in-out cursor-pointer`}
    >
      {/* special offer */}
      {specialOffer > 0 && (
        <div
          className="absolute top-6 -right-8 w-36 h-8 flex justify-center items-end
                     pb-1.5 rotate-45 bg-red-700 text-white font-extrabold"
        >
          {specialOffer}
          <span className="text-yellow-600 text-xs">%</span>
        </div>
      )}

      {/* image */}
      <img
        src={src}
        alt={`${name}-image`}
        className="h-[320px] w-[240px] object-cover object-center"
      />

      {/* footer */}
      <div className="flex flex-col px-4 w-full text-[18px]">
        <span>{name}</span>

        <div className="relative group flex justify-end items-center h-[38px]">
          {specialOffer > 0 &&
            <span className="absolute bottom-2 right-14 z-10 transition-colors duration-300 group-hover:text-white text-slate-300 text-sm ">
              <div className='absolute top-2 -right-1 w-6 border-b border-red-600 rotate-12 h-1'></div>
              {price}
            </span>}
          <span className="z-10 transition-colors duration-300 group-hover:text-white font-bold">
            {price * (100 - specialOffer) / 100}$
          </span>

          <Button
            buttonType="addToCart"
            onClick={addProductToCart}
            className="absolute -left-6 top-0 w-[130%] h-full flex items-center  
                       translate-y-full group-hover:translate-y-1
                       transition-all duration-300 ease-in-out"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;