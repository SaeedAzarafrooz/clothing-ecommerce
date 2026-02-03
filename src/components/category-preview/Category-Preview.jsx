// import "./category-preview.scss"
import { Link } from "react-router-dom"
import ProductCard from "../product-card/Product-Card"
import HatHoverIcon from '../../assets/hatIconHover.svg';
import HatIcon from '../../assets/hatIcon.svg';
import { useBreakpoint } from "../../hooks/useBreakpoint";


const CategoryPreview = ({ title, products }) => {
const bp = useBreakpoint();

const visibleCount = {
  mobile: 2,  // 1 ستون → 2 محصول
  sm: 4,      // 2 ستون → 4 محصول
  md: 3,      // 3 ستون → 3 محصول 
  lg: 4,      // 4 ستون → 4 محصول 
  xl: 5 // 5 ستون → 5 محصول (سقف)
}[bp];

  return (
    <div className="flex flex-col  mb-7">
      <Link className="group w-1/6 cursor-pointer " to={title}>
        <div className="relative flex gap-3 bg-slate-300 group-hover:bg-slate-400  rounded-3xl mb-4 transition-all duration-300 ease-in-out">
          <div className="absolute w-20 h-20 flex-shrink-0">
            <img
              src={HatIcon}
              alt="shop"
              className="rotate-12 absolute left-2 bottom-7 w-20 h-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none"
            />

            <img
              src={HatHoverIcon}
              alt="shop-hover"
              className="rotate-12 absolute left-2 bottom-7 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
            />
          </div>
          <h2 className="text-2xl ml-24">
            {title.toUpperCase()}
          </h2>
        </div></Link>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
  {Array.isArray(products) &&
  products.slice(0, visibleCount).map(product => (
    <ProductCard key={product.id} product={product} />
  ))
}
</div>
    </div>
  )
}

export default CategoryPreview