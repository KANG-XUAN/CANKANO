// pages/Abouts/BrandStory.jsx

import "./BrandStory.css";

function BrandStory() {
	return (
		<section className="brand-story">
			<div className="brand-story__container">
				<div className="brand-story__heading">
					<p className="brand-story__eyebrow">
						OUR STORY
					</p>

					<h2 className="brand-story__title">
						每一件作品，
						<br />
						都應該有自己的故事。
					</h2>
				</div>

				<div className="brand-story__content">
					<p>
						我們相信，生活中的物品不只是物品。
						它們陪伴我們生活，也承載著記憶、
						喜好與個人風格。
					</p>

					<p>
						CANKANO 因此誕生。
						我們希望提供一個簡單而自由的創作空間，
						讓每個人都能將自己的想法，
						轉化成真正屬於自己的日常用品。
					</p>

					<p>
						從一個念頭、一張照片、一句話開始，
						選擇你喜歡的商品，加入你的設計，
						最後讓它成為只屬於你的作品。
					</p>

					<div className="brand-story__quote">
						<span className="brand-story__quote-mark">
							“
						</span>

						<p>
							You create it.
							<br />
							We help make it yours.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrandStory;
