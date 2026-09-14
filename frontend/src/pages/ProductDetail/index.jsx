import "./index.css";

import ProductDetailHeader from "./ProductDetailHeader";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductAccordion from "./ProductAccordion";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetail() {
	return (
		<main className="product-detail">
			<ProductDetailHeader />

			<section className="product-detail__main">
				<ProductGallery />
				<ProductInfo />
			</section>

			<ProductAccordion />

			<RelatedProducts />
		</main>
	);
}
