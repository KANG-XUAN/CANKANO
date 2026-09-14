/* pages/NewsDetail/NewsDetailHeader.jsx */

import "./NewsDetailHeader.css";

const NewsDetailHeader = () => {
	return (
		<header className="news-detail-header">
			<nav className="news-detail-breadcrumb">
				<a href="/">首頁</a>
				<span>/</span>
				<a href="/news">最新消息</a>
				<span>/</span>
				<span>最新消息標題</span>
			</nav>

			<div className="news-detail-meta">
				<span className="news-detail-category">
					品牌公告
				</span>

				<time dateTime="2026-09-10">
					2026.09.10
				</time>
			</div>

			<h1>
				CANKANO 全新客製化系列正式上線
			</h1>

			<div className="news-detail-author">
				發布者：CANKANO 編輯部
			</div>
		</header>
	);
};

export default NewsDetailHeader;
