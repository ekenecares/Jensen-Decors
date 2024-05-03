import { useContext } from "react"
import { ShopContext } from "../../components/Context_Api/ContextApi"
import formatCurrency from "../../utils/money"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import './cartItem.css'

const CartItem = () => {
  const {products, cartItems, addToCart, removeFromCart, removeItemFromCart, getTotalCartAmount, getTotalCartItems, orderPlaced, placedOrder} = useContext(ShopContext)

  const shippingFee = 499
  
  return (
    <div className="checkout-main">
      {orderPlaced ? (
        <div className="popup">
          Thank you for your Patronage 😊
        </div>
      ) : (
        <div className="cart-grid">
      <div className="order-summary">
      {products.map(e => {
            if(cartItems[e.id] > 0){
              return <div className="cartItem" key={e.id}>
                      <img className="cartItem-image" src={e.url} alt={e.title} />
                      <div className="cartItem__details">
                        <h3>{e.title}</h3>
                        {/* <p>${formatCurrency(e.priceCents)}</p> */}
                      </div>
                      <div className="cartItem__quantity">
                        <CiCircleMinus onClick={() => removeFromCart(e.id)} className="cartItem__quantity-change"/>
                        <button>{cartItems[e.id]}</button>
                        <CiCirclePlus onClick={() => addToCart(e.id)} className="cartItem__quantity-change"/>
                      </div>
                      <button onClick={() => removeItemFromCart(e.id)} className="delete-cartItem-btn">delete</button>
                    </div>
            }
          })}
      </div>

      <div className="payment-summary">
          <div className="payment-summary-title">
            Order Summary
          </div>

          <div className="payment-summary-row">
            <div>Items Id({getTotalCartItems()}):</div>
            <div className="payment-summary-money">${formatCurrency(getTotalCartAmount())}</div>
          </div>

          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">${formatCurrency(shippingFee)}</div>
          </div>

          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">${formatCurrency(getTotalCartAmount())}</div>
          </div>

          <div className="payment-summary-row">
            <div>Estimated tax (0%):</div>
            <div className="payment-summary-money">$0</div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money">${formatCurrency(getTotalCartAmount() + shippingFee)}</div>
          </div>

          <button onClick={placedOrder} className="place-order-button button-primary">
            Place your order
          </button>
        </div>
      </div>
      )}
    </div>
  )
}

export default CartItem