import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home"
import Navigation from "./routes/navigation/Navigation"
import Authentication from "./routes/Authentication/Authentication"
import Shop from "./routes/shop/Shop"
import Checkout from "./routes/checkout/Checkout"









const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
