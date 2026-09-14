/* pages/News/NewsCard.jsx */

import "./NewsCard.css";

function NewsCard({ news }) {
	return (
		<article className="news-card">
			<a
				className="news-card__link"
				href={`/news/${news.id}`}
			>
				<div className="news-card__date">
					{news.date}
				</div>

				<div className="news-card__category">
					{news.category}
				</div>

				<div className="news-card__content">
					<h2 className="news-card__title">
						{news.title}
					</h2>

					<p className="news-card__description">
						{news.description}
					</p>
				</div>

				<div className="news-card__arrow">
					<span>查看</span>
					<span aria-hidden="true">→</span>
				</div>
			</a>
		</article>
	);
}

export default NewsCard;
