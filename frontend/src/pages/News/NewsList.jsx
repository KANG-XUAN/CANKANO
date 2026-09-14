/* pages/News/NewsList.jsx */

import NewsCard from "./NewsCard";

import "./NewsList.css";

const newsData = [
	{
		id: 1,
		date: "2026.09.08",
		category: "品牌消息",
		title: "CANKANO，讓每一件日常用品成為自己的作品",
		description:
			"從生活中的靈感出發，探索客製化與個人創作之間更多可能。",
	},
	{
		id: 2,
		date: "2026.09.01",
		category: "商品資訊",
		title: "全新帆布袋系列正式推出",
		description:
			"簡單、耐用，也留給你足夠的空間放入自己的設計。",
	},
	{
		id: 3,
		date: "2026.08.24",
		category: "品牌消息",
		title: "如何開始設計一件屬於自己的商品？",
		description:
			"從圖片、文字到色彩，分享幾個簡單的客製化設計小技巧。",
	},
	{
		id: 4,
		date: "2026.08.16",
		category: "活動公告",
		title: "CANKANO 設計卡功能正式開放",
		description:
			"保存你的設計，帶著它離開，也可以隨時回來繼續創作。",
	},
	{
		id: 5,
		date: "2026.08.05",
		category: "品牌消息",
		title: "把喜歡的事物帶進日常生活",
		description:
			"我們相信，真正有意義的物品，應該和使用它的人有一點關係。",
	},
	{
		id: 6,
		date: "2026.07.28",
		category: "商品資訊",
		title: "T-shirt 客製化系列正式上線",
		description:
			"選擇你的版型，加入喜歡的圖像與文字，打造專屬於你的日常服飾。",
	},
	{
		id: 7,
		date: "2026.07.15",
		category: "活動公告",
		title: "夏季限定設計活動開始",
		description:
			"以夏日為主題創作你的專屬商品，探索更多設計可能。",
	},
	{
		id: 8,
		date: "2026.07.03",
		category: "品牌消息",
		title: "CANKANO 品牌網站正式上線",
		description:
			"從一個想法開始，讓每個人都能親手打造屬於自己的物品。",
	},
];

function NewsList() {
	return (
		<section className="news-list">
			<div className="news-list__items">
				{newsData.map((news) => (
					<NewsCard
						key={news.id}
						news={news}
					/>
				))}
			</div>
		</section>
	);
}

export default NewsList;
