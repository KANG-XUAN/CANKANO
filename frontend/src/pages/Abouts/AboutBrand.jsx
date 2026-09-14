// pages/Abouts/AboutBrand.jsx

import "./AboutBrand.css";

function AboutBrand() {
	return (
		<section className="about-brand">
			<div className="about-brand__background">
				<div className="about-brand__decor about-brand__decor--one" />
				<div className="about-brand__decor about-brand__decor--two" />
			</div>

			<div className="about-brand__container">
				<div className="about-brand__content">
					<p className="about-brand__eyebrow">
						ABOUT CANKANO
					</p>

					<h1 className="about-brand__title">
						Make It
						<br />
						<span>Yours.</span>
					</h1>

					<p className="about-brand__description">
						CANKANO 相信，每一件日常用品，
						<br />
						都可以成為表達自我的一部分。
					</p>

					<div className="about-brand__line" />
				</div>

				<div className="about-brand__visual">
					<div className="about-brand__visual-card">
						<span className="about-brand__visual-label">
							CREATE
						</span>

						<div className="about-brand__visual-circle">
							<span>C</span>
						</div>

						<span className="about-brand__visual-label">
							YOUR STORY
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutBrand;
