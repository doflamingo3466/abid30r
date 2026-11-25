import products from "../data/products";
import ProductCard from "../components/products/ProductCard";

function HomePage({ onAdd }) {
  return (
    <main className="page">

      <section className="hero">


        <h1>
          Good design.
          <br />
          Everyday things
        </h1>

    

      </section>

      <section className="shop-section">

        <div className="section-heading">
          <h2>Shop all products</h2>
          <span>06 ITEMS</span>
        </div>

        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default HomePage;