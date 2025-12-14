import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home"
import Navigation from "./routes/navigation/Navigation"
import Authentication from "./routes/Authentication/Authentication"
import Shop from "./routes/shop/Shop"
import Checkout from "./routes/checkout/Checkout"
import CategoriesPreview from "./routes/categories-preview/Categories-Preview"
import Category from "./routes/category/Category"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setCategories } from "./store/categories/category.action"
import { createUserDocumentFromAuth, getCategoriesAndDocuments, onAuthStateChangedListener } from "./utils/firebase/firebase"
import { setCurrentUser } from "./store/user/user.action"









const App = () => {
  const dispatch = useDispatch();
   useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);


   useEffect(() => {
     const getCategoriesMap = async () => {
       const categoriesArray = await getCategoriesAndDocuments('categories');
       dispatch(setCategories(categoriesArray));
     };
  
     getCategoriesMap();
   }, []);



  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />}>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Route>

        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
