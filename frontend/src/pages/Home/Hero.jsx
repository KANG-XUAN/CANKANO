// pages/Home/Hero.jsx

import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
	{
		id: 1,
		type: "slogan",
		anTarget: null,
		title: (
			<>
				From what you can create,
				<br />
				to what it can become.
			</>
		),
		subtitle: "從可以創作，到可能成真。",
		image:
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
	},
	{
		id: 2,
		type: "an",
		anTarget: "can",
		title: "AN — Authentic & Natural",
		subtitle: "真實、自然，讓創作回到自己。",
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=85",
	},
	{
		id: 3,
		type: "an",
		anTarget: "kano",
		title: "AN — Always New",
		subtitle: "每一個想法，都可能成為新的開始。",
		image:
			"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
	},
];

export default function Hero() {
	const [current, setCurrent] = useState(0);

	const slide = slides[current];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="hero">
			{/* =========================
			   LEFT
			========================== */}

			<div className="hero__left">
				<div className="hero__brand">
					<h1>
						<span className="hero__brand-word">
							C
							<span
								className={`hero__brand-an ${slide.anTarget === "can"
										? "is-focused"
										: ""
									}`}
							>
								AN
							</span>
						</span>

						<br />

						<span className="hero__brand-word">
							K
							<span
								className={`hero__brand-an ${slide.anTarget === "kano"
										? "is-focused"
										: ""
									}`}
							>
								AN
							</span>
							O
						</span>
					</h1>
				</div>

				<div className="hero__statement">
					<div
						className="hero__statement-content"
						key={slide.id}
					>
						<p className="hero__eyebrow">
							{String(slide.id).padStart(2, "0")} / 03
						</p>

						<h2
							className={`hero__title ${slide.type === "an"
									? "hero__title--an"
									: ""
								}`}
						>
							{slide.title}
						</h2>

						<p className="hero__subtitle">
							{slide.subtitle}
						</p>
					</div>

					<button className="hero__cta">
						START CREATING
						<span>↗</span>
					</button>
				</div>
			</div>

			{/* =========================
			   RIGHT
			========================== */}

			<div className="hero__right">
				<div
					className="hero__image-wrapper"
					key={slide.id}
				>
					<img
						src={slide.image}
						alt=""
						className="hero__image"
					/>

					<div className="hero__image-overlay" />
				</div>

				<div className="hero__pagination">
					{slides.map((item, index) => (
						<button
							key={item.id}
							className={`hero__dot ${current === index
									? "is-active"
									: ""
								}`}
							onClick={() => setCurrent(index)}
							aria-label={`Go to slide ${index + 1}`}
						>
							{String(item.id).padStart(2, "0")}
						</button>
					))}
				</div>

				<div className="hero__scroll">
					<span>SCROLL TO EXPLORE</span>
					<span className="hero__scroll-line" />
				</div>
			</div>
		</section>
	);
}
