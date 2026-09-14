import { useState } from "react";
import "./ProductGallery.css";

const productImages = [
	{
		id: 1,
		src: "/images/products/product-01.jpg",
		alt: "帆布袋正面",
	},
	{
		id: 2,
		src: "/images/products/product-02.jpg",
		alt: "帆布袋側面",
	},
	{
		id: 3,
		src: "/images/products/product-03.jpg",
		alt: "帆布袋細節",
	},
	{
		id: 4,
		src: "/images/products/product-04.jpg",
		alt: "帆布袋使用情境",
	},
	{
		id: 5,
		src: "/images/products/product-05.jpg",
		alt: "帆布袋材質",
	},
];

export default function ProductGallery() {
	const [activeIndex, setActiveIndex] = useState(0);

	const activeImage = productImages[activeIndex];

	const handlePrevious = () => {
		setActiveIndex((current) =>
			current === 0
				? productImages.length - 1
				: current - 1
		);
	};

	const handleNext = () => {
		setActiveIndex((current) =>
			current === productImages.length - 1
				? 0
				: current + 1
		);
	};

	return (
		<section className="product-gallery">
			<div className="product-gallery__main">
				<img
					src={activeImage.src}
					alt={activeImage.alt}
				/>
			</div>

			<div className="product-gallery__preview">
				<button
					type="button"
					className="product-gallery__arrow"
					onClick={handlePrevious}
					aria-label="上一張圖片"
				>
					‹
				</button>

				<div className="product-gallery__list">
					{productImages.map((image, index) => (
						<button
							key={image.id}
							type="button"
							className={`product-gallery__thumbnail ${
								activeIndex === index
									? "is-active"
									: ""
							}`}
							onClick={() =>
								setActiveIndex(index)
							}
						>
							<img
								src={image.src}
								alt={image.alt}
							/>
						</button>
					))}
				</div>

				<button
					type="button"
					className="product-gallery__arrow"
					onClick={handleNext}
					aria-label="下一張圖片"
				>
					›
				</button>
			</div>
		</section>
	);
}
