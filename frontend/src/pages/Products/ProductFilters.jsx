// pages/Products/ProductFilters.jsx

import { useState } from "react";
import "./ProductFilters.css";

const categories = [
  "全部",
  "日常款",
  "插畫款",
  "文字款",
  "限定款",
];

const priceOptions = [
  "全部",
  "NT$500 以下",
  "NT$500–800",
  "NT$800 以上",
];

const sortOptions = [
  "推薦",
  "價格：低到高",
  "價格：高到低",
  "最新",
];

export default function ProductFilters() {
  const [category, setCategory] = useState("全部");
  const [price, setPrice] = useState("全部");
  const [sort, setSort] = useState("推薦");

  return (
    <section className="product-filters">
      <div className="product-filters__inner">

        <div className="product-filter-row">
          <span className="product-filter-row__label">
            分類
          </span>

          <div className="product-filter-row__options">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-tag ${
                  category === item ? "is-active" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="product-filter-row">
          <span className="product-filter-row__label">
            價格
          </span>

          <div className="product-filter-row__options">
            {priceOptions.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-tag ${
                  price === item ? "is-active" : ""
                }`}
                onClick={() => setPrice(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="product-filter-row">
          <span className="product-filter-row__label">
            排序
          </span>

          <div className="product-filter-row__options">
            {sortOptions.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-tag ${
                  sort === item ? "is-active" : ""
                }`}
                onClick={() => setSort(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
