/* pages/News/NewsFeatured.jsx */

import { useEffect, useState } from "react";

import "./NewsFeatured.css";

const featuredNews = [
	{
		id: 1,
		date: "2026.09.08",
		category: "品牌消息",
		title: "CANKANO，讓每一件日常用品成為自己的作品",
		description:
			"從生活中的靈感出發，探索客製化與個人創作之間更多可能。",
		image:
			"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=80",
	},
	{
		id: 2,
		date: "2026.09.01",
		category: "商品資訊",
		title: "全新帆布袋系列正式推出",
		description:
			"簡單、耐用，也留給你足夠的空間放入自己的設計。",
		image:
			"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
	},
	{
		id: 3,
		date: "2026.08.16",
		category: "活動公告",
		title: "CANKANO 設計卡功能正式開放",
		description:
			"保存你的設計，帶著它離開，也可以隨時回來繼續創作。",
		image:
			"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
	},
];

const AUTO_PLAY_DELAY = 5000;

function NewsFeatured() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState("next");

	const totalNews = featuredNews.length;

	const handleNext = () => {
		setDirection("next");

		setCurrentIndex((prevIndex) => {
			return (prevIndex + 1) % totalNews;
		});
	};

	const handlePrevious = () => {
		setDirection("previous");

		setCurrentIndex((prevIndex) => {
			return prevIndex === 0 ? totalNews - 1 : prevIndex - 1;
		});
	};

	useEffect(() => {
		if (totalNews <= 1) {
			return;
		}

		const timer = setTimeout(() => {
			setDirection("next");

			setCurrentIndex((prevIndex) => {
				return (prevIndex + 1) % totalNews;
			});
		}, AUTO_PLAY_DELAY);

		return () => {
			clearTimeout(timer);
		};
	}, [currentIndex, totalNews]);

	const handleDotClick = (index) => {
		if (index === currentIndex) {
			return;
		}

		setDirection(index > currentIndex ? "next" : "previous");
		setCurrentIndex(index);
	};

	return (
		<section className="news-featured">
			<div className="news-featured__viewport">
				<div
					className={`news-featured__track news-featured__track--${direction}`}
					style={{
						transform: `translateX(-${
							currentIndex * 100
						}%)`,
					}}
				>
					{featuredNews.map((news) => (
						<article
							key={news.id}
							className="news-featured__slide"
						>
							<div className="news-featured__image-wrapper">
								<img
									src={news.image}
									alt={news.title}
									className="news-featured__image"
								/>
							</div>

							<div className="news-featured__content">
								<div className="news-featured__meta">
									<span>
										{news.category}
									</span>

									<span>
										{news.date}
									</span>
								</div>

								<h2 className="news-featured__title">
									{news.title}
								</h2>

								<p className="news-featured__description">
									{news.description}
								</p>

								<a
									href={`/news/${news.id}`}
									className="news-featured__read-more"
								>
									READ MORE →
								</a>
							</div>
						</article>
					))}
				</div>

				{/* 左側切換區域 */}
				{totalNews > 1 && (
					<button
						type="button"
						className="news-featured__side-control news-featured__side-control--left"
						onClick={handlePrevious}
						aria-label="上一則消息"
					>
						<span className="news-featured__side-arrow">
							←
						</span>

						<span className="news-featured__side-label">
							PREV
						</span>
					</button>
				)}

				{/* 右側切換區域 */}
				{totalNews > 1 && (
					<button
						type="button"
						className="news-featured__side-control news-featured__side-control--right"
						onClick={handleNext}
						aria-label="下一則消息"
					>
						<span className="news-featured__side-label">
							NEXT
						</span>

						<span className="news-featured__side-arrow">
							→
						</span>
					</button>
				)}

				{/* 頁數 */}
				{totalNews > 1 && (
					<div className="news-featured__pagination">
						{featuredNews.map((news, index) => (
							<button
								key={news.id}
								type="button"
								className={`news-featured__dot ${
									index === currentIndex
										? "is-active"
										: ""
								}`}
								onClick={() =>
									handleDotClick(index)
								}
								aria-label={`第 ${
									index + 1
								} 則消息`}
								aria-current={
									index === currentIndex
										? "true"
										: undefined
								}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default NewsFeatured;