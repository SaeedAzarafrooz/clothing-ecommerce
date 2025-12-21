// import './category.scss';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/Product-Card';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';


const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='text-4xl mb-6 text-center'>{category.toUpperCase()}</h2>
      <div className='grid grid-cols-4 gap-x-5 gap-y-12'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;