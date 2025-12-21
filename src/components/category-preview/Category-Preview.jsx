// import "./category-preview.scss"
import { Link } from "react-router-dom"
import ProductCard from "../product-card/Product-Card"


const CategoryPreview = ({title,products}) => {


  return (
    <div className="flex flex-col mb-7">
        <h2>
            <Link className="text-2xl mb-6 cursor-pointer" to={title}>{title.toUpperCase()}</Link>
        </h2>
        <div className="grid grid-cols-4 gap-5">
            {   products
                .filter((_,index) => index < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    </div>
  )
}

export default CategoryPreview