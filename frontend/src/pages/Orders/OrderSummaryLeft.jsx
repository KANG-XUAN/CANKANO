/* pages/Orders/OrderSummaryLeft.jsx */

import "./OrderSummaryLeft.css";

function getItemSummary(items) {
	if (!items || items.length === 0) {
		return "無商品";
	}

	const firstItem = items[0];

	if (items.length === 1) {
		return firstItem.name;
	}

	return `${firstItem.name} (${items.length})`;
}

function OrderSummaryLeft({ order }) {
	const endLabel = order.status === "cancelled" ? "取消時間" : "完成時間";
	const endTime =
		order.status === "cancelled"
			? order.cancelledAt
			: order.completedAt;

	return (
		<div className="summary-left">
			<div className="summary-main">
				<p className="summary-product-name">
					{getItemSummary(order.items)}
				</p>

				<p className="summary-total">
					NT$ {order.total.toLocaleString()}
				</p>
			</div>

			<div className="summary-meta">
				<div className="summary-meta-item">
					<span>訂單編號</span>
					<strong>{order.id}</strong>
				</div>

				<div className="summary-meta-item">
					<span>建立時間</span>
					<strong>{order.createdAt}</strong>
				</div>

				<div className="summary-meta-item">
					<span>{endLabel}</span>
					<strong>{endTime || "—"}</strong>
				</div>
			</div>
		</div>
	);
}

export default OrderSummaryLeft;
