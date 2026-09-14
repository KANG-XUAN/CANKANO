import { useEffect, useState } from "react";
import "./OrderSummaryRight.css";

const STATUS_CONFIG = {
	confirming: {
		label: "買家確認中",
		button: "確認訂單",
	},
	processing: {
		label: "訂單進行中",
		button: "查看物流",
	},
	completed: {
		label: "訂單已完成",
		button: "再次購買",
	},
	cancelled: {
		label: "訂單已取消",
		button: "重新訂購",
	},
};

function getRemainingTime(createdAt) {
	const created = new Date(createdAt.replace(" ", "T"));
	const deadline = new Date(created.getTime() + 15 * 60 * 1000);
	const remaining = Math.max(0, deadline.getTime() - Date.now());

	const minutes = Math.floor(remaining / 60000);
	const seconds = Math.floor((remaining % 60000) / 1000);

	return {
		remaining,
		text: `${String(minutes).padStart(2, "0")}:${String(
			seconds
		).padStart(2, "0")}`,
	};
}

function Countdown({ createdAt }) {
	const [time, setTime] = useState(() =>
		getRemainingTime(createdAt)
	);

	useEffect(() => {
		const updateTime = () => {
			setTime(getRemainingTime(createdAt));
		};

		updateTime();

		const timer = setInterval(updateTime, 1000);

		return () => clearInterval(timer);
	}, [createdAt]);

	return (
		<div className="summary-status-content countdown-content">
			<span className="status-content-label">剩餘確認時間</span>

			<strong className={time.remaining === 0 ? "is-expired" : ""}>
				{time.text}
			</strong>

			<span className="status-content-hint">
				請確認商品設計與訂單內容
			</span>
		</div>
	);
}

function TruckAnimation() {
	return (
		<div className="summary-status-content truck-content">
			<div className="road">
				<div className="truck">
					<div className="truck-body">
						<div className="truck-window" />
					</div>

					<div className="truck-wheel truck-wheel-left" />
					<div className="truck-wheel truck-wheel-right" />
				</div>
			</div>

			<span className="status-content-hint">
				你的商品正在前往下一個階段
			</span>
		</div>
	);
}

function RatingContent() {
	const [rating, setRating] = useState(0);
	const [hoveredRating, setHoveredRating] = useState(0);

	const activeRating = hoveredRating || rating;

	return (
		<div className="summary-status-content rating-content">
			<span className="status-content-label">訂單已完成</span>

			<div
				className="rating-stars"
				onMouseLeave={() => setHoveredRating(0)}
			>
				{[1, 2, 3, 4, 5].map((star) => (
					<button
						key={star}
						type="button"
						className={
							star <= activeRating ? "is-active" : ""
						}
						onMouseEnter={() => setHoveredRating(star)}
						onClick={(event) => {
							event.stopPropagation();
							setRating(star);
						}}
						aria-label={`${star} 顆星`}
					>
						★
					</button>
				))}
			</div>

			<span className="status-content-hint">
				為這次購物體驗留下評價
			</span>
		</div>
	);
}

function CancelContent({ confirmed, onChange }) {
	return (
		<div className="summary-status-content cancel-content">
			<label
				className="cancel-checkbox"
				onClick={(event) => event.stopPropagation()}
			>
				<input
					type="checkbox"
					checked={confirmed}
					onChange={(event) =>
						onChange(event.target.checked)
					}
				/>

				<span className="custom-checkbox" />

				<span>誤操作嗎？</span>
			</label>

			<span className="status-content-hint">
				確認後可重新建立訂單
			</span>
		</div>
	);
}

function OrderSummaryRight({ order }) {
	const [cancelConfirmed, setCancelConfirmed] = useState(false);

	const status = STATUS_CONFIG[order.status];

	const renderStatusContent = () => {
		switch (order.status) {
			case "confirming":
				return <Countdown createdAt={order.createdAt} />;

			case "processing":
				return <TruckAnimation />;

			case "completed":
				return <RatingContent />;

			case "cancelled":
				return (
					<CancelContent
						confirmed={cancelConfirmed}
						onChange={setCancelConfirmed}
					/>
				);

			default:
				return null;
		}
	};

	const buttonDisabled =
		order.status === "cancelled" && !cancelConfirmed;

	return (
		<div className="summary-right">
			<div className="summary-status-area">
				<div className="summary-status-content-area">
					{renderStatusContent()}
				</div>

				<div
					className={`summary-status-label status-${order.status}`}
				>
					<span>訂單狀態</span>
					<strong>{status.label}</strong>
				</div>
			</div>

			<button
				className={`summary-action-button ${
					buttonDisabled ? "is-disabled" : ""
				}`}
				type="button"
				disabled={buttonDisabled}
				onClick={(event) => event.stopPropagation()}
			>
				{status.button}
				<span>→</span>
			</button>
		</div>
	);
}

export default OrderSummaryRight;
