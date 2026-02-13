import "./ProductCard.css";

function ProductCard({ name, price, status }) {
  return (
    <div className="product-card">
      <div className="image-box"></div>

      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>

      <span
        className={
          status === "In Stock"
            ? "status in-stock"
            : "status out-stock"
        }
      >
        {status}
      </span>
    </div>
  );
}

export default ProductCard;
