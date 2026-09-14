import { useState } from "react";
import "./ProductAccordion.css";

const accordionItems = [
	{
		id: "features",
		title: "商品特色",
		content: (
			<div className="product-accordion__text">
				<p>
					選用自然質感帆布材質，
					保留布料原本的觸感與紋理。
				</p>

				<p>
					簡約的外型適合日常使用，
					不論購物、通勤或短途外出都能輕鬆搭配。
				</p>
			</div>
		),
	},
	{
		id: "specifications",
		title: "商品規格",
		content: (
			<div className="product-accordion__specifications">
				<div>
					<span>材質</span>
					<strong>100% 棉帆布</strong>
				</div>

				<div>
					<span>尺寸</span>
					<strong>S / M / L</strong>
				</div>

				<div>
					<span>產地</span>
					<strong>台灣</strong>
				</div>

				<div>
					<span>製作方式</span>
					<strong>手工製作</strong>
				</div>
			</div>
		),
	},
	{
		id: "reviews",
		title: "用戶評價",
		content: (
			<div className="product-accordion__reviews">
				<div className="product-accordion__rating">
					<strong>4.8</strong>
					<span>★★★★★</span>
				</div>

				<p>
					目前共有 24 則用戶評價。
				</p>

				<p>
					「很喜歡帆布的質感，大小也很適合日常使用。」
				</p>
			</div>
		),
	},
];

export default function ProductAccordion() {
	const [openId, setOpenId] = useState(null);

	const handleToggle = (id) => {
		setOpenId((current) =>
			current === id ? null : id
		);
	};

	return (
		<section className="product-accordion">
			{accordionItems.map((item) => {
				const isOpen = openId === item.id;

				return (
					<div
						key={item.id}
						className={`product-accordion__item ${
							isOpen ? "is-open" : ""
						}`}
					>
						<button
							type="button"
							className="product-accordion__trigger"
							onClick={() =>
								handleToggle(item.id)
							}
							aria-expanded={isOpen}
						>
							<span>{item.title}</span>

							<span className="product-accordion__icon">
								{isOpen ? "−" : "+"}
							</span>
						</button>

						{isOpen && (
							<div className="product-accordion__content">
								{item.content}
							</div>
						)}
					</div>
				);
			})}
		</section>
	);
}
