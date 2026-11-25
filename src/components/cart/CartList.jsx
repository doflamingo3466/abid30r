import CartItem from "./CartItem";

function CartList({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty.</h2>
        <p>Add some products to get started.</p>
      </div>
    );
  }

  return (
    <div className="cart-list">

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}

    </div>
  );
}

export default CartList;