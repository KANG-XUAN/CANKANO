/* pages/News/index.jsx */

import NewsHeader from "./NewsHeader";
import NewsFeatured from "./NewsFeatured";
import NewsFilter from "./NewsFilter";
import NewsList from "./NewsList";

import "./index.css";

function News() {
	return (
		<main className="news-page">
			<NewsHeader />

			<div className="news-page__container">
				<NewsFeatured />
				<NewsFilter />
				<NewsList />
			</div>
		</main>
	);
}

export default News;
