/* pages/Auth/AuthCards.jsx */

import { useState } from 'react';
import './AuthCards.css';

const AuthCards = () => {
	const [activeCard, setActiveCard] = useState('login');

	const isLogin = activeCard === 'login';

	const handleSwitch = (type) => {
		setActiveCard(type);
	};

	return (
		<section
			className={`auth-cards ${
				isLogin
					? 'is-login-active'
					: 'is-register-active'
			}`}
		>

			{/* =================================================
			    登入卡片
			    ================================================= */}

			<div
				className="auth-card auth-card--login"
				onClick={() => {
					if (!isLogin) {
						handleSwitch('login');
					}
				}}
			>
				<div className="auth-card__inner">

					<div className="auth-card__header">
						<span className="auth-card__eyebrow">
							WELCOME BACK
						</span>

						<h1 className="auth-card__title">
							登入
						</h1>

						<p className="auth-card__description">
							登入 CANKANO，繼續你的創作。
						</p>
					</div>


					<form
						className="auth-form"
						onSubmit={(event) => event.preventDefault()}
						onClick={(event) => event.stopPropagation()}
					>

						<div className="auth-form__field">
							<label htmlFor="login-email">
								Email
							</label>

							<input
								id="login-email"
								type="email"
								placeholder="your@email.com"
							/>
						</div>


						<div className="auth-form__field">
							<label htmlFor="login-password">
								密碼
							</label>

							<input
								id="login-password"
								type="password"
								placeholder="輸入你的密碼"
							/>
						</div>


						<div className="auth-form__options">

							<label className="auth-checkbox">
								<input type="checkbox" />
								<span>記住我</span>
							</label>

							<button
								type="button"
								className="auth-link"
							>
								忘記密碼？
							</button>

						</div>


						<button
							type="submit"
							className="auth-submit"
						>
							登入
						</button>

					</form>


					<div className="auth-switch">

						<span>
							還沒有帳號？
						</span>

						<button
							type="button"
							onClick={(event) => {
								event.stopPropagation();
								handleSwitch('register');
							}}
						>
							建立帳號
						</button>

					</div>

				</div>
			</div>


			{/* =================================================
			    註冊卡片
			    ================================================= */}

			<div
				className="auth-card auth-card--register"
				onClick={() => {
					if (isLogin) {
						handleSwitch('register');
					}
				}}
			>
				<div className="auth-card__inner">

					<div className="auth-card__header">
						<span className="auth-card__eyebrow">
							CREATE YOUR ACCOUNT
						</span>

						<h1 className="auth-card__title">
							註冊
						</h1>

						<p className="auth-card__description">
							加入 CANKANO，開始創造屬於你的作品。
						</p>
					</div>


					<form
						className="auth-form"
						onSubmit={(event) => event.preventDefault()}
						onClick={(event) => event.stopPropagation()}
					>

						<div className="auth-form__field">
							<label htmlFor="register-name">
								姓名
							</label>

							<input
								id="register-name"
								type="text"
								placeholder="輸入你的姓名"
							/>
						</div>


						<div className="auth-form__field">
							<label htmlFor="register-email">
								Email
							</label>

							<input
								id="register-email"
								type="email"
								placeholder="your@email.com"
							/>
						</div>


						<div className="auth-form__field">
							<label htmlFor="register-password">
								密碼
							</label>

							<input
								id="register-password"
								type="password"
								placeholder="建立你的密碼"
							/>
						</div>


						<button
							type="submit"
							className="auth-submit"
						>
							建立帳號
						</button>

					</form>


					<div className="auth-switch">

						<span>
							已經有帳號？
						</span>

						<button
							type="button"
							onClick={(event) => {
								event.stopPropagation();
								handleSwitch('login');
							}}
						>
							登入
						</button>

					</div>

				</div>
			</div>

		</section>
	);
};

export default AuthCards;