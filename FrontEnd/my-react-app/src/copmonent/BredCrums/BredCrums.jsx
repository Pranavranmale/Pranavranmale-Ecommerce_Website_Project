import React from 'react'
import "./BredCrums.css";
import arrow_icon from "../../assets/arrow_icon.png"
const Bredcrums = (props) => {
  const { product } = props;
  return (
    <div className='bredcrums'>
      Home <img src={arrow_icon} alt="" className='h-9' /> SHOP
      <img src={arrow_icon} alt="" className='h-9' />{product.category}
      <img src={arrow_icon} alt="" className='h-9' /> {product.name}
    </div>
  )
}

export default Bredcrums