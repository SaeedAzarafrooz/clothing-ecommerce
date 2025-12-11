// import './shop.scss'

// import { Routes, Route } from 'react-router-dom';
// import CategoriesPreview from '../categories-preview/Categories-Preview';
// import Category from '../category/Category';


// const Shop = () => {
//   return (
//     <Routes>
//       <Route index element={<CategoriesPreview />} />
//       <Route path=':category' element={<Category />} />
//     </Routes>
//   );
// };

// export default Shop;

import './shop.scss'

import { Outlet } from 'react-router-dom';

const Shop = () => {
  return <Outlet />;
};

export default Shop;