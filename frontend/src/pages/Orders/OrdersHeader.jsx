import "./OrdersHeader.css";

function OrdersHeader({ orderCount }) {
	return (
		<header className="orders-header">
			<div>
				<p className="orders-eyebrow">MY ACCOUNT</p>

				<h1>我的訂單</h1>

				<p className="orders-description">
					查看你的訂單狀態與商品配送進度
				</p>
			</div>

			<div className="orders-count">
				<span>{orderCount}</span>
				筆訂單
			</div>
		</header>
	);
}

export default OrdersHeader;
