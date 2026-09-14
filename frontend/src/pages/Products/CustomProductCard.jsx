// pages/Products/CustomProductCard.jsx

import "./CustomProductCard.css";

export default function CustomProductCard({ product }) {
  return (
    <article className="custom-product-card">

      <div className="custom-product-card__visual">
        <img
          src={product.image}
          alt={product.name}
          className="custom-product-card__image"
        />

        <div className="custom-product-card__overlay">
          <button
            type="button"
            className="custom-product-card__button"
          >
            開始客製化
          </button>
        </div>
      </div>

      <div className="custom-product-card__content">
        <div>
          <p className="custom-product-card__category">
            {product.category}
          </p>

          <h3 className="custom-product-card__name">
            {product.name}
          </h3>

          <p className="custom-product-card__description">
            {product.description}
          </p>
        </div>

        <p className="custom-product-card__price">
          NT${product.price.toLocaleString()}
        </p>
      </div>

    </article>
  );
}
