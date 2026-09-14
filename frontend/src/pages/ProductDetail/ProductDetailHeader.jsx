import { useState } from "react";
import "./ProductDetailHeader.css";

const productName =
	"日常生活帆布袋｜植物插畫系列｜手作質感棉麻購物袋";

export default function ProductDetailHeader() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<section className="product-detail-header">
			<button
				type="button"
				className={`product-detail-header__button ${
					isExpanded ? "is-expanded" : ""
				}`}
				onClick={() => setIsExpanded((prev) => !prev)}
				aria-expanded={isExpanded}
			>
				<h1 className="product-detail-header__title">
					{productName}
				</h1>

				<span className="product-detail-header__toggle">
					{isExpanded ? "收起" : "展開"}
				</span>
			</button>
		</section>
	);
}
