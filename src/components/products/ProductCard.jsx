function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />

        <span className="image-label">
        
        </span>
      </div>

      <div className="product-info">

        <div>
          <p className="category">
            {product.category}
          </p>

          <h3>{product.name}</h3>

          <p className="description">
            {product.description}
          </p>
        </div>

        <div className="product-bottom">

          <strong>
            PKR {product.price.toFixed(2)}
          </strong>

          <button onClick={() => onAdd(product)}>
            Add +
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;