import { useState } from "react";
import "./ProductInfo.css";

const sizes = [
	{
		label: "S",
		value: "S",
	},
	{
		label: "M",
		value: "M",
	},
	{
		label: "L",
		value: "L",
	},
];

export default function ProductInfo() {
	const [selectedSize, setSelectedSize] = useState("M");
	const [quantity, setQuantity] = useState(1);

	const handleDecrease = () => {
		setQuantity((current) =>
			Math.max(1, current - 1)
		);
	};

	const handleIncrease = () => {
		setQuantity((current) => current + 1);
	};

	const handleAddToCart = () => {
		console.log("加入購物車", {
			size: selectedSize,
			quantity,
		});
	};

	const handleBuyNow = () => {
		console.log("立即購買", {
			size: selectedSize,
			quantity,
		});
	};

	return (
		<section className="product-info">
			<div className="product-info__body">
				<div className="product-info__category">
					日常款
				</div>

				<h2 className="product-info__name">
					日常生活帆布袋
				</h2>

				<div className="product-info__price">
					NT$680
				</div>

				<div className="product-info__description">
					<p>
						以日常生活為靈感設計的帆布袋，
						適合購物、通勤與日常外出使用。
					</p>

					<p>
						使用自然質感帆布材質，
						簡約設計保留手作溫度。
					</p>
				</div>

				<div className="product-info__divider" />

				<div className="product-info__field">
					<div className="product-info__field-header">
						<span>尺寸</span>
						<span>{selectedSize}</span>
					</div>

					<div className="product-info__sizes">
						{sizes.map((size) => (
							<button
								key={size.value}
								type="button"
								className={
									selectedSize === size.value
										? "is-active"
										: ""
								}
								onClick={() =>
									setSelectedSize(
										size.value
									)
								}
							>
								{size.label}
							</button>
						))}
					</div>
				</div>

				<div className="product-info__field">
					<div className="product-info__field-header">
						<span>數量</span>
					</div>

					<div className="product-info__quantity">
						<button
							type="button"
							onClick={handleDecrease}
							disabled={quantity <= 1}
						>
							−
						</button>

						<span>{quantity}</span>

						<button
							type="button"
							onClick={handleIncrease}
						>
							＋
						</button>
					</div>
				</div>

				<div className="product-info__meta">
					<div>
						<span>材質</span>
						<strong>100% 棉帆布</strong>
					</div>

					<div>
						<span>產地</span>
						<strong>台灣</strong>
					</div>

					<div>
						<span>庫存</span>
						<strong>有庫存</strong>
					</div>
				</div>
			</div>

			<div className="product-info__actions">
				<button
					type="button"
					className="product-info__cart"
					onClick={handleAddToCart}
				>
					加入購物車
				</button>

				<button
					type="button"
					className="product-info__buy"
					onClick={handleBuyNow}
				>
					立即購買
				</button>
			</div>
		</section>
	);
}
