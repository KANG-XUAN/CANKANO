import "./OrderDetailRight.css";

const PROGRESS_STEPS = [
	{
		key: "confirmed",
		label: "CKO 已確認",
	},
	{
		key: "shipped",
		label: "CKO 寄貨中",
	},
	{
		key: "delivering",
		label: "物流配送中",
	},
];

const STATUS_COLORS = {
	completed: "var(--color-primary-600)",
	current: "var(--color-clay-500)",
	upcoming: "var(--color-neutral-300)",
};

function getStepStatus(order, index) {
	const currentIndex = PROGRESS_STEPS.findIndex(
		(step) => !order.progress[step.key].completed
	);

	if (currentIndex === -1) {
		return "completed";
	}

	if (index < currentIndex) {
		return "completed";
	}

	if (index === currentIndex) {
		return "current";
	}

	return "upcoming";
}

function getLineStyle(leftStatus, rightStatus) {
	const leftColor = STATUS_COLORS[leftStatus];
	const rightColor = STATUS_COLORS[rightStatus];

	return {
		background: `linear-gradient(
			90deg,
			${leftColor} 0%,
			${rightColor} 100%
		)`,
	};
}

function ProgressTimeline({ order }) {
	const stepStatuses = PROGRESS_STEPS.map((_, index) =>
		getStepStatus(order, index)
	);

	return (
		<div className="progress-timeline">
			{PROGRESS_STEPS.map((step, index) => {
				const status = stepStatuses[index];
				const progressData = order.progress[step.key];

				return (
					<div className="progress-step-wrapper" key={step.key}>
						<div className={`progress-step ${status}`}>
							<div className="progress-circle">
								{status === "completed" ? "✓" : index + 1}
							</div>

							<div className="progress-step-label">
								<strong>{step.label}</strong>

								{progressData.time && (
									<span>
										{progressData.time.split(" ")[0]}
										<br />
										{progressData.time.split(" ")[1]}
									</span>
								)}
							</div>
						</div>

						{index < PROGRESS_STEPS.length - 1 && (
							<div
								className="progress-line"
								style={getLineStyle(
									status,
									stepStatuses[index + 1]
								)}
								aria-hidden="true"
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}

function OrderDetailRight({ order }) {
	return (
		<div className="detail-right">
			<div className="detail-progress-section">
				<div className="detail-section-header">
					<div>
						<span className="detail-eyebrow">ORDER STATUS</span>
						<h2>配送進度</h2>
					</div>
				</div>

				<ProgressTimeline order={order} />
			</div>

			<div className="detail-price-section">
				<div className="price-row">
					<span>商品總額</span>
					<strong>
						NT${" "}
						{(order.total + order.discount).toLocaleString()}
					</strong>
				</div>

				<div className="price-row discount">
					<span>訂單折扣</span>
					<strong>
						− NT$ {order.discount.toLocaleString()}
					</strong>
				</div>

				<div className="price-divider" />

				<div className="price-row total">
					<span>訂單總額</span>
					<strong>NT$ {order.total.toLocaleString()}</strong>
				</div>

				<button className="detail-secondary-button" type="button">
					查看設計
					<span>↗</span>
				</button>
			</div>
		</div>
	);
}

export default OrderDetailRight;
