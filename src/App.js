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
import ProductDetail from "./routes/product-detail/Product-Detail"

// import SHOP_DATA from './shop-data'

/* to do list 
طراحی پیام های خطا و اخطار و راهنمایی اینپوت ها و عملیات ها در سایت
تم تاریک و روشن - چند زبانه کردن سایت
notification
search box ----------------------------- OK
mega menu
FAQ
Location
Slider ----------------------------- OK
brand section -> More page
Carousel --> Amazing
banner --> AmazingShortcut
banner --> tiles (حراج سرماه لوازم خانگی برقی - پارتنرشیپ-کسری -	حراج سرماه ابزارآلات و تجهیزات - پارتنرشیپ-پارسیس - )
section --> خرید بر اساس دسته‌بندی
section --> محبوب‌ترین برندها
section -->پرفروش‌ترین کالاها
section -->منتخب محصولات تخفیف و حراج
section (WidgetYogaBar) -->بر اساس سلیقه شما
 go to top
 support

product detail page

footer
*/





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
       console.log('avalesh:',categoriesArray);
       
       dispatch(setCategories(categoriesArray));
      //  dispatch(setCategories(SHOP_DATA));
     };
  
     getCategoriesMap();
   }, []);



  return (
    <div className="mx-auto max-w-[1600px] px-4">
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />}>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Route>
          <Route path="product/:id" element={<ProductDetail />} />

        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
