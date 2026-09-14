// pages/Products/MainProducts.jsx

import "./MainProducts.css";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Daily Linen Tote",
    category: "日常袋",
    price: 680,
    image: "/assets/products/tote-01.jpg",
    badge: "人氣",
  },
  {
    id: 2,
    name: "Natural Canvas Bag",
    category: "購物袋",
    price: 720,
    image: "/assets/products/tote-02.jpg",
  },
  {
    id: 3,
    name: "Simple Market Tote",
    category: "購物袋",
    price: 580,
    image: "/assets/products/tote-03.jpg",
  },
  {
    id: 4,
    name: "MORI Daily Bag",
    category: "日常袋",
    price: 760,
    image: "/assets/products/tote-04.jpg",
  },
];

export default function MainProducts() {
  return (
    <section className="main-products">
      <div className="main-products__header">
        <div>
          <p className="main-products__eyebrow">
            EVERYDAY COLLECTION
          </p>

          <h2 className="main-products__title">
            文創商品
          </h2>
        </div>

        <p className="main-products__description">
          簡單、耐用，適合每天使用的帆布袋。
        </p>
      </div>

      <div className="main-products__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
