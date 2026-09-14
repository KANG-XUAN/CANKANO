/* pages/NewsDetail/index.jsx */

import "./index.css";

import NewsDetailHeader from "./NewsDetailHeader";
import NewsArticle from "./NewsArticle";
import NewsDetailFooter from "./NewsDetailFooter";

const NewsDetail = () => {
	return (
		<main className="news-detail-page">
			<div className="news-detail-container">
				<NewsDetailHeader />

				<NewsArticle />

				<NewsDetailFooter />
			</div>
		</main>
	);
};

export default NewsDetail;
