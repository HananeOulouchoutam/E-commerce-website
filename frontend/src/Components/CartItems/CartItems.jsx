import React from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

  const {all_product , cartItems , removeFromCart  , getTotalCartAmout } = React.useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((item )=> {
           if(cartItems[item.id] > 0) {
            return ( <div>
                <div className="cartitems-format cartitems-format-main">
                    <img className='carticon-product-icon' src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.new_price}</p>
                    <button className='cartitems-quatity'>{cartItems[item.id]}</button>
                    <p>${item.new_price * cartItems[item.id]}</p>
                    <img src={remove_icon}  className='cartitems-remove-icon' onClick={()=> {removeFromCart(item.id)}}alt="" />
                </div>
    
                <hr />
            </div>)
           }
           return null
        
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmout()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total </h3>
                        <h3>${getTotalCartAmout()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>

            <div className="cartitems-promocode">
                <p>If you have a promo code enter it here </p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>


      
    </div>
  )
}

export default CartItems
