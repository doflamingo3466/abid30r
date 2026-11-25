export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <div className="product-icon">{product.icon}</div>
      <span className="tag">{product.category}</span>
      <h3>{product.name}</h3>
      <div className="product-bottom">
        <strong>${product.price.toFixed(2)}</strong>
        <button onClick={() => onAdd(product)}>+ Add</button>
      </div>
    </div>
  );
}