import { useDispatch, useSelector } from "react-redux";
import { selectActiveProduct } from "../../store/product/product.selector";
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import ProductDetailSkeleton from "./ProductDetailSkeleton";
import noImg from "../../assets/NoImage.png";
import { useEffect, useRef, useState } from "react";

const ProductDetail = () => {
  const product = useSelector(selectActiveProduct);
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(noImg);
  const [thumbSources, setThumbSources] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);


  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setImgSrc(noImg);
    setThumbSources(
      product?.imageUrls?.length
        ? product.imageUrls.map(() => noImg)
        : [noImg]
    );
    setActiveIndex(0);

    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setImgSrc(noImg);
        setLoading(false);
      }
    }, 1000);

    if (product?.imageUrls?.length) {
      let loadedCount = 0;
      const images = [];

      product.imageUrls.forEach((src, index) => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
          if (!isMounted) return;
          // setImgSrc(product.imageUrls[0] || noImg);
          setThumbSources(prev => {
            const copy = [...prev];
            copy[index] = src;
            // console.log('fffffffffffff', product.imageUrls[0]);

            return copy;
          });
        };

        img.onerror = () => {
          loadedCount++;

          if (loadedCount === product.imageUrls.length && isMounted) {
            setImgSrc(product.imageUrls[0] || noImg);
            setLoading(false);
          }
        };

        images.push(img);
      });
    }

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [product]);


  if (loading) return <ProductDetailSkeleton />;
  if (!product) return <div className="p-6">محصول یافت نشد</div>;

  const { name, price, specialOffer, description } = product;
  const thumbnails =
    product.imageUrls && product.imageUrls.length > 0
      ? product.imageUrls
      : [noImg];



  const addProductToCart = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(cartItems, product));
  };


  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* breadcrum component */}

      <div className="flex flex-col md:flex-row gap-16 ">

        {/* image */}
        <div className="w-full flex flex-col md:w-[360px] h-[420px] rounded-3xl overflow-hidden border border-gray-300/30">
          <div className="h-[340px] border-b">
            <img
              src={imgSrc}
              alt={name}
              className="h-full w-full object-cover object-center transition-opacity duration-300"
            />
          </div>
          <div className="relative w-full h-20 flex items-center">
            {product.imageUrls.length > 4 && <button
              onClick={() => {
                if (!thumbsRef.current) return;
                thumbsRef.current.scrollBy({ left: -120, behavior: 'smooth' });
              }}
              className="absolute left-0 z-10 w-6 h-full text-2xl bg-white shadow "
            >
              ‹
            </button>}

            <div
              ref={thumbsRef}
              className="flex gap-1 overflow-x-auto px-8 no-scrollbar w-full flex-nowrap justify-start"
            >
              {thumbSources.map((img, index) => (
                <img
                  key={img + index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setImgSrc(img || noImg);
                  }}
                  className={`w-14 h-14 flex-shrink-0 object-cover cursor-pointer border rounded-lg
                              ${activeIndex === index ? 'border-black' : 'border-gray-300 opacity-70'}`}
                />
              ))}
            </div>

            {product.imageUrls.length > 4 && <button
              onClick={() => {
                thumbsRef.current.scrollBy({ left: 120, behavior: 'smooth' });
              }}
              className="absolute right-0 z-10 w-6 h-full text-2xl bg-white shadow "
            >
              ›
            </button>}
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col flex-1 gap-4 py-4">
          <h1 className="text-2xl font-bold">{name}</h1>

          <div className="relative">
            {specialOffer > 0 ?
              <div className="relative flex items-center justify-between bg-slate-200 shadow-md w-1/3 h-10 rounded-2xl overflow-hidden">
                <span className="absolute bg-red-700 rotate-[25deg] w-1/3 h-[90px]"></span>
                <span className="text-xl font-semibold w-1/3 flex justify-center items-center  text-white z-10">{specialOffer}%</span>

                <span className="text-2xl font-bold w-2/3 flex justify-center items-center text-gray-700">
                  {price * (100 - specialOffer) / 100}$
                </span> </div>
              :
              <div className="relative flex items-center justify-center bg-slate-200 shadow-md w-1/3 h-10 rounded-2xl overflow-hidden">
                <span className="text-2xl font-bold text-gray-700">
                  {price}$
                </span>
              </div>
            }

          </div>

          {description && (
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          )}

          {/* Select size component */}

          <button
            onClick={addProductToCart}
            className="mt-6 w-40 h-10 rounded-xl bg-black text-white
                       hover:bg-gray-800 transition-colors"
          >
            Add to cart

            {/* after adding can increase or decrease amount */}

          </button>
        </div>

      </div>

      {/* more description, comments,product's specifications component */}

      {/* relative products component */}

    </div>
  );
};

export default ProductDetail;