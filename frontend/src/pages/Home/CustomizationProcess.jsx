// pages/Home/CustomizationProcess.jsx

import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./CustomizationProcess.css";

const steps = [
	{
		id: "01",
		title: "DEFINE",
		description: "說出你的想法，從需求與方向開始。",
	},
	{
		id: "02",
		title: "CREATE",
		description: "選擇細節，讓設計逐漸成為你的樣子。",
	},
	{
		id: "03",
		title: "BECOME",
		description: "確認你的作品，讓想像真正成為日常。",
	},
];

export default function CustomizationProcess() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;

		if (!section) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						section.classList.add("is-visible");
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		observer.observe(section);

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="customization-process"
		>
			{/* =========================
				BACKGROUND
			========================== */}

			<div
				className="customization-process__background"
				aria-hidden="true"
			/>

			{/* =========================
				HEADER
			========================== */}

			<header className="customization-process__header">
				<div>
					<p className="customization-process__eyebrow">
						03 / CUSTOMIZE
					</p>

					<h2 className="customization-process__title">
						Make It
						<br />
						Yours.
					</h2>
				</div>

				<p className="customization-process__intro">
					從一個想法開始，
					<br />
					一步一步，創造屬於你的作品。
				</p>
			</header>

			{/* =========================
				PROCESS
			========================== */}

			<div className="customization-process__content">

				<div className="customization-process__steps">
					{steps.map((step, index) => (
						<article
							className="customization-step"
							key={step.id}
							style={{
								"--step-index": index,
							}}
						>
							<div className="customization-step__top">
								<span className="customization-step__number">
									{step.id}
								</span>

								<span className="customization-step__line" />
							</div>

							<div className="customization-step__body">
								<h3 className="customization-step__title">
									{step.title}
								</h3>

								<p className="customization-step__description">
									{step.description}
								</p>
							</div>
						</article>
					))}
				</div>

				{/* =========================
					CTA
				========================== */}

				<div className="customization-process__action">
					<p className="customization-process__action-label">
						READY TO CREATE?
					</p>

					<Link
						to="/design"
						className="customization-process__button"
					>
						<span>立即嘗試</span>

						<i aria-hidden="true">
							↗
						</i>
					</Link>
				</div>
			</div>
		</section>
	);
}
