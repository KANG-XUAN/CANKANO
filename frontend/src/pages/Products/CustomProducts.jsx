// pages/Products/CustomProducts.jsx

import "./CustomProducts.css";
import CustomProductCard from "./CustomProductCard";

const customProducts = [
  {
    id: 101,
    name: "Custom Canvas Tote",
    category: "客製化帆布袋",
    price: 880,
    image: "/assets/products/custom-tote-01.jpg",
    description: "自由加入圖片、文字與圖形。",
  },
  {
    id: 102,
    name: "Custom Daily Bag",
    category: "客製化帆布袋",
    price: 920,
    image: "/assets/products/custom-tote-02.jpg",
    description: "打造一只真正屬於你的日常帆布袋。",
  },
];

export default function CustomProducts() {
  return (
    <section className="custom-products">

      <div className="custom-products__intro">
        <div className="custom-products__intro-content">
          <p className="custom-products__eyebrow">
            MAKE IT YOURS.
          </p>

          <h2 className="custom-products__title">
            設計一只真正屬於你的帆布袋。
          </h2>

          <p className="custom-products__description">
            上傳你的圖片、加入文字與圖形，
            自由排列每一個細節，創造獨一無二的日常用品。
          </p>

          <button
            type="button"
            className="custom-products__button"
          >
            開始設計
          </button>
        </div>
      </div>

      <div className="custom-products__header">
        <div>
          <p className="custom-products__section-label">
            CUSTOM COLLECTION
          </p>

          <h2 className="custom-products__section-title">
            客製化商品
          </h2>
        </div>

        <p className="custom-products__count">
          {customProducts.length} 個商品
        </p>
      </div>

      <div className="custom-products__grid">
        {customProducts.map((product) => (
          <CustomProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}
