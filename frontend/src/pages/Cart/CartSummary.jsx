import { Link } from "react-router-dom";

import "./CartSummary.css";

function CartSummary() {
	return (
		<aside className="cart-summary">

			<div className="cart-summary__header">
				<span className="cart-summary__eyebrow">
					ORDER SUMMARY
				</span>

				<h2>
					訂單明細
				</h2>
			</div>


			{/* =================================================
			   DETAIL LIST
			   ================================================= */}

			<div className="cart-summary__details">

				{/* 商品 */}
				<div className="summary-group">

					<div className="summary-row summary-row--product">
						<span>
							碧水雲濤（客製化）
						</span>

						<strong>
							$799
						</strong>
					</div>

					<div className="summary-subrow">
						<span>
							自訂圖片
						</span>

						<span>
							+$100
						</span>
					</div>

					<div className="summary-subrow summary-subrow--discount">
						<span>
							滿額折扣（800折80）
						</span>

						<span>
							-$80
						</span>
					</div>

				</div>


				{/* 商品 */}
				<div className="summary-group">

					<div className="summary-row summary-row--product">
						<span>
							小型帆布袋（亞麻色）× 23
						</span>

						<strong>
							$6,877
						</strong>
					</div>

					<div className="summary-subrow summary-subrow--discount">
						<span>
							批發折扣（10）× 23
						</span>

						<span>
							-$230
						</span>
					</div>

				</div>


				{/* 運費 */}
				<div className="summary-group">

					<div className="summary-row summary-row--product">
						<span>
							運費（本島）
						</span>

						<strong>
							$149
						</strong>
					</div>

					<div className="summary-subrow summary-subrow--discount">
						<span>
							免運折扣
						</span>

						<span>
							-$149
						</span>
					</div>

				</div>

			</div>


			{/* =================================================
			   TOTAL
			   ================================================= */}

			<div className="cart-summary__total">

				<div className="summary-total-row">
					<span>
						總金額
					</span>

					<strong>
						$7,925
					</strong>
				</div>

				<div className="summary-total-row summary-total-row--discount">
					<span>
						總折扣
					</span>

					<strong>
						-$459
					</strong>
				</div>

				<div className="summary-total-final">
					<span>
						訂單總價
					</span>

					<strong>
						NT$ 7,466
					</strong>
				</div>

			</div>


			{/* =================================================
			   ACTIONS
			   ================================================= */}

			<div className="cart-summary__actions">

				<button
					type="button"
					className="cart-summary__shipping"
				>
					配送設定
				</button>

				<p className="cart-summary__shipping-info">
					目前配送至：台灣本島
				</p>

				<Link
					to="/ordersuccess"
					className="cart-summary__checkout"
				>
					前往結帳
				</Link>

			</div>

		</aside>
	);
}

export default CartSummary;
