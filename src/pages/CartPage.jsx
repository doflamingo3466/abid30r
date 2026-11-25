import { Link } from "react-router-dom";
import CartList from "../components/cart/CartList";

function CartPage({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="page">

      <section className="cart-heading">

        <div>
          

          <h1>Shopping cart</h1>
        </div>

        <Link to="/">
         Shop
        </Link>

      </section>

      <section className="cart-layout">

        <CartList
          cartItems={cartItems}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />

        <aside className="order-summary">

          <p className="category">ORDER SUMMARY</p>

          <div className="summary-row">
            <span>Total items</span>

            <span>
              {cartItems.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}
            </span>
          </div>

          <div className="summary-total">
            <span>Total</span>

            <strong>PKR {total.toFixed(2)}</strong>
          </div>

          <button disabled>
            Checkout
          </button>

        </aside>

      </section>

    </main>
  );
}

export default CartPage;