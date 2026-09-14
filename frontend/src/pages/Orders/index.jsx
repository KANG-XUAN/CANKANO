import { useState } from "react";
import "./index.css";

import OrdersHeader from "./OrdersHeader";
import OrderSummaryLeft from "./OrderSummaryLeft";
import OrderSummaryRight from "./OrderSummaryRight";
import OrderDetailLeft from "./OrderDetailLeft";
import OrderDetailRight from "./OrderDetailRight";

const ORDERS = [
	{
		id: "CKO-20260914-0001",
		status: "confirming",
		createdAt: "2026-09-14 13:42:08",
		completedAt: null,
		cancelledAt: null,
		total: 1280,
		discount: 120,
		items: [
			{
				id: 1,
				name: "Classic Canvas Tote Bag",
				price: 680,
				quantity: 1,
				image: "/assets/products/canvas-bag.jpg",
			},
			{
				id: 2,
				name: "Basic Cotton T-shirt",
				price: 600,
				quantity: 1,
				image: "/assets/products/t-shirt.jpg",
			},
		],
		progress: {
			confirmed: {
				completed: false,
				time: null,
			},
			shipped: {
				completed: false,
				time: null,
			},
			delivering: {
				completed: false,
				time: null,
			},
		},
	},
	{
		id: "CKO-20260913-0008",
		status: "processing",
		createdAt: "2026-09-13 16:20:15",
		completedAt: null,
		cancelledAt: null,
		total: 980,
		discount: 80,
		items: [
			{
				id: 3,
				name: "Custom Classic Canvas Tote Bag",
				price: 980,
				quantity: 1,
				image: "/assets/products/canvas-bag-02.jpg",
			},
		],
		progress: {
			confirmed: {
				completed: true,
				time: "2026-09-13 16:21:03",
			},
			shipped: {
				completed: true,
				time: "2026-09-14 09:30:42",
			},
			delivering: {
				completed: false,
				time: null,
			},
		},
	},
	{
		id: "CKO-20260910-0021",
		status: "completed",
		createdAt: "2026-09-10 10:18:32",
		completedAt: "2026-09-12 15:42:18",
		cancelledAt: null,
		total: 1560,
		discount: 240,
		items: [
			{
				id: 4,
				name: "Everyday Oversized T-shirt",
				price: 900,
				quantity: 1,
				image: "/assets/products/t-shirt-02.jpg",
			},
			{
				id: 5,
				name: "Classic Canvas Tote Bag",
				price: 660,
				quantity: 1,
				image: "/assets/products/canvas-bag.jpg",
			},
		],
		progress: {
			confirmed: {
				completed: true,
				time: "2026-09-10 10:19:11",
			},
			shipped: {
				completed: true,
				time: "2026-09-11 08:22:43",
			},
			delivering: {
				completed: true,
				time: "2026-09-12 15:42:18",
			},
		},
	},
	{
		id: "CKO-20260908-0017",
		status: "cancelled",
		createdAt: "2026-09-08 18:32:10",
		completedAt: null,
		cancelledAt: "2026-09-08 18:37:24",
		total: 720,
		discount: 80,
		items: [
			{
				id: 6,
				name: "Minimal Cotton T-shirt",
				price: 720,
				quantity: 1,
				image: "/assets/products/t-shirt-03.jpg",
			},
		],
		progress: {
			confirmed: {
				completed: false,
				time: null,
			},
			shipped: {
				completed: false,
				time: null,
			},
			delivering: {
				completed: false,
				time: null,
			},
		},
	},
];

function Orders() {
	const [openOrderId, setOpenOrderId] = useState(null);

	const handleToggle = (orderId) => {
		setOpenOrderId((currentId) =>
			currentId === orderId ? null : orderId
		);
	};

	return (
		<main className="orders-page">
			<section className="orders-container">
				<OrdersHeader orderCount={ORDERS.length} />

				<section className="orders-list">
					{ORDERS.map((order) => {
						const isOpen = openOrderId === order.id;

						return (
							<article
								className={`order-card ${
									isOpen ? "is-open" : ""
								}`}
								key={order.id}
							>
								<button
									className="order-card-trigger"
									type="button"
									onClick={() => handleToggle(order.id)}
									aria-expanded={isOpen}
								>
									<OrderSummaryLeft order={order} />

									<OrderSummaryRight
										order={order}
										isOpen={isOpen}
									/>

									{!isOpen && (
										<div className="order-expand-hint">
											<span className="order-expand-line" />
											<span className="order-expand-text">
												▽ 查看完整訂單 ▽
											</span>
											<span className="order-expand-line" />
										</div>
									)}
								</button>

								<div
									className={`order-detail-wrapper ${
										isOpen ? "is-visible" : ""
									}`}
								>
									<div className="order-detail">
										<OrderDetailLeft order={order} />

										<OrderDetailRight order={order} />
									</div>
								</div>
							</article>
						);
					})}
				</section>
			</section>
		</main>
	);
}

export default Orders;
