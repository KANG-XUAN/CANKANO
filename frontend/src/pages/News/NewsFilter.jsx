/* pages/News/NewsFilter.jsx */

import "./NewsFilter.css";

const categories = [
	"全部",
	"品牌消息",
	"商品資訊",
	"活動公告",
];

function NewsFilter() {
	return (
		<div className="news-filter">
			<div className="news-filter__categories">
				{categories.map((category, index) => (
					<button
						key={category}
						type="button"
						className={`news-filter__button ${
							index === 0
								? "news-filter__button--active"
								: ""
						}`}
					>
						{category}
					</button>
				))}
			</div>

			<p className="news-filter__result">
				共 8 則消息
			</p>
		</div>
	);
}

export default NewsFilter;
