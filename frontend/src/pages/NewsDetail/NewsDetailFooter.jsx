/* pages/NewsDetail/NewsDetailFooter.jsx */

import "./NewsDetailFooter.css";

const NewsDetailFooter = () => {
	return (
		<footer className="news-detail-footer">
			<div className="news-detail-footer-line" />

			<a
				className="news-detail-back"
				href="/news"
			>
				<span>←</span>
				返回最新消息
			</a>
		</footer>
	);
};

export default NewsDetailFooter;
