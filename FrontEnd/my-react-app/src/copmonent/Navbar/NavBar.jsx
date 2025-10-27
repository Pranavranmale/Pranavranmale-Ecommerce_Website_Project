import { useContext, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import '../../assets/cart_icon.png'
export default function NavBar() {
    const[menu,setMenu]=useState("home")
  return (
    <div className="nav-bar">
      <div className="NavLogo">
        <Link to="/"><img src="src/assets/logo.webp" alt="Logo" className="h-10 w-10" /></Link>
      <p className=".nav-logo p">Shopify</p>
      </div>
      
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/">home</Link>{menu==="home" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/mens">Mens</Link>{menu==="Mens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/womens">Womens</Link>{menu==="Womens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/kids">Kids</Link>{menu==="Kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"><button className="nav-login">Login</button></Link>
            <Link to="/cart"><img src={'../../src/assets/cart_icon.png'} alt="" style={{ height: "40px" }} /></Link>
            <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}