// pages/Abouts/ContactUs.jsx

import "./ContactUs.css";

function ContactUs() {
	return (
		<section className="contact-us">
			<div className="contact-us__container">
				<div className="contact-us__content">
					<p className="contact-us__eyebrow">
						CONTACT US
					</p>

					<h2 className="contact-us__title">
						有任何想法，
						<br />
						歡迎告訴我們。
					</h2>

					<p className="contact-us__description">
						無論是商品客製化、合作提案，
						或是對 CANKANO 有任何問題，
						都歡迎與我們聯絡。
					</p>
				</div>

				<div className="contact-us__actions">
					<a
						className="contact-us__link"
						href="mailto:hello@cankano.com"
					>
						<span>hello@cankano.com</span>
						<span className="contact-us__arrow">→</span>
					</a>

					<a
						className="contact-us__link"
						href="/contact"
					>
						<span>Contact Form</span>
						<span className="contact-us__arrow">→</span>
					</a>

					<a
						className="contact-us__link"
						href="/question"
					>
						<span>常見問題 Q&A</span>
						<span className="contact-us__arrow">→</span>
					</a>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
