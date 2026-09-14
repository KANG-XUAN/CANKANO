import "./CartItem.css";

function CartItem({
	product,
	selected = false,
	onSelect,
}) {
	const subtotal = product.price * product.quantity;

	return (
		<article
			className={`cart-item ${selected ? "is-selected" : ""}`}
		>
			{/* 選取區 */}
			<button
				type="button"
				className="cart-item__select"
				onClick={onSelect}
				aria-label={`選取 ${product.name}`}
			>
				<span className="cart-item__checkbox">
					{selected && "✓"}
				</span>
			</button>

			{/* 商品概述 */}
			<div className="cart-item__content">

				<div className="cart-item__image">
					<img
						src={product.image}
						alt={product.name}
					/>
				</div>

				<div className="cart-item__info">

					<div className="cart-item__main">
						<h3 className="cart-item__name">
							{product.name}
						</h3>

						{product.variant && (
							<p className="cart-item__variant">
								{product.variant}
							</p>
						)}

						{product.customized && (
							<span className="cart-item__badge">
								客製化
							</span>
						)}
					</div>

					<div className="cart-item__price">
						<span className="cart-item__price-label">
							單價
						</span>

						<strong>
							${product.price.toLocaleString()}
						</strong>
					</div>

					<div className="cart-item__quantity">
						<button type="button">−</button>

						<span>{product.quantity}</span>

						<button type="button">＋</button>
					</div>

					<div className="cart-item__subtotal">
						<span className="cart-item__price-label">
							小計
						</span>

						<strong>
							${subtotal.toLocaleString()}
						</strong>
					</div>

					<button
						type="button"
						className="cart-item__remove"
					>
						移除
					</button>

				</div>
			</div>
		</article>
	);
}

export default CartItem;
