function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className="cart-item">
      <div className="cart-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-details">
        <p className="category">{item.category}</p>

        <h3>{item.name}</h3>

        <p>PKR {item.price.toFixed(2)} each</p>
      </div>

      <div className="quantity">
        <button onClick={() => onDecrease(item.id)}>−</button>

        <span>{item.quantity}</span>

        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>

      <strong>PKR {(item.price * item.quantity).toFixed(2)}</strong>

      <button className="remove-button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </article>
  );
}

export default CartItem;
