// components/product/ProductFilters.jsx

import { useMemo, useState } from "react";

import ProductFilters from "../../pages/Products/ProductFilters";
import FeaturedProducts from "../../pages/Products/FeaturedProducts";
import CustomProducts from "../../pages/Products/CustomProducts";

const products = [
	// 商品資料之後放這裡
];

export default function ProductPageContent() {
	const [category, setCategory] = useState("all");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [sort, setSort] = useState("recommended");

	const filteredProducts = useMemo(() => {
		let result = [...products];

		// =========================
		// 分類篩選
		// =========================
		if (category !== "all") {
			result = result.filter(
				(product) => product.category === category
			);
		}

		// =========================
		// 最低價格
		// =========================
		if (minPrice !== "") {
			result = result.filter(
				(product) =>
					product.price >= Number(minPrice)
			);
		}

		// =========================
		// 最高價格
		// =========================
		if (maxPrice !== "") {
			result = result.filter(
				(product) =>
					product.price <= Number(maxPrice)
			);
		}

		// =========================
		// 排序
		// =========================
		switch (sort) {
			case "price-low":
				result.sort(
					(a, b) => a.price - b.price
				);
				break;

			case "price-high":
				result.sort(
					(a, b) => b.price - a.price
				);
				break;

			case "newest":
				result.sort(
					(a, b) =>
						new Date(b.createdAt) -
						new Date(a.createdAt)
				);
				break;

			case "recommended":
			default:
				break;
		}

		return result;
	}, [category, minPrice, maxPrice, sort]);

	return (
		<div className="product-page">
			<ProductFilters
				category={category}
				setCategory={setCategory}
				minPrice={minPrice}
				setMinPrice={setMinPrice}
				maxPrice={maxPrice}
				setMaxPrice={setMaxPrice}
				sort={sort}
				setSort={setSort}
			/>

			<FeaturedProducts
				products={filteredProducts}
			/>

			<CustomProducts
				products={filteredProducts}
			/>
		</div>
	);
}
