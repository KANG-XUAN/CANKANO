// pages/Cart/index.jsx

import { useState } from "react";

import "./index.css";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";


const DEMO_PRODUCTS = [
	{
		id: 1,
		name: "碧水雲濤",
		variant: "客製化款式",
		customized: true,
		price: 799,
		quantity: 1,
		image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
	},

	{
		id: 2,
		name: "小型帆布袋",
		variant: "亞麻色",
		customized: false,
		price: 299,
		quantity: 23,
		image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
	},

	{
		id: 3,
		name: "森林手作杯",
		variant: "霧面白",
		customized: false,
		price: 680,
		quantity: 2,
		image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a",
	},

	{
		id: 4,
		name: "日常托盤",
		variant: "天然木色",
		customized: false,
		price: 880,
		quantity: 1,
		image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88",
	},
];


function Cart() {
	const [selectedIds, setSelectedIds] = useState(
		DEMO_PRODUCTS.map((product) => product.id)
	);


	const handleSelect = (id) => {
		setSelectedIds((current) => {
			if (current.includes(id)) {
				return current.filter(
					(itemId) => itemId !== id
				);
			}

			return [...current, id];
		});
	};


	return (
		<main className="cart-page">

			<div className="cart-page__container">

				{/* ============================================
				   PAGE HEADER
				   ============================================ */}

				<header className="cart-page__header">

					<div>
						<span className="cart-page__eyebrow">
							MY CART
						</span>

						<h1>
							購物車
						</h1>
					</div>

					<span className="cart-page__count">
						{DEMO_PRODUCTS.length} 件商品
					</span>

				</header>


				{/* ============================================
				   MAIN
				   ============================================ */}

				<div className="cart-page__layout">

					<section className="cart-page__products">

						<div className="cart-page__select-all">
							<label>
								<input
									type="checkbox"
									checked={
										selectedIds.length ===
										DEMO_PRODUCTS.length
									}
									onChange={() => {
										if (
											selectedIds.length ===
											DEMO_PRODUCTS.length
										) {
											setSelectedIds([]);
										} else {
											setSelectedIds(
												DEMO_PRODUCTS.map(
													(product) =>
														product.id
												)
											);
										}
									}}
								/>

								<span>
									全選
								</span>
							</label>

							<span>
								已選 {selectedIds.length} 件
							</span>
						</div>


						<div className="cart-page__list">

							{DEMO_PRODUCTS.map((product) => (
								<CartItem
									key={product.id}
									product={product}
									selected={selectedIds.includes(
										product.id
									)}
									onSelect={() =>
										handleSelect(product.id)
									}
								/>
							))}

						</div>

					</section>


					<section className="cart-page__summary">

						<CartSummary />

					</section>

				</div>

			</div>

		</main>
	);
}

export default Cart;
