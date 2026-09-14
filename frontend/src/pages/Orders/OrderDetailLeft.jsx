/* pages/Orders/OrderDetailLeft.jsx */

import "./OrderDetailLeft.css";

function OrderDetailLeft({ order }) {
	return (
		<div className="detail-left">
			<div className="detail-section-header">
				<div>
					<span className="detail-eyebrow">ORDER ITEMS</span>
					<h2>商品明細</h2>
				</div>

				<span className="detail-item-count">
					{order.items.length} 項商品
				</span>
			</div>

			<div className="detail-items">
				{order.items.map((item) => {
					const subtotal = item.price * item.quantity;

					return (
						<div className="detail-item" key={item.id}>
							<div className="detail-item-image">
								<img src={item.image} alt={item.name} />
							</div>

							<div className="detail-item-info">
								<h3>{item.name}</h3>

								<div className="detail-item-meta">
									<span>數量 × {item.quantity}</span>
									<span>客製化商品</span>
								</div>
							</div>

							<div className="detail-item-price">
								<span>NT$ {item.price.toLocaleString()}</span>

								{item.quantity > 1 && (
									<small>
										小計 NT$ {subtotal.toLocaleString()}
									</small>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default OrderDetailLeft;
