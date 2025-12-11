import { useContext } from "react"
import { CategoriesContext } from "../../components/contexts/categories.context"
import CategoryPreview from '../../components/category-preview/Category-Preview';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>
  )
}

export default CategoriesPreview