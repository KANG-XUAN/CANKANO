import "./RelatedProducts.css";

const relatedProducts = [
	{
		id: 1,
		name: "植物日常帆布袋",
		price: 680,
		image: "/images/products/product-06.jpg",
	},
	{
		id: 2,
		name: "簡約文字帆布袋",
		price: 620,
		image: "/images/products/product-07.jpg",
	},
	{
		id: 3,
		name: "季節限定帆布袋",
		price: 780,
		image: "/images/products/product-08.jpg",
	},
	{
		id: 4,
		name: "自然生活帆布袋",
		price: 720,
		image: "/images/products/product-09.jpg",
	},
];

export default function RelatedProducts() {
	return (
		<section className="related-products">
			<div className="related-products__header">
				<p>EXPLORE MORE</p>

				<h2>相關商品</h2>
			</div>

			<div className="related-products__list">
				{relatedProducts.map((product) => (
					<article
						key={product.id}
						className="related-product-card"
					>
						<div className="related-product-card__image">
							<img
								src={product.image}
								alt={product.name}
							/>
						</div>

						<div className="related-product-card__info">
							<h3>{product.name}</h3>

							<p>NT${product.price}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
