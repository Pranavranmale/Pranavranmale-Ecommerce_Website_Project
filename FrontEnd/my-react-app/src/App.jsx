import NavBar from './copmonent/Navbar/NavBar'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Shop from './Pages/Shope'
import Login from './Pages/Login'

function App() {

  return (
    <div>
      <BrowserRouter>
    <NavBar />
        
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens"/>} />
          <Route path="/womens" element={<ShopCategory category="womens"/>} />
          <Route path="/kids" element={<ShopCategory category="kids"/>} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
