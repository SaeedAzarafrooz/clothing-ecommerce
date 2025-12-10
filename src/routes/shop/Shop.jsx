import './shop.scss'
import { useContext } from "react"
import { ProductsContext } from "../../components/contexts/products.context"
import ProductCard from "../../components/product-card/Product-Card";


const Shop = () => {
    const {products} = useContext(ProductsContext);
  return (
    <div className='products-container'>
        {products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Shop