/* pages/NewsDetail/NewsArticle.jsx */

import "./NewsArticle.css";

const NewsArticle = () => {
	return (
		<article className="news-article">
			<p>
				我們很高興宣布，CANKANO 全新客製化生活用品系列正式上線。
				從日常使用的帆布袋、T-shirt，到適合收藏與分享的生活小物，
				我們希望讓每一件商品都能真正成為屬於你的作品。
			</p>

			<h2>
				讓商品從「選擇」變成「創作」
			</h2>

			<p>
				過去購買商品時，我們通常只能從既有的款式中選擇。
				但在 CANKANO，我們希望提供另一種可能，讓你從空白開始，
				加入圖片、文字與圖形，打造真正符合自己想法的商品。
			</p>

			<figure className="news-article-image">
				<img
					src="/assets/images/news/news-detail-02.jpg"
					alt="CANKANO 客製化商品"
				/>
			</figure>

			<p>
				你可以自由調整設計的位置、大小、旋轉角度與色彩，
				並透過即時預覽確認完成後的樣貌。
			</p>

			<h2>
				保存你的設計，之後繼續創作
			</h2>

			<p>
				完成的作品可以保存到「我的作品」，
				也可以匯出成專屬的設計卡，方便日後備份、
				分享或重新匯入。
			</p>

			<blockquote>
				每一件商品，都可以從一個想法開始。
			</blockquote>

			<p>
				未來我們也會持續增加更多商品與設計素材，
				讓客製化不只是商品功能，而是一種更自由的創作方式。
			</p>
		</article>
	);
};

export default NewsArticle;
