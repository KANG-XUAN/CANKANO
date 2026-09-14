// pages/Home/FeaturedProducts.jsx

import { useEffect, useRef, useState } from "react";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom";

const products = [
	{
		id: 1,
		name: "Linen Overshirt",
		category: "OUTERWEAR",
		price: "$128",
		image:
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
	},
	{
		id: 2,
		name: "Natural Cotton Shirt",
		category: "TOPS",
		price: "$96",
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
	},
	{
		id: 3,
		name: "Soft Knit Cardigan",
		category: "KNITWEAR",
		price: "$148",
		image:
			"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
	},
	{
		id: 4,
		name: "Relaxed Linen Pants",
		category: "BOTTOMS",
		price: "$112",
		image:
			"https://images.unsplash.com/photo-1506629905607-d9e6f7f6e7a5?auto=format&fit=crop&w=900&q=85",
	},
	{
		id: 5,
		name: "Minimal Canvas Bag",
		category: "ACCESSORIES",
		price: "$78",
		image:
			"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
	},
	{
		id: 6,
		name: "Everyday Cotton Tee",
		category: "TOPS",
		price: "$68",
		image:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
	},
];

export default function FeaturedProducts() {
	const viewportRef = useRef(null);

	const isDragging = useRef(false);
	const startX = useRef(0);
	const startScrollLeft = useRef(0);

	const [isHovered, setIsHovered] = useState(false);

	/*
		複製三組商品。

		第一組
		第二組
		第三組

		初始化時停在第二組，
		因此往左或往右都可以循環。
	*/
	const loopProducts = [
		...products,
		...products,
		...products,
	];


	/* =========================
	   INITIAL POSITION
	========================= */

	useEffect(() => {
		const viewport = viewportRef.current;

		if (!viewport) return;

		const setWidth =
			viewport.scrollWidth / 3;

		viewport.scrollLeft = setWidth;

		const handleResize = () => {
			const newSetWidth =
				viewport.scrollWidth / 3;

			viewport.scrollLeft = newSetWidth;
		};

		window.addEventListener(
			"resize",
			handleResize
		);

		return () => {
			window.removeEventListener(
				"resize",
				handleResize
			);
		};
	}, []);


	/* =========================
	   AUTO PLAY
	========================= */

	useEffect(() => {
		const viewport = viewportRef.current;

		if (!viewport || isHovered) return;

		let animationFrame;
		let lastTime = performance.now();

		const speed = 38;

		const animate = (currentTime) => {
			const delta =
				(currentTime - lastTime) / 1000;

			lastTime = currentTime;

			if (!isDragging.current) {
				viewport.scrollLeft +=
					speed * delta;
			}

			const setWidth =
				viewport.scrollWidth / 3;

			/*
				到第三組附近時，
				往回移動一組。

				視覺上完全不會察覺，
				因為前後內容完全相同。
			*/
			if (
				viewport.scrollLeft >=
				setWidth * 2
			) {
				viewport.scrollLeft -=
					setWidth;
			}

			animationFrame =
				requestAnimationFrame(
					animate
				);
		};

		animationFrame =
			requestAnimationFrame(
				animate
			);

		return () => {
			cancelAnimationFrame(
				animationFrame
			);
		};
	}, [isHovered]);


	/* =========================
	   POINTER DOWN
	========================= */

	const handlePointerDown = (event) => {
		const viewport =
			viewportRef.current;

		if (!viewport) return;

		isDragging.current = true;

		startX.current =
			event.clientX;

		startScrollLeft.current =
			viewport.scrollLeft;

		viewport.classList.add(
			"is-dragging"
		);

		viewport.setPointerCapture(
			event.pointerId
		);
	};


	/* =========================
	   POINTER MOVE
	========================= */

	const handlePointerMove = (event) => {
		const viewport =
			viewportRef.current;

		if (
			!viewport ||
			!isDragging.current
		) {
			return;
		}

		const distance =
			event.clientX -
			startX.current;

		viewport.scrollLeft =
			startScrollLeft.current -
			distance;

		const setWidth =
			viewport.scrollWidth / 3;

		/*
			往左拖到第一組，
			跳到第二組。
		*/
		if (
			viewport.scrollLeft <= 0
		) {
			viewport.scrollLeft +=
				setWidth;

			startScrollLeft.current =
				viewport.scrollLeft;

			startX.current =
				event.clientX;
		}

		/*
			往右拖到第三組，
			回到第二組。
		*/
		if (
			viewport.scrollLeft >=
			setWidth * 2
		) {
			viewport.scrollLeft -=
				setWidth;

			startScrollLeft.current =
				viewport.scrollLeft;

			startX.current =
				event.clientX;
		}
	};


	/* =========================
	   POINTER UP
	========================= */

	const handlePointerUp = (event) => {
		const viewport =
			viewportRef.current;

		if (!viewport) return;

		isDragging.current = false;

		viewport.classList.remove(
			"is-dragging"
		);

		try {
			viewport.releasePointerCapture(
				event.pointerId
			);
		} catch {
			// Pointer capture 已經釋放時不需要處理
		}
	};


	return (
		<section className="featured-products">

			{/* =========================
			   HEADER
			========================= */}

			<div className="featured-products__header">

				<div>
					<p className="featured-products__eyebrow">
						探索 - 大家都在看的
					</p>

					<h2 className="featured-products__title">
						熱門商品
					</h2>
				</div>

				<Link to={"/products"}
					className="featured-products__link"
				>
					VIEW ALL
					<span>↗</span>
				</Link>

			</div>


			{/* =========================
			   CAROUSEL
			========================= */}

			<div
				ref={viewportRef}
				className="featured-products__viewport"

				onMouseEnter={() =>
					setIsHovered(true)
				}

				onMouseLeave={() =>
					setIsHovered(false)
				}

				onPointerDown={
					handlePointerDown
				}

				onPointerMove={
					handlePointerMove
				}

				onPointerUp={
					handlePointerUp
				}

				onPointerCancel={
					handlePointerUp
				}
			>

				<div className="featured-products__track">

					{loopProducts.map(
						(product, index) => (
							<article
								className="featured-product"
								key={`${product.id}-${index}`}
							>

								<a
									href={`/products/${product.id}`}
									className="featured-product__image-link"
									draggable="false"
									onClick={(event) => {
										if (
											Math.abs(
												event.clientX -
												startX.current
											) > 5
										) {
											event.preventDefault();
										}
									}}
								>

									<div className="featured-product__image-wrap">

										<img
											src={product.image}
											alt={product.name}
											className="featured-product__image"
											draggable="false"
										/>

										<span className="featured-product__number">
											{String(
												product.id
											).padStart(
												2,
												"0"
											)}
										</span>

									</div>

								</a>


								<div className="featured-product__info">

									<div>

										<p className="featured-product__category">
											{product.category}
										</p>

										<h3 className="featured-product__name">
											{product.name}
										</h3>

									</div>

									<p className="featured-product__price">
										{product.price}
									</p>

								</div>

							</article>
						)
					)}

				</div>

			</div>


			{/* =========================
			   FOOTER
			========================= */}

			<div className="featured-products__footer">

				<span>
					DRAG TO EXPLORE
				</span>

				<div className="featured-products__line" />

			</div>

		</section>
	);
}