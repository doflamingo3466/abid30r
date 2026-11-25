import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

export default function Cart({ cart, onQuantity, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <>
      <div className="page-heading"><div><p className="eyebrow">ORDER</p><h1>Shopping cart</h1><p>Update quantities or remove products.</p></div><Link to="/products" className="secondary">← Continue shopping</Link></div>
      <section className="panel">
        <CartItems cart={cart} onQuantity={onQuantity} onRemove={onRemove} />
        <div className="total"><span>Grand total</span><strong>${total.toFixed(2)}</strong></div>
      </section>
    </>
  );
}