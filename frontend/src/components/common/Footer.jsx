// components/common/Footer.jsx

import './Footer.css'

function Footer() {
	return (
		<footer className="app-footer">


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
