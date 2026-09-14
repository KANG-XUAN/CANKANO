// components/common/Header.jsx

import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header className="app-header">

			{/* ============================================================
			   Brand
			   ============================================================ */}

			<Link to="/" className="brand">

				{/* ========================================================
				   Logo Icon
				   ======================================================== */}

				<div className="brand-icon">

					{/* CANKANO Brand Symbol */}
					<svg
						viewBox="0 0 40 40"
						width="38"
						height="38"
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
							fill="var(--color-primary-600)"
						/>

						{/* Fabric Fold */}
						<path
							d="
			M4.2 11.8
			C9.2 14.8 14.8 16 20.2 15.2
			C26 14.4 31.2 11.5 35.8 11.8
		"
							fill="none"
							stroke="var(--color-primary-300)"
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
							stroke="var(--color-primary-500)"
							strokeWidth="1.5"
							strokeLinecap="round"
							opacity="0.85"
						/>
					</svg>


				</div>


				{/* ========================================================
				   Brand Name
				   ======================================================== */}

				<div className="brand-title">

					{/* C */}
					<span className="brand-letter">
						C
					</span>


					{/* 第一組 AN */}
					<span className="brand-an">
						<span className="brand-an-text">
							AN
						</span>
					</span>


					{/* K */}
					<span className="brand-letter">
						K
					</span>


					{/* 第二組 AN */}
					<span className="brand-an">
						<span className="brand-an-text">
							AN
						</span>
					</span>


					{/* O */}
					<span className="brand-letter">
						O
					</span>


					{/* ====================================================
					   Slogan
					   ==================================================== */}

					<span className="text-secondary">

						{/* CSS 畫出的短橫線 */}
						<span className="slogan-line"></span>

						<span>
							Make It Yours.
						</span>

					</span>

				</div>

			</Link>


			{/* ============================================================
			   Navigation
			   ============================================================ */}

			<nav className="main-nav">

				{/* 關於我們 */}
				<Link to="/abouts">
					關於我們
				</Link>

				{/* 最新消息 */}
				<Link to="/news">
					最新消息
				</Link>

				{/* ========================================================
				   瀏覽商品
				   ======================================================== */}

				<div className="nav-dropdown">

					<button type="button">

						瀏覽商品

						<span className="dropdown-arrow">
							⌄
						</span>

					</button>


					<div className="dropdown-menu">

						<Link to="/products">
							商品列表
						</Link>

						<Link to="/design">
							開始設計
						</Link>

					</div>

				</div>


				{/* ========================================================
				   會員中心
				   ======================================================== */}

				<div className="nav-dropdown">

					<button type="button">

						會員服務

						<span className="dropdown-arrow">
							⌄
						</span>

					</button>


					<div className="dropdown-menu">

						<Link to="/orders">
							我的訂單
						</Link>

						{/* <a href="#">
							我的作品
						</a> */}

						<Link to="/cart">
							購物車
						</Link>

						<Link to="/auth">
							登入/註冊
						</Link>

					</div>

				</div>

			</nav>

		</header>
	)
}

export default Header
