import React,{useContext} from 'react'
import PRODUCTS from '../../products'
import {ShopContext} from "../../context/shop-context"
import CartItem from './cartItem'
import {useNavigate} from "react-router-dom"
import "./cart.css"

const Cart = () => {
  const{cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const Navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'> 
      {PRODUCTS.map((product)=>{
        if(cartItems[product.id]!==0){
          return <CartItem data={product}/>
        }
      })}
      </div>
      <div className='checkout'>
        <p>SubTotal: ${totalAmount}</p>
        <button onClick={()=> Navigate("/app")}>Continue Shopping</button>
        <button>CheckOut</button>

      </div>
    </div>
  )
}

export default Cart