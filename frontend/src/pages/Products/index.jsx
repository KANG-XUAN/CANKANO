// pages/Products/index.jsx

import "./index.css";

import ProductsHeader from "./ProductsHeader";
import ProductFilters from "./ProductFilters";
import MainProducts from "./MainProducts";
import CustomProducts from "./CustomProducts";

export default function Products() {
  return (
    <main className="products">
      <ProductsHeader />
      <ProductFilters />

      <div className="products-content">
        <MainProducts />
        <CustomProducts />
      </div>
    </main>
  );
}
