// components/common/Footer.jsx

import './Footer.css'

function Footer() {
	return (
		<footer className="app-footer">

			{/* ============================================================
			   Main Footer
			   ============================================================ */}

			<div className="footer-main">

				<div className="footer-container">


					{/* ========================================================
					   Brand
					   ======================================================== */}

					<div className="footer-brand">

						{/* Logo */}
						<div className="footer-brand-icon">

							<svg
								viewBox="0 0 40 40"
								width="40"
								height="40"
								xmlns="http://www.w3.org/2000/svg"
								aria-label="CANKANO"
								role="img"
							>

								{/* Main Organic Form */}
								<path
									d="
										M3.5 11
										C3.5 6.8 6.8 3.5 11 3.5
										H29
										C33.2 3.5 36.5 6.8 36.5 11
										V29
										C36.5 33.2 33.2 36.5 29 36.5
										H11
										C6.8 36.5 3.5 33.2 3.5 29
										V11Z
									"
									fill="var(--color-primary-500)"
								/>

								{/* Fabric Fold */}
								<path
									d="
										M4.2 11.8
										C9.2 14.8 14.8 16 20.2 15.2
										C26 14.4 31.2 11.5 35.8 11.8
									"
									fill="none"
									stroke="var(--color-primary-200)"
									strokeWidth="2.4"
									strokeLinecap="round"
								/>

								{/* Organic Leaf */}
								<path
									d="
										M13.5 30
										C13.8 22.2 18.5 16.7 29.8 14.8
										C29.2 23.3 24.1 28.6 13.5 30Z
									"
									fill="var(--color-clay-300)"
								/>

								{/* Leaf Stem */}
								<path
									d="
										M14.2 29.2
										C18.2 25.2 22.5 20.8 28.4 15.8
									"
									fill="none"
									stroke="var(--color-linen-50)"
									strokeWidth="1.8"
									strokeLinecap="round"
								/>

								{/* Small Organic Detail */}
								<path
									d="
										M8.5 29.5
										C10.5 30.7 12.7 31.3 15.1 31.3
									"
									fill="none"
									stroke="var(--color-primary-300)"
									strokeWidth="1.5"
									strokeLinecap="round"
									opacity="0.85"
								/>

							</svg>

						</div>


						{/* Brand Name */}
						<div className="footer-brand-name">
							CANKANO
						</div>


						{/* Slogan */}
						<p className="footer-brand-slogan">
							Make It Yours.
						</p>


						{/* Description */}
						<p className="footer-brand-description">
							打造屬於你的設計，
							讓每一件作品都保留獨特的故事與溫度。
						</p>

					</div>


					{/* ========================================================
					   Navigation
					   ======================================================== */}

					<div className="footer-links-group">


						{/* 商品 */}
						<div className="footer-links-column">

							<h3>
								瀏覽商品
							</h3>

							<a href="#">
								所有商品
							</a>

							<a href="#">
								熱門商品
							</a>

							<a href="#">
								最新商品
							</a>

							<a href="#">
								開始設計
							</a>

						</div>


						{/* 關於 */}
						<div className="footer-links-column">

							<h3>
								關於 CANKANO
							</h3>

							<a href="#">
								關於我們
							</a>

							<a href="#">
								品牌故事
							</a>

							<a href="#">
								最新消息
							</a>

							<a href="#">
								聯絡我們
							</a>

						</div>


						{/* 會員 */}
						<div className="footer-links-column">

							<h3>
								會員服務
							</h3>

							<a href="#">
								會員中心
							</a>

							<a href="#">
								我的訂單
							</a>

							<a href="#">
								我的作品
							</a>

							<a href="#">
								購物車
							</a>

						</div>


						{/* 客服 */}
						<div className="footer-links-column">

							<h3>
								需要幫助？
							</h3>

							<a href="#">
								常見問題
							</a>

							<a href="#">
								配送與退貨
							</a>

							<a href="#">
								付款方式
							</a>

							<a href="#">
								客服中心
							</a>

						</div>

					</div>

				</div>

			</div>


			{/* ============================================================
			   Footer Bottom
			   ============================================================ */}

			<div className="footer-bottom">

				<div className="footer-bottom-container">


					{/* Copyright */}
					<div className="footer-copyright">
						© 2026 CANKANO. All rights reserved.
					</div>


					{/* Legal */}
					<div className="footer-legal">

						<a href="#">
							隱私權政策
						</a>

						<span className="footer-legal-divider">
							/
						</span>

						<a href="#">
							使用條款
						</a>

						<span className="footer-legal-divider">
							/
						</span>

						<a href="#">
							購物須知
						</a>

					</div>


					{/* Brand Mark */}
					<div className="footer-mark">
						CKO
					</div>

				</div>

			</div>

		</footer>
	)
}

export default Footer
