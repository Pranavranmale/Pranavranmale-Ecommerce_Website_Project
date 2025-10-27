import NavBar from './copmonent/Navbar/NavBar'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Shop from './Pages/Shope'
import Login from './Pages/Login'
import men_banner from '../src/assets/banner.jpg'
import Footer from './copmonent/footer/Footer'
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"

function App() {

  return (
    <div>
      <BrowserRouter>
    <NavBar />
        
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
