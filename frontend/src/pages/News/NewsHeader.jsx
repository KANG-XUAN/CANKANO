/* pages/News/NewsHero.jsx */

import "./NewsHeader.css";

function NewsHeader() {
	return (
		<header className="news-header">
			<div className="news-header__container">
				<div>
					<p className="news-header__eyebrow">
						NEWS
					</p>

					<h1 className="news-header__title">
						最新消息
					</h1>
				</div>

				<p className="news-header__description">
					掌握 CANKANO 最新品牌動態、商品資訊與活動消息。
				</p>
			</div>
		</header>
	);
}

export default NewsHeader;
