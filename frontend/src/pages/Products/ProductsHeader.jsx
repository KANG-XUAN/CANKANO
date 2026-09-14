// pages/Products/ProductsHeader.jsx

import "./ProductsHeader.css";

export default function ProductsHeader() {
  return (
    <section className="products-header">
      <div className="products-header__inner">
        <p className="products-header__eyebrow">
          MORI COLLECTION
        </p>

        <h1 className="products-header__title">
          Find Your Everyday Bag
        </h1>

        <p className="products-header__description">
          從日常生活到獨特創作，選一只屬於你的帆布袋。
        </p>
      </div>
    </section>
  );
}
