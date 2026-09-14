// pages/OrderSuccess/OrderSuccessContent.jsx

import { Link } from "react-router-dom";

import "./OrderSuccessContent.css";

export default function OrderSuccessContent() {
	return (
		<section className="order-success-content">

			{/* 完成訊息 */}
			<div className="order-success-content__message">

				<span className="order-success-content__eyebrow">
					ORDER COMPLETED
				</span>

				<h1 className="order-success-content__title">
					感謝您的支持
				</h1>

				{/* CANKANO Brand Symbol */}
				<svg
					viewBox="0 0 40 40"
					width="90"
					height="90"
					xmlns="http://www.w3.org/2000/svg"
					aria-label="CANKANO"
					role="img"
				>
					{/* Main Organic Form */}
					<path
						d="
			M3.5 11
			C3.5 6.8 6.8 3.5 11 3.5
			H29
			C33.2 3.5 36.5 6.8 36.5 11
			V29
			C36.5 33.2 33.2 36.5 29 36.5
			H11
			C6.8 36.5 3.5 33.2 3.5 29
			V11Z
		"
						fill="var(--color-primary-600)"
					/>

					{/* Fabric Fold */}
					<path
						d="
			M4.2 11.8
			C9.2 14.8 14.8 16 20.2 15.2
			C26 14.4 31.2 11.5 35.8 11.8
		"
						fill="none"
						stroke="var(--color-primary-300)"
						strokeWidth="2.4"
						strokeLinecap="round"
					/>

					{/* Organic Leaf */}
					<path
						d="
			M13.5 30
			C13.8 22.2 18.5 16.7 29.8 14.8
			C29.2 23.3 24.1 28.6 13.5 30Z
		"
						fill="var(--color-clay-300)"
					/>

					{/* Leaf Stem */}
					<path
						d="
			M14.2 29.2
			C18.2 25.2 22.5 20.8 28.4 15.8
		"
						fill="none"
						stroke="var(--color-linen-50)"
						strokeWidth="1.8"
						strokeLinecap="round"
					/>

					{/* Small Organic Detail */}
					<path
						d="
			M8.5 29.5
			C10.5 30.7 12.7 31.3 15.1 31.3
		"
						fill="none"
						stroke="var(--color-primary-500)"
						strokeWidth="1.5"
						strokeLinecap="round"
						opacity="0.85"
					/>
				</svg>

				<p className="order-success-content__description">
					您的訂單已成功建立，
					<br />
					我們會用心準備您的專屬商品。
				</p>
			</div>

			{/* 訂單資訊 */}
			<div className="order-success-content__info">

				<div className="order-success-content__info-item">
					<span className="order-success-content__info-label">
						訂單編號
					</span>

					<span className="order-success-content__info-value">
						MORI20260914001
					</span>
				</div>

				<div className="order-success-content__info-item">
					<span className="order-success-content__info-label">
						建立日期
					</span>

					<span className="order-success-content__info-value">
						2026 / 09 / 14
					</span>
				</div>

			</div>

			{/* 操作 */}
			<div className="order-success-content__actions">

				<Link
					to={"/"}
					className="order-success-content__button order-success-content__button--secondary"
				>
					返回首頁
				</Link>

				<Link
					to={"/orders"}
					className="order-success-content__button order-success-content__button--primary"
				>
					查看訂單
				</Link>

			</div>

			{/* 品牌文字 */}
			<p className="order-success-content__brand">
				Thank you for choosing MORI.
			</p>

		</section>
	);
}
