// pages/Products/ProductCard.jsx

import "./ProductCard.css";

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        {product.badge && (
          <span className="product-card__badge">
            {product.badge}
          </span>
        )}

        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
        />

        <Link
          to={`/products/${product.id}`}
          className="product-card__quick-action"
        >
          查看商品
        </Link>
      </div>

      <div className="product-card__content">
        <p className="product-card__category">
          {product.category}
        </p>

        <h3 className="product-card__name">
          {product.name}
        </h3>

        <p className="product-card__price">
          NT${product.price.toLocaleString()}
        </p>
      </div>
    </article>
  );
}
